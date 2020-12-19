import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { SpotifyAuthListener } from 'react-spotify-auth';
import styled from 'styled-components';
import SpotifyLoginButton from '../components/SpotifyLoginButton';
import UserContext from '../context/user/UserContext';
import { BACKGROUND_COLOR, LONG_FONT_SIZE, PRIMARY_COLOR, SECONDARY_FONT_FAMILY, TEXT_PRIMARY_COLOR } from '../styles/variables';
import { useHistory } from "react-router-dom";

interface Props { }

const StyledLoginContainer = styled.div``;

const StyledLayout = styled.div`
  background-color: ${BACKGROUND_COLOR};
  color: ${TEXT_PRIMARY_COLOR};
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: center;
`;

const StyledMainLink = styled.p`
  justify-self: center;
  color: ${PRIMARY_COLOR};
  outline: none;
  text-decoration: none;
  font-family: ${SECONDARY_FONT_FAMILY};
  font-size: ${LONG_FONT_SIZE};
`;

const StyledCenteredDiv = styled.div`
  text-align: center;
`;


const Login: React.FC<Props> = () => {
  const { startSession, isLogged } = useContext(UserContext);
  const history = useHistory();

  isLogged && isLogged() && history.push("/");

  return (
    <>
      <StyledLayout>
        <StyledLoginContainer>
          <StyledCenteredDiv>
            <StyledMainLink>Azure</StyledMainLink>
            <SpotifyLoginButton />
          </StyledCenteredDiv>

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
