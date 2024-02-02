import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';

import { Form } from '../../styles/Form';
import { Title } from '../../styles/TitleCenter';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';

export default function Register() {
  const dispatch = useDispatch();

  const id = useSelector((state) => state.auth.user.id);
  const nameStored = useSelector((state) => state.auth.user.nome);
  const emailStored = useSelector((state) => state.auth.user.email);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  React.useEffect(() => {
    if (!id) return;

    setName(nameStored);
    setEmail(emailStored);
  }, [nameStored, id, emailStored]);

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
    if (!id && (password.length < 6 || password.length > 32)) {
      formError = true;
      toast.error('Senha deve ter entre 6 e 32 caracteres');
    }

    if (formError) return;

    dispatch(actions.registerRequest({ name, email, password, id }));
  };

  return (
    <div>
      <Loading isLoading={isLoading} />
      <Title>{id ? 'Edite seus dados' : 'Crie sua conta'}</Title>
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
          <button type="submit">
            {id ? 'Salvar dados' : 'Criar minha conta'}
          </button>
        </div>
      </Form>
    </div>
  );
}
