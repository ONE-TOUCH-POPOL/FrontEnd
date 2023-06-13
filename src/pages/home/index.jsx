import React from "react";
import { HomLayout } from "./Home.layout";
import CalendarComponent from "../../components/calendar";
const Home = () => {
  return (
    <HomLayout>
      <CalendarComponent></CalendarComponent>
    </HomLayout>
  );
};

export default Home;
