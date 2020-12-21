import React from 'react';
import styled from 'styled-components';
import Song from '../models/Song';
import { MIN_FONT_SIZE } from '../styles/variables';
import ItemSong from './ItemSong';

interface Props {
  songs: Song[] | null;
  limit?: number;
}

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: minmax(auto, 900px);
  justify-content: center;
`;

const StyledMoreSongs = styled.p`
  text-align: center;
  margin: 0;
  font-size: ${MIN_FONT_SIZE};
`;

const ListSongs: React.FC<Props> = ({ songs, limit = 10 }) => {
  const moreSongs = (songs?.length ?? 0) - limit;

  return (
    <>
      <StyledList>
        {songs &&
          songs
            .sort((a: Song, b: Song) => (a.popularity > b.popularity ? -1 : 1))
            .slice(0, limit)
            .map((song) => (
              <li key={`li-${song.id}`}>
                <ItemSong song={song} key={`ItemSong-${song.id}`} />
              </li>
            ))}
      </StyledList>
      <StyledMoreSongs>
        {moreSongs && moreSongs > 0 ? `${moreSongs} songs more...` : ''}
      </StyledMoreSongs>
    </>
  );
};

export default ListSongs;
