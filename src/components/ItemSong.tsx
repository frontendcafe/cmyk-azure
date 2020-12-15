import React from 'react';
import Song from '../models/Song';
interface Props {
  song: Song
}
const ItemSong: React.FC<Props> = ({ song }) => {
  return (
    <a>ItemSong</a>
  );
};

export default ItemSong;