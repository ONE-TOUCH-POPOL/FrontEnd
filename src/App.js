/* eslint-disable */
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import "./App.css";
import Modal from "./components/modal";
import StudyRecord from "./pages/studyRecord/StudyRecord";
import loginPostAPI from "./api/loginPost";
import React, { useEffect } from "react";
import useLoginStore from "./store/login";

function App() {
  const isLogin = useLoginStore((state) => state.isLogin);
  const loginState = useLoginStore((state) => state.login);

  const changeLoginState = () => {
    loginState();
  };
  useEffect(() => {
    if (!isLogin) {
      console.log("로그인 실행");
      const fetchToken = async () => {
        const reissueData = await loginPostAPI.reissuePost();

        console.log(reissueData);
        if (reissueData.data.success) {
          const { accessToken, refreshToken } = reissueData.data.response;
          localStorage.setItem("access-token", accessToken);
          localStorage.setItem("refresh-token", refreshToken);
          changeLoginState();
          // console.log("success");
          // console.log(refreshToken);
        } else {
          console.log("reissue fail");
        }
      };
      fetchToken();
    }
  }, []);

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
