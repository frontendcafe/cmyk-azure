import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { SpotifyApiContext } from 'react-spotify-api'
import SpotifyLoginButton from './SpotifyLoginButton';
import {SpotifyAuthListener } from 'react-spotify-auth';

interface Props{
    children: React.ReactNode
}

const AuthenticationContainer:React.FC<Props> = ({children}) => {
    let initialToken = Cookies.get('spotifyAuthToken');
    const [token, setToken] = useState<string>(initialToken ?? '');

    return (
        <React.Fragment>
            {
                token ? (
                    <SpotifyApiContext.Provider value={token} >
                        {children}
                    </SpotifyApiContext.Provider >
                ) : (
                        <SpotifyLoginButton />
                    )
            }

            <SpotifyAuthListener onAccessToken={(token: string) => { setToken(token); }} />
        </React.Fragment>
    );
};

export default AuthenticationContainer;