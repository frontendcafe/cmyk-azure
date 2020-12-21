import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PlayListCardList from '../components/PlayListCardList';
import ProfileIcon from '../components/ProfileIcon';
import Title from '../components/Title';
import Playlist from '../models/Playlist';
import User from '../models/User';
import { getRecomendations } from '../services/firebase/recommendations';
import { getPlaylistById } from '../services/spotify/playlist';
import { getUserById } from '../services/spotify/user';

const StyledPlaylists = styled.div`
  padding: 2rem 1rem;
  min-height: 50vh;
`;

const Profile = () => {
  const { profileId }: { profileId: string } = useParams();
  const [user, setUser] = useState<User | null>();
  const [playlists, setPlaylists] = useState<Playlist[] | null>();

  useEffect(() => {
    getUserById(profileId).then((u: User | null) => setUser(u));
    getRecomendations(profileId).then(async (recommendedPlaylists) => {
      const spotifyPlaylists = recommendedPlaylists
        ? await Promise.all(
            recommendedPlaylists.map(async (playlist) => {
              const sPlaylist = playlist.id
                ? await getPlaylistById(playlist.id)
                : null;

              if (sPlaylist) await sPlaylist.fillSongs();
              return sPlaylist;
            })
          )
        : null;

      if (spotifyPlaylists) {
        const filteredPlaylists: any = spotifyPlaylists.filter((p) => p);
        setPlaylists(filteredPlaylists);
      }
    });
  }, []);

  return (
    <>
      <ProfileIcon
        imageUrl={user?.imageUrl ?? ''}
        userName={user?.name ?? ''}
      />
      {playlists && (
        <StyledPlaylists>
          <Title>Recommendations</Title>
          <PlayListCardList playLists={playlists} isCarousel={false} />
        </StyledPlaylists>
      )}
    </>
  );
};

export default Profile;
