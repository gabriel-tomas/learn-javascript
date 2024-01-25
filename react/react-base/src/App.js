import React from 'react';

import GlobalStyles, { Main } from './styles/GlobalStyles';
import Header from './components/Header';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Login />
        <GlobalStyles />
      </Main>
    </>
  );
}

export default App;
