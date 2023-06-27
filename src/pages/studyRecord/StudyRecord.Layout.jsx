import styled from "styled-components";

const StudyRecordLayout = styled.div`
  display: flex;
  height: 100vh-58px;
  min-height: 94vh;
`;

const ContentLayout = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const ToggleButton = styled.button`
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 1000;
  cursor: pointer;
  > .toggle-container {
    width: 50px;
    height: 24px;
    border-radius: 30px;
    background-color: rgb(233, 233, 234);
  }
  //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
  > .toggle--checked {
    background-color: #abc8ff;
    transition: 0.5s;
  }

  > .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: rgb(255, 254, 255);
    transition: 0.5s;
    //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
  }
  > .toggle--checked {
    left: 27px;
    transition: 0.5s;
  }
`;
export { StudyRecordLayout, ContentLayout, ToggleButton };
