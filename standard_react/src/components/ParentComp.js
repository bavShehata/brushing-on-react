import React, { Component } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

export class ParentComp extends Component {
  state = {
    name: "Bavly",
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "Bavly" });
    }, 2000);
  }
  render() {
    console.log("Parent component render");
    return (
      <div>
        ParentComp
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
