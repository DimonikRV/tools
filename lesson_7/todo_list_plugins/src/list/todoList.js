import { onCreateTask } from "./createTask";
import { onToggleTask } from "./updateTask";
import { onDeleteTask } from "./deleteTask";

export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector(".create-task-btn");
  createBtnElem.addEventListener("click", onCreateTask);
  const todoListElement = document.querySelector(".list");
  todoListElement.addEventListener("click", onToggleTask);
  todoListElement.addEventListener("click", onDeleteTask);
};
