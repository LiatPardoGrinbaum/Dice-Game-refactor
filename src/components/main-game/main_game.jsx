import React from "react";
import "./style.css";
import NewGameButton from "../New-Game-Button/NewGameButton.jsx";
import Player from "../player/player.jsx";

import RollDice from "../roll-dice/RollDice.jsx";
import HoldTurn from "../hold-turn/HoldTurn.jsx";
import GameOver from "../game-over/gameOver.jsx";
import EnterPage from "../enter-page/EnterPage.jsx";

class Main_Game extends React.Component {
  state = {
    inputValue: 100,
    currentSum: 0,
    player1Turn: true,
    player2Turn: false,
    totalScore1: 0,
    totalScore2: 0,
    isUpdate: true,
    gameOver: false,
    gotSix: false,
  };

  getCurrentSum = (sum) => {
    if (sum === 12) {
      this.setState({ gotSix: true });
      setTimeout(() => {
        this.setState({ gotSix: false, currentSum: 0 });
      }, 3000);

      if (this.state.player1Turn) {
        this.getNextPlayer("player2");
      } else if (this.state.player2Turn) {
        this.getNextPlayer("player1");
      }
    } else {
      this.setState((prev) => {
        return { currentSum: prev.currentSum + sum };
      });
    }
  };

  getNextPlayer = (player) => {
    if (player === "player1") {
      this.setState((prev) => {
        return { player1Turn: true, player2Turn: false, currentSum: 0, totalScore2: prev.currentSum + prev.totalScore2 };
      });
      // if (this.state.totalScore1 === 100 || this.state.totalScore1 > 100) {
      //   this.setState({ gameOver: true });
      // }
    }
    if (player === "player2") {
      this.setState((prev) => {
        return { player1Turn: false, player2Turn: true, currentSum: 0, totalScore1: prev.currentSum + prev.totalScore1 };
      });
    }
  };

  resetGame = () => {
    this.setState({
      inputValue: 100,
      currentSum: 0,
      player1Turn: true,
      player2Turn: false,
      totalScore1: 0,
      totalScore2: 0,
      isUpdate: true,
      gameOver: false,
    });
  };
  componentDidUpdate() {
    let input = this.state.inputValue;
    if (this.state.isUpdate) {
      if (this.state.totalScore1 > input || this.state.totalScore1 === input) {
        this.setState({ gameOver: true, isUpdate: false });
      } else if (this.state.totalScore2 > input || this.state.totalScore2 === input) {
        this.setState({ gameOver: true, isUpdate: false });
      }
    }
  }

  render() {
    return (
      <div className="main-container ">
        <EnterPage />
        <NewGameButton onButtonClick={this.resetGame} gameOver={this.state.gameOver} />

        {/*  <div className={this.state.gameOver ? "gameOver" : null}> */}
        <GameOver gameOver={this.state.gameOver} score1={this.state.totalScore1} score2={this.state.totalScore2} maxVal={this.state.inputValue} />
        {/*       <div className={this.state.gotSix ? "sixMessage" : null}>{this.state.gotSix && <h2>"Oh no! you got 6 and 6..."</h2>}</div> */}

        {this.state.gotSix && <div className="sixMessage">Oh no! you got 6 and 6...</div>}

        <div className="main-inner-container">
          <div className={`player ${this.state.player1Turn ? "active" : "hidden"}`}>
            <Player name="Player 1" currentSum={this.state.currentSum} isPlayer1={this.state.player1Turn} totScore={this.state.totalScore1} playerTurn="player-turn" />
          </div>
          <div className="diceTools">
            <RollDice getCurrentSumOnClick={this.getCurrentSum} />

            <HoldTurn getNextPlayerOnClick={this.getNextPlayer} isPlayer1={this.state.player1Turn} isPlayer2={this.state.player2Turn} />
            <label htmlFor="input">Enter number of maximum points:</label>
            <input
              type="text"
              value={this.state.inputValue}
              onChange={(e) => {
                this.setState({ inputValue: e.target.value });
              }}
              placeholder="FINAL SCORE"
              id="input"></input>
          </div>
          <div className={`player ${this.state.player2Turn ? "active" : "hidden"}`}>
            <Player name="Player 2" currentSum={this.state.currentSum} isPlayer2={this.state.player2Turn} totScore={this.state.totalScore2} playerTurn="player-turn" />
          </div>
        </div>
      </div>
    );
  }
}

export default Main_Game;
