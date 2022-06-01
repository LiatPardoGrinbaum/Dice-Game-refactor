import React from "react";
import "../enter-page/enterpage.css";

class EnterPage extends React.Component {
  state = {
    shown: false,
  };

  handleClick = () => {
    // this.setState({
    //   shown: !this.state.shown,
    // });
    const enterPage = document.querySelector(".enterIn");
    enterPage.style.opacity = "0";
    enterPage.style.transition = "all 1.4s ease-in";
    setTimeout(() => {
      enterPage.style.display = "none";
    }, 1500);
  };

  handleClick2 = () => {
    this.setState((prev) => {
      return { shown: !prev.shown };
    });
  };
  render() {
    // const { shown } = this.state;
    return (
      <div className="enterIn">
        <div className="inner-wrap">
          <h1 style={{ fontSize: "40px" }}>Dice Game</h1>
          <button className="btn-enter" onClick={this.handleClick}>
            Let's Play!
          </button>
          {/*    <h2>Instructions</h2> */}
          <button className="instraBtn" onClick={this.handleClick2}>
            Instructions
          </button>
          <p style={this.state.shown ? { visibility: "visible" } : { visibility: "hidden" }}>
            The game has 2 players, playing in rounds. In each turn, a player rolls 2 dices as many times as he wishes. Each result will get added to his round's score. But if the player rolls a double six all his round's score gets lost. After that, its the next player's turn. A player can choose to 'Hold', which means that his round's score gets added to his global score. After that, its the
            next players turn. The first player to reach 100 points wins. Add an input field where players can set the winning score, so that they can change the predefined score of 100. The player can create a new game whenever they want to.
          </p>
          <p className="liat"> by Liat Pardo Grinbaum</p>
        </div>
      </div>
    );
  }
}

export default EnterPage;

/*     <div class="container">
      <div class="top">
        <h1>Welcome</h1>
        <button class="btn btn1">Enter</button>
      </div>
      <div class="bottom">Hello</div>
    </div>
    <script>
      const topBtn1 = document.querySelector(".btn1");

      topBtn1.addEventListener("click", () => {
        const top = document.querySelector(".top");
        const bottom = document.querySelector(".bottom");

        top.style.opacity = "0";
        top.style.transition = "all 1.4s ease-in";
        setTimeout(() => {
          top.style.display = "none";
        }, 1500);
      });
    </script>
  </body>
</html> */
