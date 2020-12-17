import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from '../layout/Layout';
import NotFound from '../pages/NotFound';
import PrivateRoute from '../components/PrivateRoute';

const AppRouter = () => {
  return (
    <>
      <Router>
        <Switch>
          <PrivateRoute path="/">
            <Layout />
          </PrivateRoute>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
