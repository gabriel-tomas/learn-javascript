import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropType from 'prop-types';
// eslint-disable-next-line
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import './Tarefas.css';

export default function Tarefas({ tarefas, handleEditTarefa, handleDeleteTarefa }) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <div>
            <button onClick={(e) => handleEditTarefa(e, index)} type="button" className="edit-tarefa">
              <FaEdit />
            </button>
            <button onClick={(e) => handleDeleteTarefa(e, index)} type="button" className="delete-tarefa">
              <FaWindowClose />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

Tarefas.propTypes = {
  tarefas: PropType.array.isRequired,
  handleEditTarefa: PropType.func.isRequired,
  handleDeleteTarefa: PropType.func.isRequired,
};
