import React from 'react';
import { FaHome, FaUserAlt, FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Wrapper, { Nav } from './styled';

export default function Header() {
  const iconSize = 17;

  return (
    <Wrapper>
      <h1>Logo</h1>
      <Nav>
        <Link to="/">
          <FaHome size={iconSize} />
          <span>Alunos</span>
        </Link>
        <Link to="/register">
          <FaUserAlt size={iconSize} />
          <span>Registrar-se</span>
        </Link>
        <Link to="/login">
          <FaSignInAlt size={iconSize} />
          <span>Login</span>
        </Link>
      </Nav>
    </Wrapper>
  );
}
