import React, { Component } from "react";

export class ClassClick extends Component {
  clickHandler = (e) => {
    console.log("Button clicked");
  };
  clickHandler1(e) {
    console.log("Button clicked");
  }
  clickHandler2 = function (e) {
    console.log("Button clicked");
  };
  render() {
    return (
      <>
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

export default ClassClick;
