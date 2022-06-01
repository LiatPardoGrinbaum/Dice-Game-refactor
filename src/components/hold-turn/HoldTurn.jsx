import React from "react";
import "../main-game/style.css";

class HoldTurn extends React.Component {
  state = {
    player1: "player1",
    player2: "player2",
  };

  handleClick = () => {
    if (this.props.isPlayer1) {
      this.props.getNextPlayerOnClick("player2");
    } else if (this.props.isPlayer2) {
      this.props.getNextPlayerOnClick("player1");
    }
    // this.setState((prev) => {
    //   return {
    //     player1: !prev.player1,
    //     player2: !prev.player2,
    //   };
    // });
  };

  render() {
    return (
      <div>
        <button className="btn" onClick={this.handleClick}>
          HOLD
        </button>
      </div>
    );
  }
}

export default HoldTurn;
