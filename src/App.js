import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/pages/Home";
import Students from "./component/pages/Students";
import Contact from "./component/pages/Contact";
import NavBar from "./component/Navbar";
import StudentsInfo from "./component/StudentsInfo";
import UpdateStudent from "./component/UpdateStudent";
import NewStudent from "./component/NewStudent";

function App() {
  return (
    <StudentsInfo>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NavBar />}>
              <Route index path="/Home" element={<Home />} />
              <Route path="/Students" element={<Students />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/UpdateStudent/:id" element={<UpdateStudent />} />
              <Route path="/NewStudent" element={<NewStudent />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </StudentsInfo>
  );
}

export default App;
