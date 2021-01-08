import React from 'react';
import styled from 'styled-components';
import { BACKGROUND_COLOR, TEXT_PRIMARY_COLOR } from '../styles/variables';
import CardMember from '../components/CardMember';

interface Props {}

const StyledLayout = styled.div`
  background-color: ${BACKGROUND_COLOR};
  color: ${TEXT_PRIMARY_COLOR};
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: minmax(250px, 1024px);
  justify-content: center;
`;

const StyledText = styled.div`
  margin-top: 40px;
  diplay: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  margin: 40px 0;
  text-align: center;
`;

const members = [
  {
    name: 'Renzo Tejada',
    job: 'Front End Dev',
    description:
      'I am constantly interested in facing new challenges. Fan of technology, crypto and fashion. Fanatic for innovating in all the environments of my life trying to give the maximum in everything I do.',
    github: 'https://github.com/RnzTejada',
    linkedin: 'https://www.linkedin.com/in/renzo-emiliano-tejada-329248192/',
  },
  {
    name: 'Freud Munera',
    job: 'Front End Dev',
    description: 'description',
    github: 'https://github.com/AlexandroMunera',
    linkedin: 'https://www.linkedin.com/in/freud-alexandro/',
  },
  {
    name: 'Agustin Vazquez',
    job: 'Js Developer',
    description: 'description',
    github: 'https://github.com/9gustin',
    linkedin: 'https://www.linkedin.com/in/vazquezagustin/',
  },
];

const AboutUs: React.FC<Props> = () => {
  return (
    <>
      <StyledLayout>
        <StyledText>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
            sequi rem? Libero ipsa, quam ut nulla perferendis quasi distinctio
            rerum quis saepe nemo, officiis mollitia, dolorum delectus
            praesentium quae laborum.
          </h4>
        </StyledText>
        <Title>Miembros</Title>
        <div>
          {members.map((member) => (
            <CardMember
              name={member.name}
              job={member.job}
              description={member.description}
              github={member.github}
              linkedin={member.linkedin}
            />
          ))}
        </div>
      </StyledLayout>
    </>
  );
};

export default AboutUs;
