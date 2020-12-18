import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import UserContext from '../context/user/UserContext';
import Playlist from '../models/Playlist';
import { getActualUserPlaylists } from '../services/spotify/playlist';
import { LIGHT_FONT_WEIGHT } from '../styles/variables';
import ButtonClose from './ButtonClose';
import PlayListCard from './PlayListCard';
import ProfileIcon from './ProfileIcon';

interface Props {
  handleClose?: Function
}

const StyledRecomendationForm = styled.form`
  font-weight: ${LIGHT_FONT_WEIGHT};
  display: grid;
  grid-gap: 2rem 0;
  grid-template-columns: 70px 1fr;
  grid-template-areas: "close ."
                      "profile card"
                      ". recommendation"

`;

const StyledPlayListCard = styled(PlayListCard)`
  justify-self: center;
  grid-area: card
`;


const StyledProfileIcon = styled(ProfileIcon)`
  grid-area: profile;
`;

const StyledRecomendationButton = styled.button`
width:100px;
justify-self: flex-end;
  grid-area: recommendation;
`;

const StyledButtonClose = styled(ButtonClose)`
grid-area: close;
justify-self: flex-start;
`;

const RecomendationForm: React.FC<Props> = ({ handleClose }) => {
  //TODO: Integrar con el componente SearchComponent
  const [playlists, setPlaylists] = useState<Playlist[] | null>(null);
  //TODO: El metodo setSelectedPlaylist debe utilizarse en el onchange de SearchComponent
  const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist | null>(
    null
  );
  const { user } = useContext(UserContext);

  useEffect(() => {
    getActualUserPlaylists().then((userPlaylists) => {
      setPlaylists(userPlaylists);
      setSelectedPlaylist(userPlaylists?.[1] ?? null);
    });
  }, []);

  return (
    <StyledRecomendationForm>
      <StyledButtonClose handleClick={() => handleClose && handleClose()} />
      <StyledRecomendationButton>
        Recomendar
        </StyledRecomendationButton>
      <StyledProfileIcon
        imageUrl={user?.imageUrl ?? ''}
        userName={user?.name ?? ''}
        onlyImage
        imgSize="64px"
      />
      {selectedPlaylist ? (
        <StyledPlayListCard playList={selectedPlaylist} />
      ) : (
          <p>SearchComponent</p>
        )}
    </StyledRecomendationForm>
  );
};

export default RecomendationForm;
