import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Brand from '../components/Brand';
import ImgCassette from '../components/ImgCassette';
import LandingNavbar from '../components/LandingNavbar';
import SpotifyLoginButton from '../components/SpotifyLoginButton';
import UserContext from '../context/user/UserContext';
import { BACKGROUND_COLOR, MEDIUM_FONT_SIZE, PRIMARY_COLOR, TABLET_BREAKPOINT, TEXT_PRIMARY_COLOR } from '../styles/variables';
import { SpotifyAuthListener } from 'react-spotify-auth';

const StyledLayout = styled.div`
  /* background: linear-gradient(0deg, ${PRIMARY_COLOR} 0%, ${BACKGROUND_COLOR} 100%); */
  background: ${BACKGROUND_COLOR};
  color: ${TEXT_PRIMARY_COLOR};
  min-height: 100vh;
  width: 100%;
  padding: 0 5rem;
  display: grid;
  grid-template-rows: auto 1fr;
  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 0 2rem;
  }
`;

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 70% 30%;
  &>*{
    align-self: center;
  }
  @media (max-width:1300px) {
    grid-template-columns: 60% 40%;
  }
  @media (max-width: ${TABLET_BREAKPOINT}) {
    grid-template-columns: 100% 0%;
  }
`;

const StyledImg = styled(ImgCassette)`
  width: 100%;
`;

const StyledTitle = styled.h2`
  text-transform: uppercase;
  font-weight: 300;
  font-size: 3.5rem;
  margin: 0;
  width: 60%;
  @media (max-width:1000px) {
    font-size: 2.5rem;
  }
  @media (max-width: ${TABLET_BREAKPOINT}) {
    width: 100%;
  }
`;

const StyledSubtitle = styled.p`
  color: #ccc;
  font-size: ${MEDIUM_FONT_SIZE};
`;

const StyledLoginButton = styled(SpotifyLoginButton)`
  cursor: pointer;
  background: #1DB954;
  border: none;
  outline: none;
  color: ${TEXT_PRIMARY_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  font-size: ${MEDIUM_FONT_SIZE};
  padding: .5rem 1rem;
  text-transform: uppercase;
  margin-top:1.5rem;
`;

const Landing = () => {
  const { startSession, isLogged } = useContext(UserContext);
  const history = useHistory();

  isLogged && isLogged() && history.push('/');

  const navbarOptions: any[] = [
    {
      id: '1',
      name: 'About Us',
      to: '/about-us'
    }
  ];

  return (
    <>
      <StyledLayout>
        <LandingNavbar options={navbarOptions} />
        <StyledMain>
          <div>
            <StyledTitle>Comparti playlists como nunca antes</StyledTitle>
            <StyledSubtitle>Encontra la playlist para ti</StyledSubtitle>
            <StyledLoginButton />
          </div>

          <StyledImg />
        </StyledMain>
      </StyledLayout>
      <SpotifyAuthListener
        onAccessToken={(token: string) => {
          startSession && startSession();
          history.push('/');
        }}
      />
    </>
  );
};

export default Landing;