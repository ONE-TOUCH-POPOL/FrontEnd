import styled from "styled-components";

const TextAreaLayout = styled.div`
  width: 100%;
  height: 90%;
  position: relative;

  .w-md-editor {
    border-radius: 0px;
  }

  .w-md-editor-text-pre > code,
  .w-md-editor-text-input {
    font-size: 21px !important;
    line-height: 21px !important;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  .w-md-editor-toolbar {
    justify-content: flex-start;
  }

  .w-md-editor-bar {
    display: none;
  }

  // delete
  .w-md-editor-toolbar button[data-name="live"] {
    display: none;
  }
  .w-md-editor-toolbar button[data-name="preview"] {
    display: none;
  }
  .w-md-editor-toolbar button[data-name="edit"] {
    display: none;
  }
  .w-md-editor-toolbar button[data-name="fullscreen"] {
    display: none;
  }
  .w-md-editor-toolbar-divider {
    display: none;
  }
`;
const MdEditorBottomLayout = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  bottom: 0;
  width: 50%;
  height: 70px;
  gap: 3%;
  background-color: #abc8ff;
`;
export { TextAreaLayout, MdEditorBottomLayout };
