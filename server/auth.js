import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { query } from "./db.js";

export async function registerUser({ username, password }) {
  const passwordHash = await bcrypt.hash(password, 10);
  const result = await query(
    "INSERT INTO users (username, password_hash) VALUES (:username, :passwordHash)",
    { username, passwordHash }
  );
  return { id: result.insertId, username };
}

export async function loginUser({ username, password }) {
  const rows = await query(
    "SELECT id, username, password_hash FROM users WHERE username = :username LIMIT 1",
    { username }
  );

  const user = rows[0];
  if (!user) {
    throw new Error("INVALID_CREDENTIALS");
  }

  const ok = await bcrypt.compare(password, user.password_hash);
  if (!ok) {
    throw new Error("INVALID_CREDENTIALS");
  }

  return {
    token: jwt.sign(
      { userId: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    ),
    user: {
      id: user.id,
      username: user.username
    }
  };
}

export function requireAuth(req, res, next) {
  const auth = req.headers.authorization || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : null;

  if (!token) {
    res.status(401).json({ error: "UNAUTHORIZED" });
    return;
  }

  try {
    req.auth = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: "UNAUTHORIZED" });
  }
}
