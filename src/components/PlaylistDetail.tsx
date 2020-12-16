import React from 'react';
import styled from 'styled-components';
import Playlist from '../models/Playlist';
import ListSongs from './ListSongs';
import Title from './Title';

interface Props {
  playlist: Playlist;
}

const StyledPlaylistDetail = styled.section`
  padding: 0 1rem;
`;

const PlaylistDetail: React.FC<Props> = ({ playlist }) => {
  return (
    <StyledPlaylistDetail>
      <Title>{playlist.name}</Title>
      <ListSongs songs={playlist.songs} />
    </StyledPlaylistDetail>
  );
};

export default PlaylistDetail;
