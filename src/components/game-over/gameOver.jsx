import React from "react";
import "../main-game/style.css";

const GameOver = ({ gameOver, maxVal, score1, score2 }) => {
  return (
    <div className={gameOver ? "gameOver" : null}>
      {gameOver && <h1> The winner is:</h1>}
      {score1 === maxVal && <h1>Player 1!</h1>}
      {score1 > maxVal && <h1>Player 2!</h1>}
      {score2 === maxVal && <h1>Player 2!</h1>}
      {score2 > maxVal && <h1>Player 1!</h1>}
    </div>
  );
};

export default GameOver;
