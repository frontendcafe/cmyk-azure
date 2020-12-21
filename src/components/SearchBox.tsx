import React from 'react';
import styled from 'styled-components';
import {
  BEZ,
  BTN_WIDTH,
  COLOR_DARK,
  COLOR_LIGHT,
  DUR,
  FONT_FAM,
  HEIGHT,
  PRIMARY_COLOR,
  RAD,
} from '../styles/variables';
import { BiSearchAlt } from 'react-icons/bi';
interface Props {
  text?: string;
}

const Form = styled.form`
  position: relative;
  width: 100%;
  background: ${PRIMARY_COLOR};
  border-radius: ${RAD};
  font-size: 1.2rem;
  margin: 1rem 0;
`;

const Label = styled.label`
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  overflow: hidden;
`;

const Input = styled.input`
  height: ${HEIGHT};
  font-family: ${FONT_FAM};
  border: 0;
  color: ${COLOR_DARK};
  font-size: 1.2rem;

  outline: 0;
  width: 100%;
  background: ${COLOR_LIGHT};
  padding: 0 1.6rem;
  border-radius: ${RAD};
  appearance: none;
  transition: all ${DUR} ${BEZ};
  transition-property: width, border-radius;
  z-index: 1;
  position: relative;

  &:not(:placeholder-shown) {
    border-radius: ${RAD} 0 0 ${RAD};
    width: calc(100% - ${BTN_WIDTH});
    + Button {
      display: block;
    }
  }
`;

const Button = styled.button`
  height: ${HEIGHT};
  font-family: ${FONT_FAM};
  border: 0;
  color: ${COLOR_DARK};
  font-size: 1.8rem;
  padding: 5px 0 0 0;

  display: none; // prevent being able to tab to it
  position: absolute;
  top: 0;
  right: 0;
  width: ${BTN_WIDTH};
  font-weight: bold;
  background: ${PRIMARY_COLOR};
  border-radius: 0 ${RAD} ${RAD} 0;
`;

const SearchBox: React.FC<Props> = ({ text }) => {
  return (
    <Form>
      <Label htmlFor="search">Buscar playlists</Label>
      <Input
        id="search"
        type="search"
        placeholder="Buscar..."
        autoFocus
        required
      />
      <Button type="submit">
        <BiSearchAlt />
      </Button>
    </Form>
  );
};

export default SearchBox;
