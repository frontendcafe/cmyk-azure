import React from 'react';
import styled from 'styled-components';
import PlayListCard from './PlayListCard';
import Carousel from 'react-elastic-carousel';
import Playlist from '../models/Playlist';

interface Props {
  playLists: Array<Playlist>;
  isCarousel: boolean;
}

const breakPointsCarousel = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 1 },
  { width: 850, itemsToShow: 3, itemsToScroll: 1 },
  { width: 1150, itemsToShow: 4, itemsToScroll: 1 },
  { width: 1450, itemsToShow: 5, itemsToScroll: 1 },
  { width: 1750, itemsToShow: 6, itemsToScroll: 1 },
];

const Container = styled.div`
  .rec-dot {
    box-shadow: 0 0 1px 2px #1292d3;
  }

  .rec-dot_active {
    background-color: #1292d3;
  }
`;

const toggleLike = () => {
  console.log('Test toggleLike');
};

const PlayListCardList: React.FC<Props> = ({ playLists, isCarousel }) => {
  return (
    <Container>
      <Carousel
        breakPoints={breakPointsCarousel}
        itemPadding={[0, 10, 0, 0]}
        showArrows={false}
      >
        {playLists.map((list) => (
          <PlayListCard playList={list} toggleLike={toggleLike} />
        ))}
      </Carousel>
    </Container>
  );
};

export default PlayListCardList;
