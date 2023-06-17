import React from "react";
import { CloseSidebarLayout } from "./CloseSidebar.styled";

const CloseSidebar = ({ handleCloseSidebar }) => {
  return (
    <div>
      <CloseSidebarLayout>
        <button onClick={handleCloseSidebar} style={{ background: "white" }}>
          <img src="/img/double_arrow_right.png" style={{ width: "100%" }} />
        </button>
      </CloseSidebarLayout>
    </div>
  );
};

export default CloseSidebar;
