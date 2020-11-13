import React from "react";

import "./square.styles.css";

type SquareProps = {
  value: number;
};

class Square extends React.Component<SquareProps> {
  render() {
    return <div className="square">{this.props.value}</div>;
  }
}

export default Square;
