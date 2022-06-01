import React from "react";
import "../main-game/style.css";

class GameOver extends React.Component {
  render() {
    return (
      <div className={this.props.gameOver ? "gameOver" : null}>
        {this.props.gameOver && <h1> The winner is:</h1>}
        {this.props.score1 === this.props.maxVal && <h1>Player 1!</h1>}
        {this.props.score1 > this.props.maxVal && <h1>Player 2!</h1>}
        {this.props.score2 === this.props.maxVal && <h1>Player 2!</h1>}
        {this.props.score2 > this.props.maxVal && <h1>Player 1!</h1>}
      </div>
    );
  }
}

export default GameOver;
