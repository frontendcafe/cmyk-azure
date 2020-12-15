import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { BACKGROUND_COLOR, TEXT_PRIMARY_COLOR } from '../styles/variables';
import Navbar from './Navbar';

interface Props {
  children: ReactNode;
}

const StyledLayout = styled.div`
  background-color: ${BACKGROUND_COLOR};
  color: ${TEXT_PRIMARY_COLOR};
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: minmax(300px, 1024px);
  justify-content: center;
`;

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <StyledLayout>
      <header>
        <Navbar />
      </header>
      {children}
    </StyledLayout>
  );
};

export default Layout;
