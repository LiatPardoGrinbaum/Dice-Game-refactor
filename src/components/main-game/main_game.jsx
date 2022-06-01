import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import NewGameButton from "../New-Game-Button/NewGameButton.jsx";
import Player from "../player/player.jsx";

import RollDice from "../roll-dice/RollDice.jsx";
import HoldTurn from "../hold-turn/HoldTurn.jsx";
import GameOver from "../game-over/gameOver.jsx";
import EnterPage from "../enter-page/EnterPage.jsx";

const Main_Game = () => {
  // state = {
  //   inputValue: 100,
  //   currentSum: 0,
  //   player1Turn: true,
  //   player2Turn: false,
  //   totalScore1: 0,
  //   totalScore2: 0,
  //   isUpdate: true,
  //   gameOver: false,
  //   gotSix: false,
  // };
  const [inputValue, setInputValue] = useState(100);
  const [currentSum, setCurrentSum] = useState(0);
  const [player1Turn, setplayer1Turn] = useState(true);
  const [player2Turn, setplayer2Turn] = useState(false);
  const [totalScore1, settotalScore1] = useState(0);
  const [totalScore2, settotalScore2] = useState(0);
  const [isUpdate, setisUpdate] = useState(true);
  const [gameOver, setgameOver] = useState(false);
  const [gotSix, setgotSix] = useState(false);

  const getCurrentSum = (sum) => {
    if (sum === 12) {
      // this.setState({ gotSix: true });
      setgotSix(true);
      setTimeout(() => {
        // this.setState({ gotSix: false, currentSum: 0 });
        setgotSix(false);
        setCurrentSum(0);
      }, 3000);

      if (player1Turn) {
        getNextPlayer("player2");
      } else if (player2Turn) {
        getNextPlayer("player1");
      }
    } else {
      // this.setState((prev) => {
      //   return { currentSum: prev.currentSum + sum };
      // });
      setCurrentSum((prev) => prev + sum);
    }
  };

  const getNextPlayer = (player) => {
    console.log(player);
    if (player === "player1") {
      // this.setState((prev) => {
      //   return { player1Turn: true, player2Turn: false, currentSum: 0, totalScore2: prev.currentSum + prev.totalScore2 };
      // });
      let prevCurrentSum = currentSum;
      let prevTotalScore2 = totalScore2;
      setCurrentSum(0);
      setplayer1Turn(true);
      setplayer2Turn(false);
      settotalScore2(prevCurrentSum + prevTotalScore2);
      //check if logic didnt change because of this prev... !!!!!!!!!! maybe useREf???!
    }
    if (player === "player2") {
      // this.setState((prev) => {
      //   return { player1Turn: false, player2Turn: true, currentSum: 0, totalScore1: prev.currentSum + prev.totalScore1 };
      // });
      let prevCurrentSum = currentSum;
      console.log(currentSum);
      let prevTotalScore1 = totalScore1;
      setCurrentSum(0);
      setplayer1Turn(false);
      setplayer2Turn(true);
      settotalScore1(prevCurrentSum + prevTotalScore1);
      //same question as up
    }
  };

  const resetGame = () => {
    // this.setState({
    //   inputValue: 100,
    //   currentSum: 0,
    //   player1Turn: true,
    //   player2Turn: false,
    //   totalScore1: 0,
    //   totalScore2: 0,
    //   isUpdate: true,
    //   gameOver: false,
    // });

    setInputValue(100);
    setCurrentSum(0);
    setplayer1Turn(true);
    setplayer2Turn(false);
    settotalScore1(0);
    settotalScore2(0);
    setisUpdate(true);
    setgameOver(false);
  };
  // componentDidUpdate() {
  //   let input = this.state.inputValue;
  //   if (this.state.isUpdate) {
  //     if (this.state.totalScore1 > input || this.state.totalScore1 === input) {
  //       this.setState({ gameOver: true, isUpdate: false });
  //     } else if (this.state.totalScore2 > input || this.state.totalScore2 === input) {
  //       this.setState({ gameOver: true, isUpdate: false });
  //     }
  //   }
  // }
  useEffect(() => {
    let input = inputValue;
    if (isUpdate) {
      if (totalScore1 > input || totalScore1 === input) {
        setgameOver(true);
        setisUpdate(false);
      } else if (totalScore2 > input || totalScore2 === input) {
        setgameOver(true);
        setisUpdate(false);
      }
    }
  }, [totalScore1, totalScore2]);

  return (
    <div className="main-container ">
      <EnterPage />
      <NewGameButton onButtonClick={resetGame} gameOver={gameOver} />

      {/*  <div className={this.state.gameOver ? "gameOver" : null}> */}
      <GameOver gameOver={gameOver} score1={totalScore1} score2={totalScore2} maxVal={inputValue} />
      {/*       <div className={this.state.gotSix ? "sixMessage" : null}>{this.state.gotSix && <h2>"Oh no! you got 6 and 6..."</h2>}</div> */}

      {gotSix && <div className="sixMessage">Oh no! you got 6 and 6...</div>}

      <div className="main-inner-container">
        <div className={`player ${player1Turn ? "active" : "hidden"}`}>
          {/* maybe here to change isplayer1 name to the same state name!!!!!!!!!! */}
          <Player name="Player 1" currentSum={currentSum} isPlayer1={player1Turn} totScore={totalScore1} playerTurn="player-turn" />
        </div>
        <div className="diceTools">
          <RollDice getCurrentSumOnClick={getCurrentSum} />

          <HoldTurn getNextPlayerOnClick={getNextPlayer} isPlayer1={player1Turn} isPlayer2={player2Turn} />
          <label htmlFor="input">Enter number of maximum points:</label>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            placeholder="FINAL SCORE"
            id="input"></input>
        </div>
        <div className={`player ${player2Turn ? "active" : "hidden"}`}>
          <Player name="Player 2" currentSum={currentSum} isPlayer2={player2Turn} totScore={totalScore2} playerTurn="player-turn" />
        </div>
      </div>
    </div>
  );
};

export default Main_Game;
