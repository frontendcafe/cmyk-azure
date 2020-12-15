import { RouteComponentProps } from '@reach/router';
import React, { useRef } from 'react';
import ButtonAdd from '../components/ButtonAdd';
import Layout from '../components/Layout';
import Modal from '../components/Modal';
import RecomendationForm from '../components/RecomendationForm';

const Home = (props: RouteComponentProps) => {
  const modalRecomendationForm = useRef<any>();

  return (
    <Layout>
      <Modal id="modal" ref={modalRecomendationForm} title="Recomenda!">
        <RecomendationForm />
      </Modal>
      <ButtonAdd
        handleClick={() => modalRecomendationForm?.current?.openModal()}
      />
    </Layout>
  );
};

export default Home;
