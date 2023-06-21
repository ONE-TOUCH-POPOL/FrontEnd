import styled from "styled-components";

const TextAreaLayout = styled.div`
  width: 100%;
  height: 90%;

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

  /* .w-md-editor-toolbar button[data-name="live"] {
    height: 20px;
    width: 20px;
    padding-top: 0px;
    background-image: url(/img/double_arrow_right.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-color: white;
  }
  .w-md-editor-toolbar button[data-name="live"] svg {
    display: none;
  }

  .w-md-editor-toolbar button[data-name="preview"] {
    background-image: url(/img/double_arrow_left.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-color: white;
    height: 20px;
    width: 20px;
    padding-top: 0px;
  }
  .w-md-editor-toolbar button[data-name="preview"] svg {
    display: none;
  } */

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

export { TextAreaLayout };
