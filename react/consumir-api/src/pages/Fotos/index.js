import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import * as actions from '../../store/modules/auth/actions';
import axios from '../../services/axios';
import history from '../../services/history';

import Loading from '../../components/Loading';

import { Container, Title, Form } from './styled';

export default function Fotos({ match }) {
  const dispatch = useDispatch();

  const id = get(match, 'params.id', false);
  const [isLoading, setIsLoading] = useState(false);
  const [foto, setFoto] = useState('');

  React.useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const response = await axios.get(`/alunos/${id}`);
        const data = response.data;
        setFoto(get(data, 'Fotos[0].url', ''));
        setIsLoading(false);
      } catch (err) {
        toast.error('Erro ao obter imagem');
        history.push('/');
      }
    }
    getData();
  }, []);

  const handleChangeImg = async (e) => {
    const file = e.target.files[0];
    const fotoURL = URL.createObjectURL(file);

    setFoto(fotoURL);

    const formData = new FormData();
    formData.append('aluno_id', id);
    formData.append('image', file);

    try {
      setIsLoading(true);
      await axios.post('/images/', formData, {
        header: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Foto enviada com sucesso');
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      const { status } = get(err, 'response', '');
      toast.error('Erro ao enviar a foto');

      if (status === 401) dispatch(actions.loginFailure());
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>Fotos</Title>
      <Form>
        <label htmlFor="photo">
          {foto ? (
            <div className="container-img">
              <img src={foto} alt="Foto" crossOrigin="" />
            </div>
          ) : (
            <span>Selecionar foto</span>
          )}
          <input type="file" id="photo" onChange={handleChangeImg} />
        </label>
      </Form>
    </Container>
  );
}

Fotos.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};
