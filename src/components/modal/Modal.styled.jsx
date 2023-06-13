import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBtn = styled.button`
  background-color: #4000c7;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;

export const ModalView = styled.div.attrs((props) => ({
  role: "dialog",
}))`
  border-radius: 10px;
  background-color: #ffffff;
  width: 500px;
  height: 200px;
  margin-bottom: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  > div.desc {
    font-size: 30px;
    color: #475ed4;
    margin: 50px;
  }
`;
export const Exitbtn = styled(ModalBtn)`
  background-color: gold;
  color: blue;
  margin: 10px;
  padding: 5px 10px;
`;
