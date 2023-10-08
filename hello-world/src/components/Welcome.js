import React, { Component } from "react";

class Welcome extends Component {
  render = () => {
    const { name, superHero } = this.props;
    return (
      <>
        <h1>
          Welcome {name} - {superHero}
        </h1>
        {this.props.children}
      </>
    );
  };
}

export default Welcome;
