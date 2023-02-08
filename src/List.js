import React, { useState } from "react";
import data from "./data";

const List = () => {
  const [value, setValue] = useState(data.length);
  const [people, setPeople] = useState(data);

  const removePeople = () => {
    setPeople([]);
    setValue(0);
  };
  return (
    <>
      <h2>{value} Birthdays Today</h2>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <div key={id} className="person">
            <img src={image}></img>
            <h4>{name}</h4>
            <p>{age} years</p>
          </div>
        );
      })}
      <button onClick={() => removePeople()}>Clear All</button>
    </>
  );
};

export default List;
