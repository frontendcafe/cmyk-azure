import React from 'react';
import styled from 'styled-components';
import Playlist from '../models/Playlist';
import { OVERLAY_COLOR, PRIMARY_COLOR } from '../styles/variables';
interface Props {
  playList: Playlist;
  className?: string;
  toggleLike?: (id: number) => void;
  handleClick?: Function;
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
  overflow: hidden;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 20px;
  background-color: ${OVERLAY_COLOR};
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

const PlayListCard: React.FC<Props> = ({
  playList,
  className,
  handleClick,
}) => {
  const urlImage = playList.imageUrl ? playList.imageUrl : 'Url default';
  const user = playList.user ?? playList.owner;

  function openInNewTab(url: any) {
    window.open(url, '_blank');
  }

  return (
    <Card
      imageUrl={urlImage}
      className={className}
      onClick={() =>
        handleClick ? handleClick(playList) : openInNewTab(playList.url)
      }
    >
      <CardHeader>
        <span>{playList.name}</span> <UserName>{user?.name}</UserName>
      </CardHeader>
      <CardBody></CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default PlayListCard;
