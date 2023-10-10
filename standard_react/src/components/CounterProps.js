import React, { Component } from "react";

export class CounterProps extends Component {
  state = { cnt: 0 };
  incrementCount = () => {
    this.setState((prevState) => ({
      cnt: prevState.cnt + 1,
    }));
  };
  render() {
    return <div>{this.props.render(this.state.cnt, this.incrementCount)}</div>;
  }
}

export default CounterProps;
