import { onCreateTask } from './createTask.js';
import { onToggleTask } from './updateTask.js';
import { onDeleteTask } from './deleteTask.js';
export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);
  const todoListElement = document.querySelector('.list');
  todoListElement.addEventListener('click', onToggleTask);
  todoListElement.addEventListener('click', onDeleteTask);
};