import React, { Fragment } from "react";

const Greet = (props) => {
  const { name, superHero } = props;
  return (
    <>
      <h1>
        Hello {name} - {superHero}!
      </h1>
      {props.children}
    </>
  );
};
export default Greet;
