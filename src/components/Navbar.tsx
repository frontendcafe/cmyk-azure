import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  ICON_FONT_SIZE,
  LONG_FONT_SIZE,
  PRIMARY_COLOR,
  SECONDARY_FONT_FAMILY,
  TEXT_PRIMARY_COLOR,
} from '../styles/variables';
import UserContext from '../context/user/UserContext';
import ProfileIcon from './ProfileIcon';

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
  const { isLogged, user } = useContext(UserContext);

  return (
    <StyledNavbar>
      <div></div>
      <StyledMainLink to="/">song𝓢hare</StyledMainLink>
      {isLogged && isLogged() && (
        <StyledIconProfileLink to={`/profile/${user?.id}`}>
          <ProfileIcon
            imageUrl={user?.imageUrl ?? ''}
            userName={user?.name ?? ''}
            onlyImage
            imgSize={ICON_FONT_SIZE}
          />
        </StyledIconProfileLink>
      )}
    </StyledNavbar>
  );
};

export default Navbar;
