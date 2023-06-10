/* eslint-disable */
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import Home from "./pages/home";
import Register from "./pages/register";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/join" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
