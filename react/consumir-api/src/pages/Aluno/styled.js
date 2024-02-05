import styled from 'styled-components';

import colors from '../../config/colors';

export const Title = styled.h1`
  max-width: 500px;
  margin-inline: auto;
  margin-top: 2rem;
`;

export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 1rem;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
  }

  a {
    position: absolute;
    bottom: -10px;
    color: #fff;
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    background-color: ${colors.secondary};
    padding: 5px;
    border-radius: 50%;
  }
`;
