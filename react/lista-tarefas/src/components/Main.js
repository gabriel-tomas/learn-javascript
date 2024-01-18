import React, { Component } from 'react';
import './Main.css';

// Form
// eslint-disable-next-line
import { FaPlus } from 'react-icons/fa';

export default class Main extends Component {
  state = {
    novaTarefa: '',
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  render() {
    const { novaTarefa } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form onSubmit={this.handleChange} action="#" className="form">
          <input onChange={this.handleChange} className="input" type="text" value={novaTarefa} />
          <button className="btn-submit" type="submit" > {/* eslint-disable-line */}
            <FaPlus />
          </button>
        </form>
        <div className="tarefas">
          <span>{novaTarefa}</span>
        </div>
      </div>
    );
  }
}
