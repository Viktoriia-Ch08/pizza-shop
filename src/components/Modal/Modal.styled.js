import styled from 'styled-components';
import { device } from '../../css/deviceSize';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10000;
  backdrop-filter: blur(7px);
  overflow: auto;
  transition: opacity 300ms linear, visibility 300ms linear;

  .modal-body {
    position: absolute;
    top: 50%;
    left: 50%;
    max-height: 90%;
    overflow-y: auto;
    transform: translate(-50%, -50%);
    border-radius: 12px;
    background-color: white;
  }
`;
export const CloseBtnThumb = styled.div`
  position: relative;
`;

export const ModalCloseBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;

  /* &:active,
  &:focus,
  &:hover {
    fill: var(--text-special-clr);
  } */
`;

export const ModalIcon = styled.svg`
  width: 20px;
  height: 20px;

  @media ${device.tablet} {
    width: 30px;
    height: 30px;
  }
`;
