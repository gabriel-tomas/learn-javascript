import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import history from './services/history';
import GlobalStyles, { Main } from './styles/GlobalStyles';
import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Main>
        <Routes />
        <GlobalStyles />
      </Main>
      <ToastContainer autoClose={2500} className="toast-container" />
    </Router>
  );
}

export default App;
