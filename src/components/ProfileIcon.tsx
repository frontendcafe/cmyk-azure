import React from 'react';
import styled from 'styled-components';
import Avatar from 'react-avatar';

interface Props {
  imageUrl?: string;
  userName?: string;
}

const Wrapper = styled.div`
  display:grid
  grid-template-columns:1fr
  grid-template-rows:100vh
`;

const Box = styled.div`
  color: #fff;
  padding: 1em;
  text-align: center;
`;
const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

/**
 * PROFILE ICON - COPMPONENT
 * @param {string} imageUrl
 * @param {string} userName
 */
const ProfileIcon: React.FC<Props> = ({ imageUrl, userName }) => {
  return (
    <>
      <Wrapper>
        <AvatarWrapper>
          <Avatar src={imageUrl} round />
        </AvatarWrapper>
        <Box>{userName}</Box>
      </Wrapper>
    </>
  );
};

export default ProfileIcon;
