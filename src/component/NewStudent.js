import React, { useContext } from "react";
import { context } from "./StudentsInfo";
import { Link } from "react-router-dom";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const NewStudent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [batch, setBatch] = useState("");
  const [students, setStudents] = useContext(context);

  const handleNewName = (e) => {
    setName(e.target.value);
  };
  const handleNewAge = (e) => {
    setAge(e.target.value);
  };
  const handleNewCourse = (e) => {
    setCourse(e.target.value);
  };
  const handleNewBatch = (e) => {
    setBatch(e.target.value);
  };

  const SubmitChanges = () => {
    setStudents([
      ...students,
      {
        id: new Date().getTime().toString(),
        Name: name,
        Age: age,
        Course: course,
        Batch: batch,
      },
    ]);
  };
  return (
    <div className="student-form">
      <form>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={6}>
            <TextField
              type="text"
              id="outlined-basic"
              name="name"
              label="Name"
              value={name}
              variant="outlined"
              style={{ width: "20rem" }}
              onChange={handleNewName}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              id="outlined-basic"
              name="age"
              label="Age"
              value={age}
              variant="outlined"
              style={{ width: "20rem" }}
              onChange={handleNewAge}
            />
          </Grid>{" "}
          <Grid item xs={6}>
            <TextField
              type="text"
              id="outlined-basic"
              name="course"
              label="Course"
              value={course}
              variant="outlined"
              style={{ width: "20rem" }}
              onChange={handleNewCourse}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              id="outlined-basic"
              name="batch"
              label="Batch"
              value={batch}
              variant="outlined"
              style={{ width: "20rem" }}
              onChange={handleNewBatch}
            />
          </Grid>
        </Grid>

        <Stack spacing={10} direction="row" margin={4}>
          <Link to="/Students">
            <Button variant="outlined" size="large" color="secondary">
              Cancel
            </Button>
          </Link>

          <Link to="/Students">
            <Button
              type="submit"
              onClick={SubmitChanges}
              variant="contained"
              size="large"
            >
              Submit
            </Button>
          </Link>
        </Stack>
      </form>
    </div>
  );
};

export default NewStudent;
