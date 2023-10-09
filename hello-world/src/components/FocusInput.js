import React, { Component, createRef } from "react";
import Input from "./Input";

export class FocusInput extends Component {
  componentRef = createRef();
  clickHandler = () => {
    this.componentRef.current.focusInput();
  };
  render() {
    return (
      <div>
        <Input ref={this.componentRef} />
        <button onClick={this.clickHandler}>Focus input</button>
      </div>
    );
  }
}

export default FocusInput;
