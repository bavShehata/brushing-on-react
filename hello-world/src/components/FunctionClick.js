import React from "react";
const FunctionClick = () => {
  const clickHandler = () => {
    console.log("Button clicks");
  };
  function clickHandler2() {
    console.log("Button clicks");
  }
  return (
    <>
      <button
        onClick={(e) => {
          clickHandler2();
        }}
      >
        Click
      </button>
    </>
  );
};
export default FunctionClick;
