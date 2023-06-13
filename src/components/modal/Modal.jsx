/* eslint-disable*/
import { ModalContainer, ModalBackdrop, ModalView, Exitbtn } from "./Modal.styled";
export const Modal = () => {
  return (
    <>
      <ModalContainer>
        <ModalBackdrop>
          <ModalView>
            <Exitbtn>&times;</Exitbtn>
            <div className="desc"> 회원가입 완료!</div>
          </ModalView>
        </ModalBackdrop>
      </ModalContainer>
    </>
  );
};
