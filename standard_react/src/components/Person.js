import React from "react";
const Person = (props) => {
  const { person } = props;
  return (
    <div>
      <h2>{person.name}</h2>
      <h3>{person.age}</h3>
      <h4>{person.skill}</h4>
    </div>
  );
};
export default Person;
