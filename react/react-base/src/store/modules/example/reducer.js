const initialState = {
  botaoClicado: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'BOTAO_CLICADO': {
      const newState = { ...state };
      newState.botaoClicado = newState.botaoClicado ? false : true;
      return newState;
    }

    default: {
      return state;
    }
  }
};
