import http from "node:http";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Server as SocketServer } from "socket.io";
import { registerUser, loginUser, requireAuth } from "./auth.js";
import { createSession, getSessionByCode, joinSession, saveGameState, appendGameLog } from "./sessions.js";

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: process.env.CLIENT_ORIGIN?.split(",") || "*"
  }
});

app.use(cors({ origin: process.env.CLIENT_ORIGIN?.split(",") || "*", credentials: true }));
app.use(express.json({ limit: "1mb" }));
app.use(express.static(process.cwd()));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/register", async (req, res) => {
  try {
    const user = await registerUser(req.body);
    res.json({ success: true, user });
  } catch (error) {
    res.status(400).json({ error: "REGISTER_FAILED", details: String(error.message || error) });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const payload = await loginUser(req.body);
    res.json(payload);
  } catch {
    res.status(401).json({ error: "INVALID_CREDENTIALS" });
  }
});

app.post("/api/sessions", requireAuth, async (req, res) => {
  try {
    const session = await createSession({
      hostUserId: req.auth.userId,
      hostUsername: req.auth.username
    });
    res.json(session);
  } catch (error) {
    res.status(400).json({ error: "CREATE_SESSION_FAILED", details: String(error.message || error) });
  }
});

app.post("/api/sessions/:code/join", requireAuth, async (req, res) => {
  try {
    const session = await joinSession({
      sessionCode: req.params.code,
      userId: req.auth.userId,
      username: req.auth.username
    });
    io.to(req.params.code).emit("session:state", session.gameState);
    res.json(session);
  } catch (error) {
    res.status(400).json({ error: String(error.message || error) });
  }
});

app.get("/api/sessions/:code/state", requireAuth, async (req, res) => {
  const session = await getSessionByCode(req.params.code);
  if (!session) {
    res.status(404).json({ error: "SESSION_NOT_FOUND" });
    return;
  }
  res.json({
    sessionCode: session.session_code,
    status: session.status,
    gameState: session.gameState
  });
});

app.post("/api/sessions/:code/move", requireAuth, async (req, res) => {
  const session = await getSessionByCode(req.params.code);
  if (!session) {
    res.status(404).json({ error: "SESSION_NOT_FOUND" });
    return;
  }

  const { gameState, eventText, status } = req.body;
  await saveGameState(session.id, gameState, status);

  if (eventText) {
    await appendGameLog({
      sessionId: session.id,
      turnNumber: gameState?.turnNumber || 1,
      eventText
    });
  }

  io.to(req.params.code).emit("session:state", gameState);
  res.json({ success: true });
});

io.on("connection", (socket) => {
  socket.on("session:join", ({ sessionCode }) => {
    socket.join(sessionCode);
  });

  socket.on("session:action", async ({ sessionCode, gameState, eventText }) => {
    const session = await getSessionByCode(sessionCode);
    if (!session) {
      socket.emit("session:error", { error: "SESSION_NOT_FOUND" });
      return;
    }

    await saveGameState(session.id, gameState, "active");
    if (eventText) {
      await appendGameLog({
        sessionId: session.id,
        turnNumber: gameState?.turnNumber || 1,
        eventText
      });
    }

    io.to(sessionCode).emit("session:state", gameState);
  });
});

const port = Number(process.env.PORT || 3000);
server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
