import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { BACKGROUND_COLOR, TEXT_PRIMARY_COLOR } from '../styles/variables';

interface Props {
  children: ReactNode;
}

const StyledLayout = styled.div`
  background-color: ${BACKGROUND_COLOR};
  color: ${TEXT_PRIMARY_COLOR};
  height: 100vh;
  width: 100%;
`;

const Layout: React.FC<Props> = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;
