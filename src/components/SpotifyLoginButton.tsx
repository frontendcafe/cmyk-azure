import React from 'react';
import { SpotifyAuth } from 'react-spotify-auth';
import { CLIENT_ID, REDIRECT_URI } from '../services/spotify/config';
import 'react-spotify-auth/dist/index.css';

interface Props {
  scopes?: [];
}

const SpotifyLoginButton: React.FC<Props> = ({
  scopes = ['user-read-email', 'playlist-read-private']
}) => {
  return (
    <SpotifyAuth
      redirectUri={REDIRECT_URI}
      clientID={CLIENT_ID}
      scopes={scopes}
      title="Entra con Spotify!"
    />
  );
};

export default SpotifyLoginButton;
