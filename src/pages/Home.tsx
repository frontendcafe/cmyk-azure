import { RouteComponentProps } from '@reach/router';
import React, { useRef } from 'react';
import ButtonAdd from '../components/ButtonAdd';
import Layout from '../components/Layout';
import Modal from '../components/Modal';
import PlaylistDetail from '../components/PlaylistDetail';
import RecomendationForm from '../components/RecomendationForm';
import Playlist from '../models/Playlist';

const Home = (props: RouteComponentProps) => {
  const modalRecomendationForm = useRef<any>();
  const playlist = new Playlist({ name: 'Arg Top 100' });

  return (
    <Layout>
      <PlaylistDetail playlist={playlist} />
      <ButtonAdd
        handleClick={() => modalRecomendationForm?.current?.openModal()}
      />
      <Modal id="modal" ref={modalRecomendationForm} title="Recomenda!">
        <RecomendationForm />
      </Modal>
    </Layout>
  );
};

export default Home;
