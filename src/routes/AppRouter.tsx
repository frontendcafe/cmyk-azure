import React from 'react';
import { Router } from '@reach/router';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import NotFound from '../pages/NotFound';

const AppRouter = () => {
  return (
    <React.Fragment>
      <Router>
        <Home path="/" />
        <Profile path="/:id" />
        <NotFound default />
      </Router>
    </React.Fragment>
  );
};

export default AppRouter;
