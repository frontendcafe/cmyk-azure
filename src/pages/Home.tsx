import { RouteComponentProps } from '@reach/router';
import React, { useRef } from 'react';
import ButtonAdd from '../components/ButtonAdd';
import Modal from '../components/Modal';
import RecomendationForm from '../components/RecomendationForm';

const Home = (props: RouteComponentProps) => {
  const modalRecomendationForm = useRef<any>();

  return (
    <>
      Home
      <Modal id="modal" ref={modalRecomendationForm} title="Recomenda!">
        <RecomendationForm />
      </Modal>
      <ButtonAdd
        handleClick={() => modalRecomendationForm?.current?.openModal()}
      />
    </>
  );
};

export default Home;
