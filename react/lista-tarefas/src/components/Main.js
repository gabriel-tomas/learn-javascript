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
    tarefas: [
      'Fazer café',
      'Tomar café',
      'Tomar outro copo de café',
    ],
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form onSubmit={this.handleChange} action="#" className="form">
          <input onChange={this.handleChange} className="input" type="text" value={novaTarefa} />
          <button className="btn-submit" type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa) => (
            <li key={tarefas.indexOf(tarefa)}>
              {tarefa}
              <div>
                <button type="button" className="edit-tarefa">
                  <FaEdit />
                </button>
                <button type="button" className="delete-tarefa">
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
