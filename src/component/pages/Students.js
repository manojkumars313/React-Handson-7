import React, { useContext } from "react";
// import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { context } from "../StudentsInfo";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
// import ReadOnlyRows from "./readOnlyRows";
import "../css/students.css";

const Students = () => {
  const [students] = useContext(context);
  return (
    <>
      <div className="data-table">
        <header className="header">
          <span className="title">Students Details</span>

          <Link to="/NewStudent">
            <Button variant="contained">Add new student</Button>
          </Link>
        </header>

        <form>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 450 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Age</TableCell>
                  <TableCell align="right">Course</TableCell>
                  <TableCell align="right">Batch</TableCell>
                  <TableCell align="right">Change</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {students.map((student) => (
                  <TableRow
                    key={student.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    {/* <ReadOnlyRows student={student} /> */}
                    <TableCell component="th" scope="row">
                      {student.Name}
                    </TableCell>
                    <TableCell align="right">{student.Age}</TableCell>
                    <TableCell align="right">{student.Course}</TableCell>
                    <TableCell align="right">{student.Batch}</TableCell>
                    <TableCell align="right">
                      <Link to={`/UpdateStudent/${student.id}`}>Edit</Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </form>
      </div>
      {/* <Outlet /> */}
    </>
  );
};

export default Students;
