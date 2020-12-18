import React, { useContext, useState } from 'react';
import SpotifyToken from '../services/spotify/token';
import { SpotifyApiContext } from 'react-spotify-api';
import SpotifyLoginButton from './SpotifyLoginButton';
import { SpotifyAuthListener } from 'react-spotify-auth';
import UserContext from '../context/user/UserContext';

interface Props {
  children: React.ReactNode;
}

const AuthenticationContainer: React.FC<Props> = ({ children }) => {
  let initialToken = SpotifyToken.getActualToken();
  const [token, setToken] = useState<string>(initialToken ?? '');
  const { startSession, isLogged } = useContext(UserContext);

  return (
    <>
      {token && isLogged && isLogged() ? (
        <SpotifyApiContext.Provider value={token}>
          {children}
        </SpotifyApiContext.Provider>
      ) : (
        <SpotifyLoginButton />
      )}

      <SpotifyAuthListener
        onAccessToken={(token: string) => {
          setToken(token);
          startSession && startSession();
        }}
      />
    </>
  );
};

export default AuthenticationContainer;
