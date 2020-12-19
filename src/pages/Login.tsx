import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { SpotifyAuthListener } from 'react-spotify-auth';
import styled from 'styled-components';
import SpotifyLoginButton from '../components/SpotifyLoginButton';
import UserContext from '../context/user/UserContext';
import { BACKGROUND_COLOR, TEXT_PRIMARY_COLOR } from '../styles/variables';
import { useHistory } from "react-router-dom";

interface Props { }

const StyledLoginContainer = styled.div``;

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

const Login: React.FC<Props> = () => {
  const { startSession, isLogged } = useContext(UserContext);
  const history = useHistory();

  isLogged && isLogged() && history.push("/");

  return (
    <>
      <StyledLayout>
        <StyledLoginContainer>
          <SpotifyLoginButton />
        </StyledLoginContainer>
      </StyledLayout>
      <SpotifyAuthListener
        onAccessToken={(token: string) => {
          startSession && startSession();
          history.push("/");
        }}
      />
    </>
  );
};

export default Login;
