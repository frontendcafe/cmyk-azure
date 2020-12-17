import React from 'react';
import styled from 'styled-components';
import Playlist from '../models/Playlist';
import {
  GREY_COLOR,
  MIN_FONT_SIZE,
  NORMAL_FONT_SIZE,
  PRIMARY_COLOR,
} from '../styles/variables';
import IconExternalLink from './IconExternalLink';
import ListSongs from './ListSongs';
import Title from './Title';

interface Props {
  playlist: Playlist | null;
}

const StyledPlaylistDetail = styled.section`
  margin: 2rem 0;
`;

const StyledSpanRecommended = styled.span`
  color: ${GREY_COLOR};
  font-size: ${MIN_FONT_SIZE};
`;

const StyledExternalLink = styled.a`
  color: ${PRIMARY_COLOR};
  font-size: ${NORMAL_FONT_SIZE};
  margin-left: 0.5rem;
`;

const PlaylistDetail: React.FC<Props> = ({ playlist }) => {
  return (
    <>
      {playlist && (
        <StyledPlaylistDetail>
          <StyledSpanRecommended>Recommended</StyledSpanRecommended>
          <Title>
            <span>{playlist.name}</span>
            <StyledExternalLink href={playlist.url ?? ''} target="_blank">
              <IconExternalLink />
            </StyledExternalLink>
          </Title>
          <ListSongs songs={playlist.songs} />
        </StyledPlaylistDetail>
      )}
    </>
  );
};

export default PlaylistDetail;
