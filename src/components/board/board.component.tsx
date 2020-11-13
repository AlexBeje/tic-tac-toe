import React from "react";

// Styles
import "./board.styles.css";

// Components
import Square from "../square/square.component";

class Board extends React.Component {
  renderSquare(square: number) {
    return <Square value={square} />;
  }

  render() {
    const status = "Next player: X";

    return (
      <>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </>
    );
  }
}

export default Board;
