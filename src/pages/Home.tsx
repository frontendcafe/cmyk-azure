import React, { useRef } from 'react';
import ButtonAdd from '../components/ButtonAdd';
import Modal from '../components/Modal';
import RecomendationForm from '../components/RecomendationForm';

const Home = () => {
  const modalRecomendationForm = useRef<any>();

  return (
    <>
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
