import React from "react";

const withCounter = (WrappedComponent, incr) => {
  class WithCounter extends React.Component {
    state = { cnt: 0 };
    incrementCount = () => {
      this.setState((prevState) => ({
        cnt: prevState.cnt + incr,
      }));
    };
    render() {
      return (
        <WrappedComponent
          incrementCount={this.incrementCount}
          cnt={this.state.cnt}
          {...this.props}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;
