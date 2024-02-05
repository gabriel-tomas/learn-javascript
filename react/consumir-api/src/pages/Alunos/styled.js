import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../config/colors';

export const ContainerAlunos = styled.div`
  margin-top: 2rem;

  .container-aluno + .container-aluno {
    border-top: 1px solid #eeeeee26;
  }
`;

export const AlunoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  .simple-info {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .container-img, .container-img > img {
    border-radius: 50%;
  }

  .container-img {
    width: 50px;
    height: 50px;
  }

  .container-img > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .edit-aluno > a + a  {
    margin-left: .5rem;
  }

  .cancel-aluno-btn {
    color: #bababa;
  }

  .delete-aluno-btn {
    color: #c21717;
  }
`;

export const ContainerNewAluno = styled.div`
  display: flex;
  justify-content: right;
  gap: .3rem;
  align-items: center;
  padding-top: 2rem;
  padding-right: 1rem;
`;

export const NewAluno = styled(Link)`
  display: block;
  color: ${colors.text};
`;
