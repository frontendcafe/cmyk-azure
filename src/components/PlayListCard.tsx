import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: () => void;
}

const Card = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid white;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-around
`;

const CardBody = styled.div`

`;

const CardFooter = styled.div`

`;

const PlayListCard: React.FC<Props> = ({ text }) => {
  const [count, setCount] = useState<number | null>(1);

  return (
    <Card>
      <CardHeader>
        <span>List Name</span> <span>❤</span>
      </CardHeader>
      <CardBody>Body Card</CardBody>
      <CardFooter>UserName</CardFooter>
    </Card>
  );
};

export default PlayListCard;
