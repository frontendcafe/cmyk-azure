import React from 'react';
import styled from 'styled-components';
import Song from '../models/Song';
import {
  MIN_FONT_SIZE,
  PRIMARY_COLOR,
  TEXT_PRIMARY_COLOR,
} from '../styles/variables';
import IconExternalLink from './IconExternalLink';
interface Props {
  song: Song;
}

const StyledItemSong = styled.a`
  padding: 0.5rem 0;
  text-decoration: none;
  display: grid;
  grid-template-columns: 85px 1fr 20px;
  font-size: ${MIN_FONT_SIZE};
  &:visited {
    color: unset;
  }
  p {
    margin: 0;
  }
  * {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const StyledSongImage = styled.img`
  justify-self: center;
  border-radius: 10px;
  width: 64px;
`;

const StyledSongName = styled.p`
  color: ${PRIMARY_COLOR};
  display: grid;
  grid-template-columns: 90% 10%;
  padding-bottom: 0.3rem;
  svg {
    justify-self: flex-end;
  }
`;

const StyledSongArtist = styled.a`
  color: ${TEXT_PRIMARY_COLOR};
`;

const ItemSong: React.FC<Props> = ({ song }) => {
  return (
    <StyledItemSong href={song.url ?? ''} target="_blank">
      <StyledSongImage
        src={song.imageUrl ?? ''}
        alt={`Imagen de la cancion ${song.name}, de/los artistas ${song.artist}`}
      />
      <div>
        <StyledSongName>
          {' '}
          <span>{song.name}</span> <IconExternalLink />{' '}
        </StyledSongName>
        <StyledSongArtist>{song.artist}</StyledSongArtist>
      </div>
    </StyledItemSong>
  );
};

export default ItemSong;
