import styled from 'styled-components';

import colors from '../../config/colors';

export const Container = styled.div`
  max-width: 500px;
  margin-inline: auto;
`;

export const Title = styled.h1`
  margin-top: 2rem;

`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  label {
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #eee;
    border: 5px dashed ${colors.primary};
    border-radius: 50%;

    .container-img {
      width: 100%;
      height: 100%;
    }

    .container-img > img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  span {
    color: ${colors.textDark};
    font-weight: 500;
    text-align: center;
    padding: .5rem;
  }

  input {
    display: none;
  }
`;
