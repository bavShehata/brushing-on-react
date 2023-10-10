import React, { Component } from "react";
import withCounter from "./withCounter";
export class ClickCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.incrementCount}>
          {this.props.name} Clicked {this.props.cnt} times
        </button>
      </div>
    );
  }
}

export default withCounter(ClickCounter);
