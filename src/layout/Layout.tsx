import React, { ReactNode, useRef } from 'react';
import styled from 'styled-components';
import { BACKGROUND_COLOR, TEXT_PRIMARY_COLOR } from '../styles/variables';
import Navbar from '../components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Routes from '../routes';
import { SpotifyApiContext } from 'react-spotify-api';
import SpotifyToken from '../services/spotify/token';
import Modal from '../components/Modal';
import FloatingFooter from '../components/FloatingFooter';
import ButtonAdd from '../components/ButtonAdd';
import RecommendationForm from '../components/RecomendationForm';

const StyledLayout = styled.div`
  background-color: ${BACKGROUND_COLOR};
  color: ${TEXT_PRIMARY_COLOR};
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: minmax(250px, 1024px);
  justify-content: center;
`;

const Layout = () => {
  const modalRecomendationForm = useRef<any>();
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

  const token = SpotifyToken.getActualToken();

  return (
    <SpotifyApiContext.Provider value={token}>
      <StyledLayout>
        <header>
          <Navbar />
        </header>
        <Switch>{getRoutes(Routes)}</Switch>
        <Modal id="modal" ref={modalRecomendationForm} showHeader={false}>
          <RecommendationForm
            handleClose={() => modalRecomendationForm?.current?.closeModal()}
          />
        </Modal>
        <FloatingFooter>
          <ButtonAdd
            handleClick={() => modalRecomendationForm?.current?.openModal()}
          />
        </FloatingFooter>
      </StyledLayout>
    </SpotifyApiContext.Provider>
  );
};

export default Layout;
