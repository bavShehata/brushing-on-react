import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  state = {
    parentName: "Parent",
  };

  greetParent = (name) => {
    alert(`Hello ${this.state.parentName} from ${name}`);
  };
  render() {
    return (
      <>
        <ChildComponent greetHandler={this.greetParent} />
      </>
    );
  }
}

export default ParentComponent;
