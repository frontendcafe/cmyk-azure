import React from 'react';
import ButtonPrimary from './ButtonPrimary';
import IconAdd from './IconAdd';

interface Props {
  handleClick: Function;
}

const ButtonAdd: React.FC<Props> = ({ handleClick }) => {
  return (
    <ButtonPrimary handleClick={handleClick} isCircle isIcon>
      <IconAdd />
    </ButtonPrimary>
  );
};

export default ButtonAdd;
