import React from 'react';
import { useLocation } from 'react-router-dom';

function Game() {
  const location = useLocation();
  const userData = location.state; // This is where you'll get the data passed from the login

  return (
    <div className="game-container">
      <h1>Welcome to the Game, {userData.username}!</h1>
      <p>Your game data: {JSON.stringify(userData)}</p>
      {/* Add your game logic and UI here */}
    </div>
  );
}

export default Game;