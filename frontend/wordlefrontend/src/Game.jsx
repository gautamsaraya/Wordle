import React from 'react';

function Game() {
  const userData = JSON.parse(localStorage.getItem('userData'));
  return (
    <div className="game-container">
      <h1>Welcome to the Game, {userData.username}!</h1>
      <p>Your game data: {JSON.stringify(userData)}</p>
      {/* Add your game logic and UI here */}
    </div>
  );
}

export default Game;