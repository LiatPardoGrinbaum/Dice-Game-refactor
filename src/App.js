import React from "react";
import "./App.css";
import Main_Game from "./components/main-game/main_game.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Main_Game />
      </div>
    );
  }
}

export default App;
