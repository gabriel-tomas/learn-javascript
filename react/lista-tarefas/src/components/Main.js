import React, { Component } from 'react';
import './Main.css';
import Form from './Form';
import Tarefas from './Tarefas';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1,
  };

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));

    if (tarefas) {
      this.setState({ tarefas });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;

    if (tarefas === prevState.tarefas) return;

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let { novaTarefa } = this.state;
    const { tarefas, index } = this.state;

    novaTarefa = novaTarefa.trim();

    if (!novaTarefa) return;

    if (tarefas.indexOf(novaTarefa) !== -1) return;

    const newTarefas = [...tarefas];

    if (index === -1) {
      this.setState({
        tarefas: [...newTarefas, novaTarefa],
        novaTarefa: '',
      });
      return;
    }
    newTarefas[index] = novaTarefa;

    this.setState({
      tarefas: [...newTarefas],
      index: -1,
    });
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  handleDeleteTarefa = (e, index) => {
    const { tarefas } = this.state;

    const newTarefas = [...tarefas];

    newTarefas.splice(index, 1);

    this.setState({
      tarefas: [...newTarefas],
    });
  };

  handleEditTarefa = (e, index) => {
    const { tarefas } = this.state;

    this.setState({ novaTarefa: tarefas[index], index });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          novaTarefa={novaTarefa}
        />

        <Tarefas
          tarefas={tarefas}
          handleEditTarefa={this.handleEditTarefa}
          handleDeleteTarefa={this.handleDeleteTarefa}
        />
      </div>
    );
  }
}
