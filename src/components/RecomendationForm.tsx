import React from 'react';
import styled from 'styled-components';
import { LIGHT_FONT_WEIGHT } from '../styles/variables';

const StyledRecomendationForm = styled.form`
  font-weight: ${LIGHT_FONT_WEIGHT};
`;

const RecomendationForm = () => {
  return (
    <StyledRecomendationForm>
      <p>SearchComponent</p>
      <p>PlaylistCardComponent</p>
      <p>ButtonSubmitComponent</p>
    </StyledRecomendationForm>
  );
};

export default RecomendationForm;
