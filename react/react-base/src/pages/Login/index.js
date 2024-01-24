import React from 'react';

import { Title, Paragrafo } from './styled';

export default function Login() {
  return (
    <div>
      <Title>
        Login
        <span>oi</span>
      </Title>
      <button>Enviar</button>
      <Paragrafo>Clique em cima para enviar</Paragrafo>
    </div>
  );
}
