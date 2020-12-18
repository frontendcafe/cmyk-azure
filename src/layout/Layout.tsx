import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { BACKGROUND_COLOR, TEXT_PRIMARY_COLOR } from '../styles/variables';
import Navbar from '../components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Routes from '../routes';
import UserProvider from '../context/user/UserProvider';

const StyledLayout = styled.div`
  background-color: ${BACKGROUND_COLOR};
  color: ${TEXT_PRIMARY_COLOR};
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: minmax(300px, 1024px);
  justify-content: center;
`;

const Layout = () => {
  const getRoutes = (routes: any): ReactNode => {
    return routes.map((route: any) => {
      return (
        <Route
          path={route.path}
          component={route.component}
          exact={route.exact && route.exact}
          key={route.name}
        />
      );
    });
  };

  return (
    <UserProvider>

      <StyledLayout>
        <header>
          <Navbar />
        </header>
        <Switch>{getRoutes(Routes)}</Switch>
      </StyledLayout>

    </UserProvider>
  );
};

export default Layout;
