import React from 'react';
import { Router } from '@reach/router';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import NotFound from '../pages/NotFound';

const AppRouter = () => {
  return (
    <>
      <Router>
        <Home path="/" />
        <Profile path="/:id" />
        <NotFound default />
      </Router>
    </>
  );
};

export default AppRouter;
