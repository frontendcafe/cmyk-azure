import React from 'react';
import styled from 'styled-components';
import Song from '../models/Song';
import ItemSong from './ItemSong';

interface Props {
  songs: Song[] | null;
}

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: minmax(300px, 900px);
  justify-content: center;
`;

const ListSongs: React.FC<Props> = ({ songs }) => {
  return (
    <StyledList>
      {songs &&
        songs.map((song) => (
          <li>
            <ItemSong song={song} />
          </li>
        ))}
    </StyledList>
  );
};

export default ListSongs;
