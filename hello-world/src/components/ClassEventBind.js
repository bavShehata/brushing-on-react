import React, { Component } from "react";

export class ClassEventBind extends Component {
  state = {
    msg: "Please click the button",
  };
  clickHandler = (e) => {
    this.setState({
      msg: "Thanks for clicking the button",
    });
    console.log("Button clicked");
  };
  clickHandler1(e) {
    this.setState({
      msg: "Thanks for clicking the button",
    });
    console.log("Button clicked");
  }
  clickHandler2 = function (e) {
    this.setState({
      msg: "Thanks for clicking the button",
    });
    console.log("Button clicked");
  };
  render() {
    return (
      <>
        <h1>{this.state.msg}</h1>
        <button
          onClick={(e) => {
            this.clickHandler1();
          }}
        >
          Class Click
        </button>
      </>
    );
  }
}

export default ClassEventBind;
