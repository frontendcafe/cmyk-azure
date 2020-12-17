import React, { ReactNode } from 'react';
import styled from 'styled-components';
import {
  ICON_FONT_SIZE,
  PRIMARY_COLOR,
  TEXT_PRIMARY_COLOR,
} from '../styles/variables';

interface Props {
  children: ReactNode;
  position?: 'BOTTOM_RIGHT';
  handleClick?: Function;
}

const StyledFloatButton = styled.button`
  cursor: pointer;
  align-self: flex-end;
  margin: 1rem;
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

const ButtonCircle: React.FC<Props> = ({
  children,
  position = 'BOTTOM_RIGHT',
  handleClick,
}) => {
  return (
    <StyledFloatButton
      type="button"
      onClick={() => handleClick && handleClick()}
    >
      {children}
    </StyledFloatButton>
  );
};

export default ButtonCircle;
