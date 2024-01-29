import React from 'react';
import { useDispatch } from 'react-redux';

import { Title, Paragrafo } from './styled';

export default function Login() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: 'BOTAO_CLICADO',
    });
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
