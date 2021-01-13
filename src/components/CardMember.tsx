import React from 'react';
import styled from 'styled-components';
import Github from '../assets/icons/Github';
import Linkedin from '../assets/icons/Linkedin';

interface Props {
  image?: string;
  name: string;
  description: string;
  job: string;
  github?: string;
  linkedin?: string;
}

const StyledRoot = styled.div`
  padding: 50px 12px;
`;

const StyledContainer = styled.div`
  border: ${(props) => `1px solid `};
  padding: 25px 12px 18px;
  background: ${(props) => `linear-gradient(
    45deg,
  )`};
`;
const Title = styled.h2`
  color: #fff;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;
const Job = styled.div`
  color: #ccc;
  font-weight: 300;
  margin: 6px 0;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;
const Description = styled.p`
  color: #fff;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`;
const ActionButtons = styled.div`
  color: #333;
  display: flex;
  align-items: center;
  svg {
    transform: translateY(2px);
    margin-right: 5px;
    color: white;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    & button {
      width: 100%;
      margin-bottom: 4px;
      font-size: 0.65rem;
    }
  }
`;
const Button = styled.button`
  text-decoration: none;
  margin: 0 5px;
  padding: 8px 14px;
  background: rgba(155, 155, 155, 0.2);
  color: #fff;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
`;

const CardMember: React.FC<Props> = ({
  image,
  job,
  description,
  name,
  github,
  linkedin,
}) => {
  return (
    <StyledRoot>
      <StyledContainer>
        <>
          <Title>{name}</Title>
          <Job>{job}</Job>
          <Description>{description}</Description>
          <ActionButtons>
            <Button>
              <Github />
              Github
            </Button>
            <Button>
              <Linkedin />
              Linkedin
            </Button>
          </ActionButtons>
        </>
      </StyledContainer>
    </StyledRoot>
  );
};

export default CardMember;
