import React from 'react';
import { toast } from 'react-toastify';

import { Title, Paragrafo } from './styled';

import axios from '../../services/axios';

export default function Login() {
  toast.success('Oie');
  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      const { data } = response;
      console.log(data);
    }
    getData();
  }, []);

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
