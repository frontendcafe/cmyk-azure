import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  LONG_FONT_SIZE,
  PRIMARY_COLOR,
  SECONDARY_FONT_FAMILY,
  TEXT_PRIMARY_COLOR,
} from '../styles/variables';
import IconProfile from './IconProfile';
import UserContext from '../context/user/UserContext';

const StyledNavbar = styled.nav`
  font-size: ${LONG_FONT_SIZE};
  padding: 1rem 0.5rem;
  display: grid;
  grid-template-columns: 20% 60% 20%;
  align-items: center;
`;

const StyledIconProfileLink = styled(Link)`
  display: flex;
  justify-self: end;
  color: ${TEXT_PRIMARY_COLOR};
`;

const StyledMainLink = styled(Link)`
  justify-self: center;
  color: ${PRIMARY_COLOR};
  outline: none;
  text-decoration: none;
  font-family: ${SECONDARY_FONT_FAMILY};
`;

const Navbar = () => {
  const { isLogged } = useContext(UserContext);

  return (
    <StyledNavbar>
      <div></div>
      <StyledMainLink to="/">Azure</StyledMainLink>
      {isLogged && isLogged() && (
        <StyledIconProfileLink to="/profile/id">
          <IconProfile />{' '}
        </StyledIconProfileLink>
      )}
    </StyledNavbar>
  );
};

export default Navbar;
