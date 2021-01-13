import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from '../layout/Layout';
import NotFound from '../pages/NotFound';
import PrivateRoute from '../components/PrivateRoute';
import UserProvider from '../context/user/UserProvider';

import Landing from '../pages/Landing';

import AboutUs from '../pages/AboutUs';

const AppRouter = () => {
  return (
    <>
      <UserProvider>
        <Router>
          <Switch>
            <Route path="/login" component={Landing} />
            <Route path="/aboutus" render={(props) => <AboutUs {...props} />} />
            <PrivateRoute path="/">
              <Layout />
            </PrivateRoute>
            <Route component={NotFound} />
          </Switch>
        </Router>
      </UserProvider>
    </>
  );
};

export default AppRouter;
