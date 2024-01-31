import styled from 'styled-components';
import colors from '../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-inline: auto;
  max-width: 500px;

  .container-input {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    label {
      margin-bottom: 10px;
    }

    input {
      width: 100%;
      padding: .38rem .6rem;
      border: 1px solid #cccccc30;
      border-radius: 4px;
      background: ${colors.neutral2};

      &:focus {
        outline: none;
      }
    }
  }

  .container-submit {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    button {
      width: 100%;
      padding:.38rem.6rem;
      border: 1px solid ${colors.primary};
      border-radius: 4px;
      background: ${colors.primary};
      color: ${colors.textDark};
      font-weight: 700;
      font-size: 1rem;
      cursor: pointer;
      margin-top: 1rem;

      &:hover {
        background: ${colors.primary}de;
      }
    }
  }
`;
