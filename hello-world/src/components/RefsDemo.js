import React, { Component } from "react";

export class RefsDemo extends Component {
  inputRef = React.createRef();
  cbRef = null;
  setCbRef = (ele) => (this.cbRef = ele);
  handleClick = () => {
    alert(this.inputRef.current.value);
  };

  componentDidMount() {
    console.log(this.cbRef);
    if (this.cbRef) this.cbRef.focus();

    // this.inputRef.current.focus();
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;
