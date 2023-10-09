import React, { Component } from "react";

export class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error, info) {
    console.log("ERR: ", error);
    console.log("INF: ", info);
  }
  render() {
    if (this.state.hasError) return <h1>Something went wrong</h1>;
    else return this.props.children;
  }
}

export default ErrorBoundary;
