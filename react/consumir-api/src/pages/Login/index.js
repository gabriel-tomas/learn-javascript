import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';

import { Title } from '../../styles/TitleCenter';
import { Form } from '../../styles/Form';
import * as actions from '../../store/modules/auth/actions';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formError = false;

    if (!isEmail(email)) {
      formError = true;
      toast.error('Email inválido');
    }
    if (password.length < 6 || password.length > 32) {
      formError = true;
      toast.error('Senha inválida');
    }

    if (formError) return;

    dispatch(actions.loginRequest({ email, password }));
  };

  return (
    <div>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit}>
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
          <button type="submit">Entrar</button>
        </div>
      </Form>
    </div>
  );
}
