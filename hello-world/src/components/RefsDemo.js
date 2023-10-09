import React, { Component } from "react";

export class RefsDemo extends Component {
  inputRef = React.createRef();

  handleClick = () => {
    alert(this.inputRef.current.value);
  };
  componentDidMount() {
    console.log(this.inputRef);
    console.log(this.inputRef.current);
    this.inputRef.current.focus();
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;
