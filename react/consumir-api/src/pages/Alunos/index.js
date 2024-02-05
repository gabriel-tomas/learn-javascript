import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaUser,
  FaEdit,
  FaWindowClose,
  FaBan,
  FaBackspace,
} from 'react-icons/fa';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import axios from '../../services/axios';
import { ContainerAlunos, AlunoContainer } from './styled';
import { Title } from '../../styles/TitleCenter';

import Loading from '../../components/Loading';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    setIsLoading(true);
    const getAlunos = async () => {
      const res = await axios.get('/alunos');
      setAlunos(res.data.alunos);
      setIsLoading(false);
    };
    getAlunos();
  }, []);

  const handleDeleteAluno = async (alunoId, e, index) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await axios.delete(`/alunos/${alunoId}`);
      const novosAlunos = [...alunos];
      novosAlunos.splice(index, 1);
      setAlunos(novosAlunos);
      setIsLoading(false);
    } catch (err) {
      const status = get(err, 'response.status', []);

      if (status === 401) {
        toast.error('Você precisa fazer login');
      } else {
        toast.error('Ocorreu um erro ao tentar excluir o aluno');
      }
      setIsLoading(false);
    }
  };

  const handleConfirmDelete = (e, cancel) => {
    e.preventDefault();
    if (cancel) {
      const cancelBtn = e.currentTarget;
      console.log(cancelBtn);
      cancelBtn.previousSibling.style.display = 'inline';
      cancelBtn.style.display = 'none';
      cancelBtn.nextSibling.style.display = 'none';
      return;
    }

    e.currentTarget.style.display = 'none';
    const cancelBtn = e.currentTarget.nextSibling;
    const deleteBtn = cancelBtn.nextSibling;
    cancelBtn.style.display = 'inline';
    deleteBtn.style.display = 'inline';
  };

  return (
    <div>
      <Loading isLoading={isLoading} />
      <Title>Alunos</Title>
      <ContainerAlunos>
        {alunos.length > 0
          ? alunos.map((aluno, index) => (
              <AlunoContainer
                className="container-aluno"
                key={String(aluno.id)}
              >
                <div className="simple-info">
                  <div className="container-img">
                    {aluno.Fotos[0] ? (
                      <img
                        crossOrigin=""
                        src={aluno.Fotos[0].url}
                        alt={aluno.nome}
                      />
                    ) : (
                      <FaUser className="container-img" />
                    )}
                  </div>
                  <span>{aluno.nome}</span>
                </div>
                <div className="more-info">
                  <span>{aluno.email}</span>
                </div>
                <div className="edit-aluno">
                  <Link to={`/aluno/${aluno.id}/edit`}>
                    <FaEdit />
                  </Link>
                  <Link onClick={handleConfirmDelete} to={'#'}>
                    <FaWindowClose />
                  </Link>
                  <Link
                    onClick={(e) => handleConfirmDelete(e, true)}
                    className="cancel-aluno-btn"
                    style={{ display: 'none' }}
                    to={'#'}
                  >
                    <FaBan />
                  </Link>
                  <Link
                    onClick={(e) => {
                      handleDeleteAluno(aluno.id, e, index);
                    }}
                    className="delete-aluno-btn"
                    style={{ display: 'none' }}
                    to={`/aluno/${aluno.id}/delete`}
                  >
                    <FaBackspace />
                  </Link>
                </div>
              </AlunoContainer>
            ))
          : null}
      </ContainerAlunos>
    </div>
  );
}
