import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';

import { Form } from '../../styles/Form';
import { Title } from '../../styles/TitleCenter';
import axios from '../../services/axios';
import history from '../../services/history';
import Loading from '../../components/Loading';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formError = false;

    if (name.length < 3 || name.length > 12) {
      formError = true;
      toast.error('Nome deve conter entre 3 e 12 caracteres');
    }
    if (!isEmail(email)) {
      formError = true;
      toast.error('Email inválido');
    }
    if (password.length < 6 || password.length > 32) {
      formError = true;
      toast.error('Senha deve ter entre 6 e 32 caracteres');
    }

    if (formError) return;

    setIsLoading(true);
    try {
      const body = {
        nome: name,
        email: email,
        password: password,
      };
      await axios.post('/users', { ...body });

      toast.success('Conta criada com sucesso');
      history.push('/login');
    } catch (e) {
      const errors = get(e, 'response.data.errors', []);
      errors.forEach((err) => toast.error(err));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Loading isLoading={isLoading} />
      <Title>Crie sua conta</Title>
      <Form onSubmit={handleSubmit}>
        <div className="container-input">
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
          />
        </div>
        <div className="container-input">
          <label htmlFor="email">E-mail: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
          />
        </div>
        <div className="container-input">
          <label htmlFor="password">Senha: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
          />
        </div>
        <div className="container-submit">
          <button type="submit">Criar minha conta</button>
        </div>
      </Form>
    </div>
  );
}
