import React, { useState } from "react";
import "../main-game/style.css";

const RollDice = ({ getCurrentSumOnClick }) => {
  // state = {
  //   isRoll: false,
  //   dice1Id: "",
  //   dice2Id: "",
  //   dice1Value: null,
  //   dice2Value: null,
  //   currentA: null,
  //   currentB: null,
  // };

  const [isRoll, setisRoll] = useState(false);
  const [dice1Id, setdice1Id] = useState("");
  const [dice2Id, setdice2Id] = useState("");
  const [dice1Value, setdice1Value] = useState(null);
  const [dice2Value, setdice2Value] = useState(null);

  const getRandomNum = () => {
    let length = 6;
    return Math.floor(Math.random() * length);
  };

  const handleClick = () => {
    const diceArr = [
      { id: "dice1 dice", value: 1 },
      { id: "dice2 dice", value: 2 },
      { id: "dice3 dice", value: 3 },
      { id: "dice4 dice", value: 4 },
      { id: "dice5 dice", value: 5 },
      { id: "dice6 dice", value: 6 },
    ];
    let random1 = getRandomNum();
    let random2 = getRandomNum();
    // this.setState({ dice1Id: diceArr[random1].id, dice1Value: diceArr[random1].value, dice2Id: diceArr[random2].id, dice2Value: diceArr[random2].value, currentA: this.state.dice1Value + this.state.dice2Value });
    setdice1Id(diceArr[random1].id);
    setdice1Value(diceArr[random1].value);
    setdice2Id(diceArr[random2].id);
    setdice2Value(diceArr[random2].value);
    getCurrentSumOnClick(diceArr[random1].value + diceArr[random2].value);
  };

  return (
    <div>
      <div className={dice1Id} value={dice1Value} />
      <div className={dice2Id} value={dice2Value} />
      <button className="btn" onClick={handleClick}>
        ROLL DICE
      </button>
    </div>
  );
};

export default RollDice;
