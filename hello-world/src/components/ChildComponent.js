import React from "react";
const ChildComponent = (props) => {
  return (
    <>
      <button onClick={() => props.greetHandler("Bavly")}>Greet Parent</button>
    </>
  );
};
export default ChildComponent;
