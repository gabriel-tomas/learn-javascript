import { createGlobalStyle, styled } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    box-sizing: border-box;
  }

  html, button, input {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px
  }

  body {
    background-color: #1c1c1c;
  }

  button {
    background-color: unset;
  }

  button, a {
    cursor: pointer;
  }

  a {
    text-decoration: none;
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
