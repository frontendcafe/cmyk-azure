import styled from 'styled-components';
import React from 'react';
import img from './img1.jpg';

interface PlayList {
  id: number;
  name: string;
  userName: string;
  url: string;
  songs: Array<number>;
}

interface Props {
  playList: PlayList;
  toggleLike: (id: number) => void;
}

const Card = styled.div`
  width: 300px;
  height: 300px;
  border: none;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${img});
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

const PlayListCard: React.FC<Props> = ({ playList }) => {
  return (
    <Card>
      <CardHeader>
        <span>{playList.name}</span> <UserName>{playList.userName}</UserName>
      </CardHeader>
      <CardBody>x</CardBody>
      <CardFooter>
        <span>❤</span>
      </CardFooter>
    </Card>
  );
};

export default PlayListCard;
