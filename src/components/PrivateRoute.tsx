import React, { useContext } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import UserContext from '../context/user/UserContext';

export default function PrivateRoute({ children, ...rest }: RouteProps) {
  const { isLogged } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogged && isLogged() ? children : <Redirect to="/login" />
      }
    />
  );
}
