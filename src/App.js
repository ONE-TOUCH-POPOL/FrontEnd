/* eslint-disable */
import { Routes, Route } from "react-router-dom";
import NavBar from "./routes/NavBar";
import Home from "./routes/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
