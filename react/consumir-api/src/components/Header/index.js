import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaHome, FaUserAlt, FaSignInAlt, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';

import Wrapper, { Nav } from './styled';

export default function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const iconSize = 17;

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    history.push('/');
  };

  return (
    <Wrapper>
      <h1>Logo</h1>
      <Nav>
        <Link to="/">
          <FaHome size={iconSize} />
          <span>Alunos</span>
        </Link>
        {!isLoggedIn ? (
          <>
            <Link to="/register">
              <FaUserAlt size={iconSize} />
              <span>Registrar-se</span>
            </Link>
            <Link to="/login">
              <FaSignInAlt size={iconSize} />
              <span>Login</span>
            </Link>
          </>
        ) : (
          <>
            <Link to="/register">
              <FaUserAlt size={iconSize} />
              <span>Editar usuário</span>
            </Link>
            <Link onClick={handleLogout} to="#">
              <FaUserCircle size={iconSize} />
              <span>Sair</span>
            </Link>
          </>
        )}
      </Nav>
    </Wrapper>
  );
}
