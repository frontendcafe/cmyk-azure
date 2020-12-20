import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import {
  ICON_FONT_SIZE,
  MIN_FONT_SIZE,
  NORMAL_FONT_SIZE,
  PRIMARY_COLOR,
  TEXT_PRIMARY_COLOR,
} from '../styles/variables';

interface Props {
  children: ReactNode;
  handleClick?: Function;
  isCircle?: boolean;
  isIcon?: boolean;
  className?: string;
}

const StyledButton = styled.button`
  cursor: pointer;
  align-self: flex-end;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${PRIMARY_COLOR};
  color: ${TEXT_PRIMARY_COLOR};
  border: none;
  outline: none;

  ${(props: Props) =>
    props.isCircle
      ? css`
          border-radius: 50%;
          width: 3rem;
          height: 3rem;
        `
      : css`
          border-radius: 2rem;
          height: 2rem;
          width: auto;
          padding: 0 1rem;
        `}
  ${(props: Props) =>
    props.isIcon
      ? css`
          font-size: ${ICON_FONT_SIZE};
        `
      : css`
          font-size: ${MIN_FONT_SIZE};
        `}
`;

const ButtonPrimary: React.FC<Props> = ({
  children,
  isCircle,
  isIcon,
  handleClick,
  className,
}) => {
  return (
    <StyledButton
      className={className}
      isCircle={isCircle}
      isIcon={isIcon}
      type="button"
      onClick={() => handleClick && handleClick()}
    >
      {children}
    </StyledButton>
  );
};

export default ButtonPrimary;
