import React from 'react';
import styled from 'styled-components';
import { PRIMARY_COLOR, SECONDARY_FONT_FAMILY } from '../styles/variables';

interface Props {
  className?: string;
}

const StyledBrand = styled.span`
  justify-self: center;
  color: ${PRIMARY_COLOR};
  outline: none;
  text-decoration: none;
  font-family: ${SECONDARY_FONT_FAMILY};
`;


const Brand: React.FC<Props> = ({ className }) => {
  return (
    <StyledBrand className={className}>
      song𝓢hare
    </StyledBrand>
  );
};

export default Brand;