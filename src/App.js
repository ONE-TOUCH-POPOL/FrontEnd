/* eslint-disable */
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
