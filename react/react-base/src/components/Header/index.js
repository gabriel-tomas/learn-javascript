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
          <span>Home</span>
        </Link>
        <Link to="/asdasdas">
          <FaUserAlt size={iconSize} />
          <span>Usuário</span>
        </Link>
        <Link to="#">
          <FaSignInAlt size={iconSize} />
          <span>Logout</span>
        </Link>
      </Nav>
    </Wrapper>
  );
}
