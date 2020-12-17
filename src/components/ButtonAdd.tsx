import React from 'react';
import ButtonFloat from './ButtonCircle';
import IconAdd from './IconAdd';

interface Props {
  handleClick: Function;
}

const ButtonAdd: React.FC<Props> = ({ handleClick }) => {
  return (
    <ButtonFloat handleClick={handleClick}>
      <IconAdd />
    </ButtonFloat>
  );
};

export default ButtonAdd;
