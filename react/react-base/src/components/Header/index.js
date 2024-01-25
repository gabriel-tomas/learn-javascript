import React from 'react';
import { FaHome, FaUserAlt, FaSignInAlt } from 'react-icons/fa';

import Wrapper, { Nav } from './styled';

export default function Header() {
  const iconSize = 17;

  return (
    <Wrapper>
      <h1>Logo</h1>
      <Nav>
        <a href="#">
          <FaHome size={iconSize} />
          <span>Home</span>
        </a>
        <a href="#">
          <FaUserAlt size={iconSize} />
          <span>Home</span>
        </a>
        <a href="#">
          <FaSignInAlt size={iconSize} />
          <span>Home</span>
        </a>
      </Nav>
    </Wrapper>
  );
}
