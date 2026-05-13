export function createInitialGameState({ hostUserId, hostUsername, mode = "multiplayer" }) {
  return {
    meta: {
      mode,
      hostUserId,
      createdAt: new Date().toISOString()
    },
    players: [
      {
        userId: hostUserId,
        username: hostUsername,
        money: 1500,
        position: 0,
        bankrupt: false
      }
    ],
    turnNumber: 1,
    currentPlayerIndex: 0,
    boardVersion: 1,
    eventLog: []
  };
}
