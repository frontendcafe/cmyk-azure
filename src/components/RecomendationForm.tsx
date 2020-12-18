import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Playlist from '../models/Playlist';
import { getActualUserPlaylists } from '../services/spotify/playlist';
import { LIGHT_FONT_WEIGHT } from '../styles/variables';
import ProfileIcon from './ProfileIcon';

const StyledRecomendationForm = styled.form`
  font-weight: ${LIGHT_FONT_WEIGHT};
`;

const RecomendationForm = () => {
  const [playlists, setPlaylists] = useState<Playlist[] | null>(null);

  useEffect(() => {
    getActualUserPlaylists()
      .then(userPlaylists => setPlaylists(userPlaylists));

  }, [])

  return (
    <StyledRecomendationForm>
      <ProfileIcon />
      <p>SearchComponent</p>
      <p>PlaylistCardComponent</p>
      <p>ButtonSubmitComponent</p>
    </StyledRecomendationForm>
  );
};

export default RecomendationForm;
