import { deleteTask } from "./gateway";
import { renderTasks } from "./renderer";

export const onDeleteTask = (event) => {
  const isDeleteBtn = event.target.classList.contains("list-item__delete-btn");
  if (!isDeleteBtn) return;

  const taskId = event.target.dataset.id;

  deleteTask(taskId).then(() => renderTasks());
};
