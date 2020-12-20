import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ButtonAdd from '../components/ButtonAdd';
import FloatingFooter from '../components/FloatingFooter';
import Modal from '../components/Modal';
import PlayListCardList from '../components/PlayListCardList';
import PlaylistDetail from '../components/PlaylistDetail';
import RecommendationForm from '../components/RecomendationForm';
import Title from '../components/Title';
import UserContext from '../context/user/UserContext';
import Playlist from '../models/Playlist';
import { getRecomendations } from '../services/firebase/recommendations';
import { getPlaylistById } from '../services/spotify/playlist';
import {
  GREY_COLOR,
  MIN_FONT_SIZE,
  SECONDARY_FONT_FAMILY,
} from '../styles/variables';
import { randomBetween } from '../utils/randomBetween';

const StyledMain = styled.main`
  padding: 0 1rem;
`;
const StyledHelloUser = styled.p`
  margin: 1.2rem 0 0 0;
  color: ${GREY_COLOR};
  font-size: ${MIN_FONT_SIZE};
`;

const Home = () => {
  const modalRecomendationForm = useRef<any>();
  const [recomendations, setRecomendations] = useState<Playlist[] | null>(null);
  const { user } = useContext(UserContext);

  const getRecommendation = (): Playlist | null => {
    return recomendations
      ? recomendations[randomBetween(0, recomendations?.length ?? 1 - 1)]
      : null;
  };

  useEffect(() => {
    getRecomendations().then(async (recommendedPlaylists) => {
      const spotifyPlaylists = recommendedPlaylists
        ? await Promise.all(
            recommendedPlaylists.map(async (playlist) => {
              const sPlaylist = playlist.id
                ? await getPlaylistById(playlist.id)
                : null;

              if (sPlaylist) await sPlaylist.fillSongs();
              return sPlaylist;
            })
          )
        : null;

      if (spotifyPlaylists) {
        const filteredPlaylists: any = spotifyPlaylists.filter((p) => p);
        setRecomendations(filteredPlaylists);
      }
    });
  }, []);

  return (
    <StyledMain>
      <StyledHelloUser>
        Hi {user?.name ? `, ${user.name}` : ''}!
      </StyledHelloUser>
      <p>SearchComponent</p>
      <Title>Top recommendations</Title>
      <PlayListCardList playLists={recomendations ?? []} isCarousel />
      <PlaylistDetail playlist={getRecommendation()} />
      <Modal id="modal" ref={modalRecomendationForm} showHeader={false}>
        <RecommendationForm
          handleClose={modalRecomendationForm?.current?.closeModal}
        />
      </Modal>
      <FloatingFooter>
        <ButtonAdd
          handleClick={() => modalRecomendationForm?.current?.openModal()}
        />
      </FloatingFooter>
    </StyledMain>
  );
};

export default Home;
