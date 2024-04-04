import { useEffect } from "react";
import {
  Backdrop,
  CloseBtnThumb,
  ModalCloseBtn,
  ModalIcon,
} from "./Modal.styled";

const Modal = ({ children, setShow }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        setShow(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setShow]);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      setShow(false);
    }
  };
  return (
    <Backdrop onClick={handleBackdropClick}>
      <div className="modal-body">
        <CloseBtnThumb>
          <ModalCloseBtn
            onClick={() => {
              setShow(false);
            }}
          >
            <ModalIcon fill="none" viewBox="0 0 15 15">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M11.782 4.032a.575.575 0 10-.813-.814L7.5 6.687 4.032 3.218a.575.575 0 00-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 00.814.814L7.5 8.313l3.469 3.469a.575.575 0 00.813-.814L8.313 7.5l3.469-3.468z"
                clipRule="evenodd"
              />
            </ModalIcon>
          </ModalCloseBtn>
        </CloseBtnThumb>
        {children}
      </div>
    </Backdrop>
  );
};

export default Modal;
