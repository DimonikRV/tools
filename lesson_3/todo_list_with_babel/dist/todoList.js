import { onCreateTask } from './createTask.js';
import { onToggleTask } from './updateTask.js';
import { onDeleteTask } from './deleteTask.js';
export var initTodoListHandlers = function initTodoListHandlers() {
  var createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);
  var todoListElement = document.querySelector('.list');
  todoListElement.addEventListener('click', onToggleTask);
  todoListElement.addEventListener('click', onDeleteTask);
};