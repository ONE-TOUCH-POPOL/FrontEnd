import React from "react";
import { HomLayout } from "./Home.layout";
import CalendarComponent from "../../components/calendar";
import useStore from "../../store/modal";
const Home = () => {
  const modal = useStore();
  const testClick = () => {
    modal.set_modal();
  };
  return (
    <HomLayout>
      <button onClick={testClick}>눌러보던가</button>
      <CalendarComponent></CalendarComponent>
    </HomLayout>
  );
};

export default Home;
