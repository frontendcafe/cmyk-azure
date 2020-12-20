import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import UserContext from '../context/user/UserContext';
import Playlist from '../models/Playlist';
import { addRecommendation } from '../services/firebase/recommendations';
import { getActualUserPlaylists } from '../services/spotify/playlist';
import { LIGHT_FONT_WEIGHT, TABLET_BREAKPOINT } from '../styles/variables';
import ButtonClose from './ButtonClose';
import ButtonPrimary from './ButtonPrimary';
import PlayListCard from './PlayListCard';
import ProfileIcon from './ProfileIcon';

interface Props {
  handleClose?: Function;
}

const StyledRecomendationForm = styled.form`
  font-weight: ${LIGHT_FONT_WEIGHT};
  display: grid;
  grid-gap: 2rem 0;
  grid-template-columns: 70px 1fr;
  grid-template-areas:
    'close .'
    'profile card'
    '. recommendation';

  @media (max-width: ${TABLET_BREAKPOINT}) {
    grid-template-areas:
      'close recommendation'
      'profile .'
      'card card';
  }
`;

const StyledPlayListCard = styled(PlayListCard)`
  justify-self: center;
  grid-area: card;
`;

const StyledProfileIcon = styled(ProfileIcon)`
  grid-area: profile;
`;

const StyledRecomendationButton = styled(ButtonPrimary)`
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

  const recommend = () => {
    if (selectedPlaylist) {
      selectedPlaylist.user = user;

      addRecommendation(selectedPlaylist).then(
        () => handleClose && handleClose()
      );
    }
  };

  useEffect(() => {
    getActualUserPlaylists().then((userPlaylists) => {
      setPlaylists(userPlaylists);
      setSelectedPlaylist(userPlaylists?.[0] ?? null);
    });
  }, []);

  return (
    <StyledRecomendationForm>
      <StyledButtonClose handleClick={() => handleClose && handleClose()} />
      {selectedPlaylist ? (
        <StyledRecomendationButton handleClick={recommend}>
          Recommend
        </StyledRecomendationButton>
      ) : (
        ''
      )}
      <StyledProfileIcon
        imageUrl={user?.imageUrl ?? ''}
        userName={user?.name ?? ''}
        onlyImage
        imgSize="60px"
      />
      {selectedPlaylist ? (
        <StyledPlayListCard playList={selectedPlaylist} />
      ) : (
        // TODO: SearchComponent debe contener grid-area: card;
        <p>SearchComponent</p>
      )}
    </StyledRecomendationForm>
  );
};

export default RecomendationForm;
