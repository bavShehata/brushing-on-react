import React, { Component, createRef } from "react";
import FRInput from "./FRInput";

export class FRParentInput extends Component {
  inputRef = createRef();
  clickHandler = () => this.inputRef.current.focus();
  render() {
    return (
      <div>
        <FRInput ref={this.inputRef} />
        <button onClick={this.clickHandler}>Focus input</button>
      </div>
    );
  }
}

export default FRParentInput;
