import React from 'react';
import styled from 'styled-components';
import Playlist from '../models/Playlist';
interface Props {
  playList: Playlist;
  className?: string;
  toggleLike?: (id: number) => void;
}
const Card = styled.div`
  width: 200px;
  height: 200px;
  border: none;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${(props: { imageUrl: string }) => props.imageUrl});
  background-repeat: no-repeat;
  background-size: cover;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
`;

const UserName = styled.span`
  color: rgb(75 178 252);
`;

const CardBody = styled.div``;

const CardFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 20px;
  color: rgb(75 178 252);
`;

const PlayListCard: React.FC<Props> = ({ playList, className }) => {
  const urlImage = playList.imageUrl ? playList.imageUrl : 'Url default';

  function openInNewTab(url: any) {
    window.open(url, '_blank');
  }

  return (
    <Card
      imageUrl={urlImage}
      className={className}
      onClick={() => openInNewTab(playList.url)}
    >
      <CardHeader>
        <span>{playList.name}</span> <UserName>{playList.user?.name}</UserName>
      </CardHeader>
      <CardBody></CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default PlayListCard;
