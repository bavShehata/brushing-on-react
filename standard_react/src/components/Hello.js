import React from "react";

const Hello = () => {
  return (
    // <div>
    //   <h1>Hello Bavly</h1>
    // </div>
    React.createElement(
      "div",
      { id: "hello", className: "dummyClass" },
      React.createElement("h1", null, "Hello Bavly")
    )
  );
};
export default Hello;
