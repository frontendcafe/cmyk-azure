import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { LONG_FONT_SIZE, MEDIUM_FONT_SIZE, MEDIUM_FONT_WEIGHT, PRIMARY_COLOR, TABLET_BREAKPOINT } from '../styles/variables';
import Brand from './Brand';

interface Option {
  id: string;
  name: string;
  to: string;
}

interface Props {
  options?: Option[];
}

const StyledOptions = styled.ul`
  list-style-type: none;
  display: flex;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  ${({ hasOptions }: { hasOptions?: boolean }) => !hasOptions && css`justify-content: center;`};
  @media (max-width: ${TABLET_BREAKPOINT}) {
    justify-content: center;
    &> ${StyledOptions} {
      display: none;
    }
  }
`;



const StyledBrand = styled(Brand)`
  font-size: ${LONG_FONT_SIZE};
`;

const StyledOption = styled(Link)`
  font-size: ${MEDIUM_FONT_SIZE};
  font-weight: ${MEDIUM_FONT_WEIGHT};
  transition: all .75s;
  &:hover{
    color: ${PRIMARY_COLOR};
  }
`;

const LandingNavbar: React.FC<Props> = ({ options }) => {
  const hasOptions = (options && options.length > 0);
  return (
    <header>
      <StyledNav hasOptions={hasOptions}>
        <StyledBrand />
        {
          hasOptions &&
          <StyledOptions>
            {options && options.map(option =>
              <li key={option.id}>
                <StyledOption to={option.to}>{option.name}</StyledOption>
              </li>
            )}

          </StyledOptions>
        }

      </StyledNav>
    </header>
  );
};

export default LandingNavbar;