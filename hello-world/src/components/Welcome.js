import React, { Component } from "react";

class Welcome extends Component {
  render = () => (
    <>
      <h1>Welcome {this.props.name}</h1>
      {this.props.children}
    </>
  );
}

export default Welcome;
