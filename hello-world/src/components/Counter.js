import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  //   increment() {
  //     this.setState(
  //       {
  //         count: this.state.count + 1,
  //       },
  //       () => {
  //         console.log(`Callback value ${this.state.count}`);
  //       }
  //     );
  //   }
  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }
  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  render() {
    return (
      <>
        <div> Counter: {this.state.count}</div>
        <button
          onClick={(e) => {
            this.increment();
          }}
        >
          Increment
        </button>
        <button
          onClick={(e) => {
            this.incrementFive();
          }}
        >
          IncrementFive
        </button>
      </>
    );
  }
}

export default Counter;
