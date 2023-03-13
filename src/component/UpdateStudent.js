import React, { useContext } from "react";
import { context } from "./StudentsInfo";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

const UpdateStudent = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [batch, setBatch] = useState("");
  const [students, setStudents] = useContext(context);

  const handleEditName = (e) => {
    setName(e.target.value);
  };
  const handleEditAge = (e) => {
    setAge(e.target.value);
  };
  const handleEditCourse = (e) => {
    setCourse(e.target.value);
  };
  const handleEditBatch = (e) => {
    setBatch(e.target.value);
  };

  useEffect(() => {
    students.forEach((student) => {
      if (student.id === id) {
        setName(student.Name);
        setAge(student.Age);
        setCourse(student.Course);
        setBatch(student.Batch);
      }
    });
  }, [id, students]);

  const SubmitChanges = () => {
    setStudents((students) =>
      students.map((student) =>
        student.id === id
          ? {
              id: id,
              Name: name,
              Age: age,
              Batch: batch,
              Course: course,
            }
          : student
      )
    );
  };

  return (
    <div className="student-form">
      <form>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={6}>
            <TextField
              type="text"
              id="outlined-basic"
              name="Name"
              label="Name"
              variant="outlined"
              style={{ width: "20rem" }}
              value={name}
              onChange={handleEditName}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              id="outlined-basic"
              name="Age"
              label="Age"
              variant="outlined"
              style={{ width: "20rem" }}
              value={age}
              onChange={handleEditAge}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              id="outlined-basic"
              name="Course"
              label="Course"
              variant="outlined"
              style={{ width: "20rem" }}
              value={course}
              onChange={handleEditCourse}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              id="outlined-basic"
              name="Batch"
              label="Batch"
              variant="outlined"
              style={{ width: "20rem" }}
              value={batch}
              onChange={handleEditBatch}
            />
          </Grid>
          <br /> <br />
          <Stack spacing={5} direction="row" margin={5}>
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
                Update
              </Button>
            </Link>
          </Stack>
        </Grid>
      </form>
    </div>
  );
};

export default UpdateStudent;
