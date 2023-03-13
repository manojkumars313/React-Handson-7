import React, { createContext, useState } from "react";

export const context = createContext();

const StudentsInfo = (props) => {
  // const data = JSON.parse("../rows-data.json");
  // const [students, setStudents] = useState(data);
  const [students, setStudents] = useState([
    {
      id: 1,
      Name: "Aashish",
      Age: 24,
      Course: "MERN",
      Batch: "June",
    },
    {
      id: 2,
      Name: "Ankit",
      Age: 23,
      Course: "MERN",
      Batch: "September",
    },
    {
      id: 3,
      Name: "Sanjana",
      Age: 62,
      Course: "MERN",
      Batch: "August",
    },
    {
      id: 4,
      Name: "Rohit",
      Age: 30,
      Course: "MERN",
      Batch: "July",
    },
  ]);
  return (
    <div>
      <context.Provider value={[students, setStudents]}>
        {props.children}
      </context.Provider>
    </div>
  );
};

export default StudentsInfo;
