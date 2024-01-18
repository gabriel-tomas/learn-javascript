import React, { Component } from 'react';
import './Main.css';

// Form
// eslint-disable-next-line
import { FaPlus } from 'react-icons/fa';

// Tarefas
// eslint-disable-next-line
import { FaEdit, FaWindowClose } from 'react-icons/fa';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let { novaTarefa } = this.state;
    const { tarefas, index } = this.state;

    novaTarefa = novaTarefa.trim();

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

        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input onChange={this.handleChange} className="input" type="text" value={novaTarefa} />
          <button className="btn-submit" type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa, index) => (
            <li key={tarefa}>
              {tarefa}
              <div>
                <button onClick={(e) => this.handleEditTarefa(e, index)} type="button" className="edit-tarefa">
                  <FaEdit />
                </button>
                <button onClick={(e) => this.handleDeleteTarefa(e, index)} type="button" className="delete-tarefa">
                  <FaWindowClose />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
