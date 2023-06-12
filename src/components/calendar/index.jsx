/* eslint-disable */
import React from "react";

const CalendarComponent = ({ children, click, ...props }) => {
  return (
    <Button click={click} {...props}>
      {children}
    </Button>
  );
};

export default CalendarComponent;
