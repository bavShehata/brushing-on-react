import React from "react";
import Person from "./Person";
const NameList = () => {
  const persons = [
    {
      id: 1,
      name: "Bruice",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 20,
      skill: "React",
    },
    {
      id: 3,
      name: "Diana",
      age: 35,
      skill: "React",
    },
  ];
  const personList = persons.map((person) => (
    <Person person={person} key={person.id} />
  ));
  return <div>{personList}</div>;
};
export default NameList;
