import { createGlobalStyle, styled } from 'styled-components';
import colors from '../config/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    box-sizing: border-box;
  }

  html, button, input, a {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    color: ${colors.text};
  }

  body {
    background-color: ${colors.background};
  }

  button {
    background-color: ${colors.primary};
    height: 35px;
    padding-inline: 19px;
    font-weight: 700;
    border-radius: 100px;
  }

  button, a {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: ${colors.text};
    font-weight: 500;
  }

  a:hover {
    text-decoration: underline;
  }

  ul {
    list-style: none;
  }
`;

export const Main = styled.main`
  min-width: 250px;
  max-width: 960px;
  padding-inline: clamp(1rem, 5vw, 3rem);
  margin-inline: auto;
`;
