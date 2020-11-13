import React from "react";
import ReactDOM from "react-dom";

// Components
import Game from "./components/game/game.component";

// Styles
import "./index.css";

class App extends React.Component {
  render() {
    return <Game />;
  }
}

// ========================================

ReactDOM.render(<App />, document.getElementById("root"));
