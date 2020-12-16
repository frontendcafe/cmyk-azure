import { RouteComponentProps } from '@reach/router';
import React, { useEffect, useRef, useState } from 'react';
import AuthenticationContainer from '../components/AuthenticationContainer';
import ButtonAdd from '../components/ButtonAdd';
import Layout from '../components/Layout';
import Modal from '../components/Modal';
import PlaylistDetail from '../components/PlaylistDetail';
import RecomendationForm from '../components/RecomendationForm';
import Playlist from '../models/Playlist';
import {
  getActualUserPlaylists,
  getPlaylistById,
} from '../services/spotify/playlist';

const Home = (props: RouteComponentProps) => {
  const modalRecomendationForm = useRef<any>();
  const [playlist, setPlaylist] = useState<Playlist | null>(null);

  return (
    <AuthenticationContainer>
      <Layout>
        {playlist && <PlaylistDetail playlist={playlist} />}
        <ButtonAdd
          handleClick={() => modalRecomendationForm?.current?.openModal()}
        />
        <Modal id="modal" ref={modalRecomendationForm} title="Recomenda!">
          <RecomendationForm />
        </Modal>
      </Layout>
    </AuthenticationContainer>
  );
};

export default Home;
