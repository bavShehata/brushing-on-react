import React from "react";

const withCounter = (WrappedComponent) => {
  class WithCounter extends React.Component {
    state = { cnt: 0 };
    incrementCount = () => {
      this.setState((prevState) => ({
        cnt: prevState.cnt + 1,
      }));
    };
    render() {
      return (
        <WrappedComponent
          name="Bavly"
          incrementCount={this.incrementCount}
          cnt={this.state.cnt}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;
