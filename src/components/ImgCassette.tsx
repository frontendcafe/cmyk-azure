import React from 'react';
import img from '../assets/img/song-share-3.png';
interface Props {
  className?: string;
}

const ImgCassette: React.FC<Props> = ({ className }) => {
  return <img src={img} className={className} />;
};

export default ImgCassette;