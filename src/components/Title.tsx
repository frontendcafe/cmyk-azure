import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

const StyledTitle = styled.h2``;

const Title: React.FC<Props> = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
