import React from "react";

// Styles
import "./square.styles.css";

// Type definition
type SquareProps = {
  value: number | string | null;
};

type SquareState = {
  value: number | string | null;
};

class Square extends React.Component<SquareProps, SquareState> {
  constructor(props: SquareState) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    return (
      <div className="square" onClick={() => this.setState({ value: "X" })}>
        {this.state.value}
      </div>
    );
  }
}

export default Square;
