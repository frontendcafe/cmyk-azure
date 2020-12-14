import React, { useState } from 'react';
import SpotifyToken from '../services/spotify/token';
import { SpotifyApiContext } from 'react-spotify-api';
import SpotifyLoginButton from './SpotifyLoginButton';
import { SpotifyAuthListener } from 'react-spotify-auth';
import useSession from '../hooks/useSession';

interface Props {
  children: React.ReactNode;
}

const AuthenticationContainer: React.FC<Props> = ({ children }) => {
  let initialToken = SpotifyToken.getActualToken();
  const [token, setToken] = useState<string>(initialToken ?? '');
  const { startSession, isLogged } = useSession();

  return (
    <React.Fragment>
      {token && isLogged() ? (
        <SpotifyApiContext.Provider value={token}>
          {children}
        </SpotifyApiContext.Provider>
      ) : (
        <SpotifyLoginButton />
      )}

      <SpotifyAuthListener
        onAccessToken={(token: string) => {
          setToken(token);
          startSession();
        }}
      />
    </React.Fragment>
  );
};

export default AuthenticationContainer;
