import React, { useRef } from 'react';
import ButtonAdd from '../components/ButtonAdd';
import FloatingFooter from '../components/FloatingFooter';
import Modal from '../components/Modal';
import PlayListCardList from '../components/PlayListCardList';
import RecommendationForm from '../components/RecomendationForm';

interface PlayList {
  id: number;
  name: string;
  userName: string;
  url: string;
  songs: Array<number>;
}

const playListsMock: Array<PlayList> = [
  {
    id: 1,
    name: 'Mi Lista',
    userName: 'Freud',
    url: 'www.google.com',
    songs: [1, 2, 3],
  },
  {
    id: 2,
    name: 'Mi Lista 2',
    userName: 'Freud 2',
    url: 'www.google.com',
    songs: [1, 2, 3],
  },
  {
    id: 3,
    name: 'Mi Lista 3',
    userName: 'Freud 3',
    url: 'www.google.com',
    songs: [1, 2, 3],
  },
  {
    id: 4,
    name: 'Mi Lista 4',
    userName: 'Freud 4',
    url: 'www.google.com',
    songs: [1, 2, 3],
  },
  {
    id: 5,
    name: 'Mi Lista 5',
    userName: 'Freud 5',
    url: 'www.google.com',
    songs: [1, 2, 3],
  },
  {
    id: 6,
    name: 'Mi Lista 6',
    userName: 'Freud 6',
    url: 'www.google.com',
    songs: [1, 2, 3],
  },
  {
    id: 7,
    name: 'Mi Lista 7',
    userName: 'Freud 7',
    url: 'www.google.com',
    songs: [1, 2, 3],
  },
];

const Home = () => {
  const modalRecomendationForm = useRef<any>();

  return (
    <>
      <Modal id="modal" ref={modalRecomendationForm} title="Recomenda!">
        <RecommendationForm />
      </Modal>
      <FloatingFooter>
        <ButtonAdd
          handleClick={() => modalRecomendationForm?.current?.openModal()}
        />
      </FloatingFooter>
    </>
  );
};

export default Home;
