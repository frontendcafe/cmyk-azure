import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode
}

const StyledFloatingFooter = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
`;

const FloatingFooter: React.FC<Props> = ({ children }) => {
  return (
    <StyledFloatingFooter>
      {children}
    </StyledFloatingFooter>
  );
};

export default FloatingFooter;