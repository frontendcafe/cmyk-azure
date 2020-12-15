import React from 'react';
import styled from 'styled-components';
import { DANGER_COLOR } from '../styles/variables';
import IconClose from './IconClose';

interface Props {
  handleClick: Function;
  className?: string;
}

const StyledButtonClose = styled.button`
  color: ${DANGER_COLOR};
  background-color: transparent;
  border: none;
  ouline: none;
`;

const ButtonClose: React.FC<Props> = ({ handleClick, className }) => {
  return (
    <StyledButtonClose
      type="button"
      onClick={() => handleClick()}
      className={className}
    >
      <IconClose />
    </StyledButtonClose>
  );
};

export default ButtonClose;
