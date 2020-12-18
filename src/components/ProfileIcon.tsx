import React from 'react';
import styled from 'styled-components';
import Avatar from 'react-avatar';

interface Props {
  imageUrl?: string;
  userName?: string;
  onlyImage?: boolean;
  imgSize?: string;
  className?: string;
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
const ProfileIcon: React.FC<Props> = ({ imageUrl, userName, className, onlyImage = false, imgSize = "100px" }) => {
  const avatar = <Avatar src={imageUrl} round size={imgSize} className={onlyImage ? className : ''} />;

  return (
    <>
      {
        onlyImage ?
          avatar
          :
          <Wrapper className={className}>
            <AvatarWrapper>
              {avatar}
            </AvatarWrapper>
            <Box>{userName}</Box>
          </Wrapper>
      }

    </>
  );
};

export default ProfileIcon;
