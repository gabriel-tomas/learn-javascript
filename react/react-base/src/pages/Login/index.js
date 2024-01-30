import React from 'react';
import { useDispatch } from 'react-redux';

import { Title, Paragrafo } from './styled';
import * as actions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(actions.clicaBotaoRequest());
  };

  return (
    <div>
      <Title>
        Login
        <span>oi</span>
      </Title>
      <button onClick={handleClick}>Enviar</button>
      <a href="#">Link</a>
      <Paragrafo>Clique em cima para enviar</Paragrafo>
    </div>
  );
}
