import React from "react";
import { CloseSidebarLayout } from "./CloseSidebar.Layout";

const CloseSidebar = ({ handleCloseSidebar }) => {
  return (
    <div>
      <CloseSidebarLayout>
        <button onClick={handleCloseSidebar} style={{ background: "white" }}>
          <img src="/img/double_arrow_right.png" style={{ width: "100%", cursor: "pointer" }} alt="openArrow" />
        </button>
      </CloseSidebarLayout>
    </div>
  );
};

export default CloseSidebar;
