import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from '../layout/Layout';
import NotFound from '../pages/NotFound';
import PrivateRoute from '../components/PrivateRoute';
import Login from '../pages/Login';
import UserProvider from '../context/user/UserProvider';
import AboutUs from '../pages/AboutUs';

const AppRouter = () => {
  return (
    <>
      <UserProvider>
        <Router>
          <Switch>
            <Route path="/login" render={(props) => <Login {...props} />} />
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
