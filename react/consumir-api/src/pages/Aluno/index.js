import React from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { isEmail } from 'validator';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { FaUserCircle, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import axios from '../../services/axios';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';

import Loading from '../../components/Loading';

import { Form } from '../../styles/Form';
import { Title, ProfilePicture } from './styled';

export default function Aluno({ match }) {
  const dispatch = useDispatch();

  const id = get(match, 'params.id', false);

  const [nome, setNome] = React.useState('');
  const [sobrenome, setSobrenome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [idade, setIdade] = React.useState('');
  const [peso, setPeso] = React.useState('');
  const [altura, setAltura] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [photo, setPhoto] = React.useState('');

  React.useEffect(() => {
    if (!id) return;

    async function getAlunoData() {
      try {
        setIsLoading(true);
        const res = await axios.get(`/alunos/${id}`);
        setPhoto(get(res.data, 'Fotos[0].url', ''));

        setNome(res.data.nome);
        setSobrenome(res.data.sobrenome);
        setEmail(res.data.email);
        setIdade(res.data.idade);
        setPeso(res.data.peso);
        setAltura(res.data.altura);
        setIsLoading(false);
      } catch (err) {
        const status = get(err, 'response.status', false);
        const errors = get(err, 'response.data.errors', []);
        if (status === 400) {
          errors.map((error) => {
            toast.error(error);
          });
        }
        history.push('/');
      }
    }
    getAlunoData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formError = false;

    if (nome.length < 3 || nome.length > 84) {
      formError = true;
      toast.error('Nome deve conter entre 3 e 84 caracteres');
    }
    if (sobrenome.length < 3 || sobrenome.length > 84) {
      formError = true;
      toast.error('Sobrenome deve conter entre 3 e 84 caracteres');
    }
    if (!isEmail(email)) {
      formError = true;
      toast.error('Email inválido');
    }
    if (
      Number.isNaN(Number(idade)) ||
      Number.isNaN(Number(peso)) ||
      Number.isNaN(Number(altura))
    ) {
      toast.error(
        'Os campos: "Idade", "Peso" e "Altura" precisam ser númericos',
      );
      return;
    }
    if (!Number.isInteger(Number(idade))) {
      formError = true;
      toast.error('A idade precisa ser um inteiro');
    }
    if (Number(idade) < 6) {
      formError = true;
      toast.error('O aluno precisa ter mais que 6 anos para ser cadastrado');
    }
    if (Number(idade) > 150) {
      formError = true;
      toast.error('Idade inválida');
    }
    if (Number(peso) <= 0 || Number(peso) > 700) {
      formError = true;
      toast.error('Peso inválido');
    }
    if (Number(altura) <= 0 || Number(altura) > 10) {
      formError = true;
      toast.error('Altura inválida');
    }

    if (formError) return;

    try {
      setIsLoading(true);
      if (id) {
        await axios.put(`/alunos/${id}`, {
          nome,
          sobrenome,
          email,
          idade,
          peso,
          altura,
        });
        toast.success('Aluno(a) editado(a) com sucesso');
      } else {
        await axios.post(`/alunos/`, {
          nome,
          sobrenome,
          email,
          idade,
          peso,
          altura,
        });
        toast.success('Aluno(a) criado(a) com sucesso');
      }
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      const status = get(err, 'response.status', false);
      const data = get(err, 'response.data', {});
      const errors = get(data, 'errors', []);

      if (status === 400) {
        if (errors.length > 0) {
          errors.map((error) => toast.error(error));
        } else {
          toast.error('Erro desconhecido');
        }
      }

      if (status === 401) {
        toast.info('Faça o login novamente');
        dispatch(actions.loginFailure());
        history.push('/login');
      }
    }
  };

  return (
    <div>
      <Loading isLoading={isLoading} />
      <Title>{id ? 'Editar aluno' : 'Novo aluno'}</Title>

      {id && (
        <ProfilePicture>
          {photo ? (
            <img src={photo} alt={nome} crossOrigin="" />
          ) : (
            <FaUserCircle size={100} />
          )}
          <Link to={`/fotos/${id}`}>
            <FaEdit />
          </Link>
        </ProfilePicture>
      )}

      <Form onSubmit={handleSubmit}>
        <div className="container-input">
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            id="name"
          />
        </div>
        <div className="container-input">
          <label htmlFor="sobrenome">Sobrenome: </label>
          <input
            type="text"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
            id="sobrenome"
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
          <label htmlFor="idade">Idade: </label>
          <input
            type="number"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            id="idade"
          />
        </div>
        <div className="container-input">
          <label htmlFor="peso">Peso (Kg): </label>
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            id="peso"
          />
        </div>
        <div className="container-input">
          <label htmlFor="altura">Altura (metros): </label>
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            id="altura"
          />
        </div>
        <div className="container-submit">
          <button type="submit">{id ? 'Editar' : 'Adicionar'}</button>
        </div>
      </Form>
    </div>
  );
}

Aluno.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};
