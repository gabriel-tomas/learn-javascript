import { createGlobalStyle, styled } from 'styled-components';
import colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

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

  body .Toastify div.Toastify__toast-body > div:nth-child(2) {
    color: ${colors.text};
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background-color: ${colors.messages.success};
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background-color: ${colors.messages.error};
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--warning {
    background-color: ${colors.messages.warn};
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--info {
    background-color: ${colors.messages.info};
  }
`;

export const Main = styled.main`
  min-width: 250px;
  max-width: 960px;
  padding-inline: clamp(1rem, 5vw, 3rem);
  margin-inline: auto;
`;
