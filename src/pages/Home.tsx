import { RouteComponentProps } from '@reach/router';
import React from 'react';
import ButtonAdd from '../components/ButtonAdd';

const Home = (props: RouteComponentProps) => {
  return (
    <>
      Home
      <ButtonAdd />
    </>
  );
};

export default Home;
