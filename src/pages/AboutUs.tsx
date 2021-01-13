import React from 'react';
import styled from 'styled-components';
import { BACKGROUND_COLOR, TEXT_PRIMARY_COLOR } from '../styles/variables';
import CardMember from '../components/CardMember';
import LandingNavbar from '../components/LandingNavbar';

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
  padding: 0 20px;
  diplay: flex;
  text-align: center;
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
      'Me interesa constantemente afrontar nuevos retos. Fanático de la tecnología, las criptomonedas y la moda. Fanático por innovar en todos los entornos de mi vida intentando dar el máximo en todo lo que hago.',
    github: 'https://github.com/RnzTejada',
    linkedin: 'https://www.linkedin.com/in/renzo-emiliano-tejada-329248192/',
  },
  {
    name: 'Freud Múnera',
    job: 'Front End Dev',
    description: `Soy un desarrollador de software con experiencia en los entornos web y mobil. Me gusta resolver
problemas y conocer nuevas personas, tengo pensamiento critico y disfruto mucho aprender nuevas
cosas. Los retos me llaman la atencion y constantemente asisto a charlas o talleres sobre tecnologia. Tengo las habilidades necesarias pare trabajar en cualquier etapa del ciclo de vida de un desarrollo de
software y me integro rapidamente`,
    github: 'https://github.com/AlexandroMunera',
    linkedin: 'https://www.linkedin.com/in/freud-alexandro/',
  },
  {
    name: 'Agustin Vazquez',
    job: 'Js Developer',
    description: `Desde Córdoba, Argentina 🏘️ . Si tengo que elegir 2 palabras para definirme serian Auténtico y Versátil.`,
    github: 'https://github.com/9gustin',
    linkedin: 'https://www.linkedin.com/in/vazquezagustin/',
  },
];

const AboutUs: React.FC<Props> = () => {
  return (
    <>
      <StyledLayout>
        <LandingNavbar />
        <StyledText>
          <h4>
            Una app para recomendar y encontrar playlists de Spotify! <br />
            Song Share nace a partir de los proyectos CMYK++ de{' '}
            <a
              href="https://frontend.cafe/"
              style={{ color: '#4BB2FC' }}
              target="_blank"
            >
              Frontend Café
            </a>
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
