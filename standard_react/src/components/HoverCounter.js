import React, { Component } from "react";
import withCounter from "./withCounter";
export class HoverCounter extends Component {
  render() {
    return (
      <div>
        <h1 onMouseOver={this.props.incrementCount}>
          {this.props.name} Hovered {this.props.cnt} times
        </h1>
      </div>
    );
  }
}

export default withCounter(HoverCounter);
