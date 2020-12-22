import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import UserContext from '../context/user/UserContext';
import Playlist from '../models/Playlist';
import { addRecommendation } from '../services/firebase/recommendations';
import { getActualUserPlaylists } from '../services/spotify/playlist';
import { LIGHT_FONT_WEIGHT, TABLET_BREAKPOINT } from '../styles/variables';
import ButtonClose from './ButtonClose';
import ButtonPrimary from './ButtonPrimary';
import PlayListCard from './PlayListCard';
import PlayListCardList from './PlayListCardList';
import ProfileIcon from './ProfileIcon';
import SearchBox from './SearchBox';

interface Props {
  handleClose?: Function;
  handleRecommend?: Function;
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

const RecomendationForm: React.FC<Props> = ({ handleClose, handleRecommend }) => {
  const [playlists, setPlaylists] = useState<Playlist[] | null>(null);
  const [filter, setFilter] = useState<string>('');

  const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist | null>(
    null
  );
  const { user } = useContext(UserContext);

  const recommend = () => {
    if (selectedPlaylist) {
      selectedPlaylist.user = user;

      addRecommendation(selectedPlaylist).then(
        () => {
          setSelectedPlaylist(null);
          handleClose && handleClose();
          handleRecommend && handleRecommend()
        }
      );
    }
  };

  const search = (value: string) => setFilter(value);

  const getFilteredPlaylists = () => {
    return (
      playlists?.filter((playlist) =>
        playlist.name?.toLowerCase().includes(filter.toLowerCase())
      ) ?? []
    );
  };

  useEffect(() => {
    getActualUserPlaylists().then((userPlaylists) => {
      setPlaylists(userPlaylists);
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
        <StyledPlayListCard
          playList={selectedPlaylist}
          handleClick={() => setSelectedPlaylist(null)}
        />
      ) : (
          <>
            <SearchBox handleChange={search} />
            <PlayListCardList
              playLists={getFilteredPlaylists()}
              isCarousel={false}
              handleCardClick={(p: Playlist) => {
                setFilter('');
                setSelectedPlaylist(p);
              }}
            />
          </>
        )}
    </StyledRecomendationForm>
  );
};

export default RecomendationForm;
