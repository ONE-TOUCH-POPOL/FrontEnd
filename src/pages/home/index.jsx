import React from "react";
import { HomLayout } from "./Home.layout";
import Button from "../../components/button/Button";
import CalendarComponent from "../../components/calendar";
const Home = () => {
  return (
    <HomLayout>
      <CalendarComponent></CalendarComponent>
    </HomLayout>
  );
};

export default Home;
