/* eslint-disable */
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import "./App.css";
import Modal from "./components/modal";
import StudyRecord from "./pages/studyRecord/StudyRecord";

function App() {
  return (
    <div className="App">
      <Modal></Modal>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Home />} />
        <Route path="/record" element={<StudyRecord />} />
      </Routes>
    </div>
  );
}

export default App;
