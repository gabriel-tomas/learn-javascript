import React from 'react';
import { toast } from 'react-toastify';

import { Title, Paragrafo } from './styled';

export default function Login() {
  toast.success('Oie');
  toast.info('Oie');
  toast.error('Oie');
  toast.warn('Oie');

  return (
    <div>
      <Title>
        Login
        <span>oi</span>
      </Title>
      <button>Enviar</button>
      <a href="#">Link</a>
      <Paragrafo>Clique em cima para enviar</Paragrafo>
    </div>
  );
}
