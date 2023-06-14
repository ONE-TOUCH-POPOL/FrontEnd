/* eslint-disable */
import React from "react";
import { HomLayout } from "./Home.layout";
import BigCalendarComponent from "../../components/bigCalendar";
import CalendarComponent from "../../components/calendar";
const Home = () => {
  return (
    // big calendar test
    // <HomLayout>
    //   <BigCalendarComponent></BigCalendarComponent>
    // </HomLayout>

    // small calendar test
    <HomLayout>
      <CalendarComponent></CalendarComponent>
    </HomLayout>
  );
};

export default Home;
