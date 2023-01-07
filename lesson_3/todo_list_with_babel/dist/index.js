import { initTodoListHandlers } from "./todoList.js";
import { renderTasks } from "./renderer.js";
document.addEventListener("DOMContentLoaded", function () {
  renderTasks();
  initTodoListHandlers();
});

// Get information from server
// Rendering
// Init Hendlers