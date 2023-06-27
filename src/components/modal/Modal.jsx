/* eslint-disable*/
import { ModalStyle } from "./Modal.styled";
import Button from "../button/Button";

const Modal = ({ showModal, modalRef, modal_close, modal, ...props }) => {
  return (
    <>
      {showModal ? (
        <ModalStyle height={modal.modal_height} width={modal.modal_width} onClick={modal_close} ref={modalRef} {...props}>
          <div className="modal_div">
            <div className="modal_title">{modal.modal_text}</div>
            <div className="modal_button">
              <Button onClick={modal.set_modal}>확인</Button>
            </div>
          </div>
        </ModalStyle>
      ) : (
        <></>
      )}
    </>
  );
};

export default Modal;
