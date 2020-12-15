import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { ICON_FONT_SIZE, PRIMARY_COLOR, TEXT_PRIMARY_COLOR } from '../styles/variables';

interface Props {
  children: ReactNode;
  position?: 'BOTTOM_RIGHT';
}

const ButtonFloat = styled.button`
  position: fixed;
  cursor:pointer;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  background-color: ${PRIMARY_COLOR};
  color: ${TEXT_PRIMARY_COLOR};
  font-size: ${ICON_FONT_SIZE};
  border: none;
  outline: none;
`;

const FloatButton: React.FC<Props> = ({
  children,
  position = 'BOTTOM_RIGHT',
}) => {
  return <ButtonFloat type="button">{children}</ButtonFloat>;
};

export default FloatButton;
