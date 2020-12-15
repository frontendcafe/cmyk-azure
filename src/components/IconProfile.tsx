import React from 'react';
import { MdAccountCircle } from 'react-icons/md';
import styled from 'styled-components';
import { ICON_FONT_SIZE } from '../styles/variables';

interface Props {
  imageUrl?: string
}

const StyledIconProfile = styled(MdAccountCircle)`
  font-size: ${ICON_FONT_SIZE}
`;

const IconProfile: React.FC<Props> = ({ imageUrl }) => {
  return (
    <React.Fragment>
      {
        imageUrl ?
          <img src={imageUrl} />
          : <StyledIconProfile />
      }
    </React.Fragment>
  );
};

export default IconProfile;