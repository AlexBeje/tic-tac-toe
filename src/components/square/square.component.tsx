import React from "react";

// Styles
import "./square.styles.css";

// Type definition
type SquareProps = {
  value: number;
};

class Square extends React.Component<SquareProps> {
  render() {
    return <div className="square">{this.props.value}</div>;
  }
}

export default Square;
