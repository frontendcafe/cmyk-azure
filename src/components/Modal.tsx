import React, { forwardRef, ReactNode, useImperativeHandle } from 'react';
import styled from 'styled-components';
import { ICON_FONT_SIZE } from '../styles/variables';
import ButtonClose from './ButtonClose';

interface Props {
  children: ReactNode;
  id?: string;
  title?: string;
}

const StyledModal = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 99999;
  opacity: 0;
  -webkit-transition: opacity 100ms ease-in;
  -moz-transition: opacity 100ms ease-in;
  transition: opacity 100ms ease-in;
  pointer-events: none;
  &:target {
    opacity: 1;
    pointer-events: auto;
  }
`;

const StyledDivContent = styled.div`
  max-width: 800px;
  width: 90%;
  position: relative;
  padding: 20px;
  border-radius: 3px;
  background: #fff;
`;

const StyledButtonClose = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 1.2rem;
`;

const Modal = forwardRef((props: Props, ref) => {
  const close = () => (window.location.href = '#');
  const open = () => (window.location.href = `#${props.id}`);

  useImperativeHandle(ref, () => ({
    closeModal() {
      close();
    },
    openModal() {
      open();
    },
  }));
  return (
    <StyledModal role="dialog" id={props.id}>
      <StyledDivContent>
        <StyledButtonClose>
          <span>{props.title}</span>
          <ButtonClose handleClick={close} />
        </StyledButtonClose>
        {props.children}
      </StyledDivContent>
    </StyledModal>
  );
});

export default Modal;
