import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

const StyledTitle = styled.h2`
  margin-top: 0;
  display: flex;
  align-items: center;
`;

const Title: React.FC<Props> = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
