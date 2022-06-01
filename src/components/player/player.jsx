// import React, { useContext } from "react";
import React from "react";

import { myContext } from "../myContext/myContext";
import "../main-game/style.css";

const Player = ({ currentSum, isPlayer1, totScore, playerTurn, isPlayer2, name }) => {
  // const { name, isPlayer1, isPlayer2, currentSum, totScore } = useContext(myContext);

  return (
    <React.Fragment>
      <div>
        <h1 className="title">{name}</h1>
      </div>

      <div>
        <h1>Total Score</h1>

        <h1 style={{ color: " rgb(208, 250, 217)" }}>{totScore}</h1>
      </div>
      <div>
        <h2>current </h2>
        <h2 style={{ color: " rgb(208, 250, 217)" }}>{isPlayer1 ? currentSum : 0 || isPlayer2 ? currentSum : 0}</h2>
      </div>
    </React.Fragment>
  );
};

export default Player;

// <div className={`player-container ${this.props.isActive ? "active" : "hidden"}`}>
