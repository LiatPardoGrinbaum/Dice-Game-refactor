import React from "react";
import "../main-game/style.css";

class RollDice extends React.Component {
  state = {
    isRoll: false,
    dice1Id: "",
    dice2Id: "",
    dice1Value: null,
    dice2Value: null,
    currentA: null,
    currentB: null,
  };

  getRandomNum() {
    let length = 6;
    return Math.floor(Math.random() * length);
  }

  handleClick = () => {
    const diceArr = [
      { id: "dice1 dice", value: 1 },
      { id: "dice2 dice", value: 2 },
      { id: "dice3 dice", value: 3 },
      { id: "dice4 dice", value: 4 },
      { id: "dice5 dice", value: 5 },
      { id: "dice6 dice", value: 6 },
    ];
    let random1 = this.getRandomNum();
    let random2 = this.getRandomNum();
    this.setState({ dice1Id: diceArr[random1].id, dice1Value: diceArr[random1].value, dice2Id: diceArr[random2].id, dice2Value: diceArr[random2].value, currentA: this.state.dice1Value + this.state.dice2Value });
    this.props.getCurrentSumOnClick(diceArr[random1].value + diceArr[random2].value);
  };

  render() {
    return (
      <div>
        <div className={this.state.dice1Id} value={this.state.dice1Value} />
        <div className={this.state.dice2Id} value={this.state.dice2Value} />
        <button className="btn" onClick={this.handleClick}>
          ROLL DICE
        </button>
      </div>
    );
  }
}

export default RollDice;
