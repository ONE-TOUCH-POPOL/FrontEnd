import styled, { css, keyframes } from "styled-components";

const ModalStyle = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const show_modal = "flex";
    const animation = keyframes`
        0% {
            width: 15%;
            height: 15%;
        }
        50% {
            width: 23%;
            height: 23%;
        }
        100% {
            width: 50%;
            height: 30%;
        }
        `;

    return css`
      position: fixed;

      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: ${show_modal};
      z-index: 5;
      justify-content: center;
      align-items: center;
      height: 100vh;
      visibility: visible;
      background-color: #ffffff;
      background-color: rgba(0, 0, 0, 0.1);

      /* 기본 모달 */
      .modal_div {
        animation: ${animation} 0.1s linear;
        transition: all 0.4s;
        /* filter: blur(0px); */
        z-index: 9999;
        border-radius: 5px;
        background-color: white;
        padding: 5%;
        height: 30%;
        width: 50%;
        display: flex;
        justify-content: center;
        text-align: center;
        flex-direction: column;
        align-items: center;
        .modal_title {
          color: black;
          font-size: 2vh;
          height: 10%;
          width: 100%;
          margin-bottom: 40px;
        }
        .modal_button {
          width: 50%;
          height: 40px;
        }
      }
    `;
  }};
`;

export { ModalStyle };
