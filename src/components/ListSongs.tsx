import React from 'react';
import Song from '../models/Song';
import ItemSong from './ItemSong';

interface Props {
  songs: Song[] | null
}
const ListSongs: React.FC<Props> = ({ songs }) => {
  return (
    <ul>
      {songs && songs.map(song => (<li>
        <ItemSong song={song} />
      </li>))}

    </ul>
  );
};

export default ListSongs;