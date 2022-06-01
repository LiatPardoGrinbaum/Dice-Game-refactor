import React, { useState } from "react";
import "../main-game/style.css";

const HoldTurn = ({ isPlayer1, isPlayer2, getNextPlayerOnClick }) => {
  // state = {
  //   player1: "player1",
  //   player2: "player2",
  // };
  const [namePlayer1, setnamePlayer1] = useState("player1");
  const [namePlayer2, setnamePlayer2] = useState("player2");

  const handleClick = () => {
    if (isPlayer1) {
      getNextPlayerOnClick(namePlayer2);
    } else if (isPlayer2) {
      getNextPlayerOnClick(namePlayer1);
    }
    // this.setState((prev) => {
    //   return {
    //     player1: !prev.player1,
    //     player2: !prev.player2,
    //   };
    // });
  };

  return (
    <div>
      <button className="btn" onClick={handleClick}>
        HOLD
      </button>
    </div>
  );
};

export default HoldTurn;
