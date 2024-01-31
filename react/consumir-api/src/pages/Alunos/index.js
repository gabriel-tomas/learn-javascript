import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaEdit, FaWindowClose } from 'react-icons/fa';

import axios from '../../services/axios';
import { ContainerAlunos, AlunoContainer } from './styled';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);

  React.useEffect(() => {
    const getAlunos = async () => {
      const res = await axios.get('/alunos');
      setAlunos(res.data.alunos);
    };
    getAlunos();
  }, []);

  return (
    <div>
      <h1>Alunos</h1>
      <ContainerAlunos>
        {alunos.length > 0
          ? alunos.map((aluno) => (
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
                  <Link to={`/aluno/${aluno.id}/delete`}>
                    <FaWindowClose />
                  </Link>
                </div>
              </AlunoContainer>
            ))
          : null}
      </ContainerAlunos>
    </div>
  );
}
