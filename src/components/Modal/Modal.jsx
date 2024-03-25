import { useEffect } from 'react';
import {
  Backdrop,
  CloseBtnThumb,
  ModalCloseBtn,
  ModalIcon,
} from './Modal.styled';

const Modal = ({ children, setShow }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setShow(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setShow]);

  const handleBackdropClick = e => {
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
            <ModalIcon
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="close-btn"
            >
              <path d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414z" />
            </ModalIcon>
          </ModalCloseBtn>
        </CloseBtnThumb>
        {children}
      </div>
    </Backdrop>
  );
};

export default Modal;
