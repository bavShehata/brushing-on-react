import React, { Component } from "react";

export class HoverCounterTwo extends Component {
  render() {
    return (
      <div>
        <h1 onMouseOver={this.props.incrementCount}>
          Hovered {this.props.count} times
        </h1>
      </div>
    );
  }
}

export default HoverCounterTwo;
