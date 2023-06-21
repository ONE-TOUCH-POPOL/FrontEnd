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

const TextAreaButton = styled.button`
  position: fixed;
  top: 50%;
  width: 100%;
`;
export { StudyRecordLayout, ContentLayout, TextAreaButton };
