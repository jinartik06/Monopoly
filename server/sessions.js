import { query } from "./db.js";
import { createInitialGameState } from "./game-state.js";

function createSessionCode() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i += 1) {
    code += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return code;
}

export async function createSession({ hostUserId, hostUsername }) {
  const sessionCode = createSessionCode();
  const gameState = createInitialGameState({ hostUserId, hostUsername });

  const result = await query(
    `INSERT INTO game_sessions (session_code, host_id, status, game_state_json)
     VALUES (:sessionCode, :hostUserId, 'waiting', :gameStateJson)`,
    {
      sessionCode,
      hostUserId,
      gameStateJson: JSON.stringify(gameState)
    }
  );

  await query(
    `INSERT INTO session_players (session_id, user_id, player_index, color, money, position)
     VALUES (:sessionId, :userId, 0, '#5cf0ff', 1500, 0)`,
    {
      sessionId: result.insertId,
      userId: hostUserId
    }
  );

  return { sessionId: result.insertId, sessionCode, gameState };
}

export async function getSessionByCode(sessionCode) {
  const rows = await query(
    `SELECT gs.*, u.username AS host_username
     FROM game_sessions gs
     LEFT JOIN users u ON u.id = gs.host_id
     WHERE gs.session_code = :sessionCode
     LIMIT 1`,
    { sessionCode }
  );

  const session = rows[0];
  if (!session) return null;

  return {
    ...session,
    gameState: session.game_state_json ? JSON.parse(session.game_state_json) : null
  };
}

export async function joinSession({ sessionCode, userId, username }) {
  const session = await getSessionByCode(sessionCode);
  if (!session) {
    throw new Error("SESSION_NOT_FOUND");
  }

  const players = await query(
    "SELECT * FROM session_players WHERE session_id = :sessionId ORDER BY player_index ASC",
    { sessionId: session.id }
  );

  const existing = players.find((player) => player.user_id === userId);
  if (existing) {
    return session;
  }

  if (players.length >= 4) {
    throw new Error("SESSION_FULL");
  }

  const colorPool = ["#5cf0ff", "#ff4c66", "#70ffbf", "#ffc65c"];
  await query(
    `INSERT INTO session_players (session_id, user_id, player_index, color, money, position)
     VALUES (:sessionId, :userId, :playerIndex, :color, 1500, 0)`,
    {
      sessionId: session.id,
      userId,
      playerIndex: players.length,
      color: colorPool[players.length]
    }
  );

  const gameState = session.gameState || createInitialGameState({ hostUserId: session.host_id, hostUsername: session.host_username });
  gameState.players.push({
    userId,
    username,
    money: 1500,
    position: 0,
    bankrupt: false
  });

  await saveGameState(session.id, gameState);
  return { ...session, gameState };
}

export async function saveGameState(sessionId, gameState, status) {
  await query(
    `UPDATE game_sessions
     SET game_state_json = :gameStateJson,
         status = COALESCE(:status, status)
     WHERE id = :sessionId`,
    {
      sessionId,
      gameStateJson: JSON.stringify(gameState),
      status: status || null
    }
  );
}

export async function appendGameLog({ sessionId, turnNumber, eventText }) {
  await query(
    `INSERT INTO game_logs (session_id, turn_number, event_text)
     VALUES (:sessionId, :turnNumber, :eventText)`,
    { sessionId, turnNumber, eventText }
  );
}
