import React from "react";
import "../main-game/style.css";

class NewGameButton extends React.Component {
  handleClick = () => {
    this.props.onButtonClick();
  };
  render() {
    return (
      <button className={`btn-new-page btn ${this.props.gameOver ? " btn-blink" : null}`} onClick={this.handleClick}>
        New Game
      </button>
    );
  }
}

export default NewGameButton;
