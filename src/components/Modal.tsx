import React, { forwardRef, ReactNode, useImperativeHandle } from 'react';
import styled from 'styled-components';
import { BACKGROUND_COLOR, ICON_FONT_SIZE } from '../styles/variables';
import ButtonClose from './ButtonClose';

interface Props {
  children: ReactNode;
  id?: string;
  title?: string;
  showHeader?: boolean;
}

const StyledModal = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
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
  margin-top: 5%;
  max-width: 600px;
  width: 90%;
  position: relative;
  padding: 1rem;
  border-radius: 1rem;
  background-color: ${BACKGROUND_COLOR};
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
        {props.showHeader ?? (
          <StyledButtonClose>
            <span>{props.title}</span>
            <ButtonClose handleClick={close} />
          </StyledButtonClose>
        )}
        {props.children}
      </StyledDivContent>
    </StyledModal>
  );
});

export default Modal;
