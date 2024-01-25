import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles, { Main } from './styles/GlobalStyles';
import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes />
        <GlobalStyles />
      </Main>
    </BrowserRouter>
  );
}

export default App;
