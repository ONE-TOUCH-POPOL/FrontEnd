/* eslint-disable */
import React, { useRef } from "react";
import Modal from "./Modal";
import useStore from "../../store/modal";

const ModalComponent = ({ ...props }) => {
  const modal = useStore();
  const modalRef = useRef();

  const modal_close = (e) => {
    e.stopPropagation();
    if (modalRef.current == e.target) {
      e.preventDefault(); // 끄는경우에만 실행해야함
      //  https://stackoverflow.com/questions/25863192/onmousedown-event-stopping-input-focus
      // 참조 레퍼런스
      modal.set_modal();
    }
  };

  return <Modal showModal={modal.modal} modal={modal} modalRef={modalRef} modal_close={modal_close} {...props}></Modal>;
};

export default ModalComponent;
