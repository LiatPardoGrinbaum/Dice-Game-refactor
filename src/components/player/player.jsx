import React from "react";
import "../main-game/style.css";

class Player extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h1 className="title">{this.props.name}</h1>
        </div>
        {/*    <h1 className="currentSum">{this.props.isPlayer1 ? this.props.currentSum : 0}</h1> */}
        <div>
          <h1>Total Score</h1>
          <h1 style={{ color: " rgb(208, 250, 217)" }}>{this.props.totScore}</h1>
        </div>
        <div>
          <h2>current </h2>
          <h2 style={{ color: " rgb(208, 250, 217)" }}>{this.props.isPlayer1 ? this.props.currentSum : 0 || this.props.isPlayer2 ? this.props.currentSum : 0}</h2>
        </div>
        {/*   <h1 className="currentSum">{this.props.isPlayer2 ? this.props.currentSum : 0}</h1> */}
      </React.Fragment>
    );
  }
}

export default Player;

// <div className={`player-container ${this.props.isActive ? "active" : "hidden"}`}>
