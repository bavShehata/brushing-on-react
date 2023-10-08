import React from "react";
import Person from "./Person";
const NameList = () => {
  const names = ["Bruce", "Clark", "Diana", "Bruce"];
  const persons = [
    {
      id: 1,
      name: "Bruce",
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
  //   const personList = persons.map((person) => (
  //     <Person person={person} key={person.id} />
  //   ));
  const nameList = names.map((name, idx) => <h1 key={idx}>{name}</h1>);
  return <div>{nameList}</div>;
};
export default NameList;
