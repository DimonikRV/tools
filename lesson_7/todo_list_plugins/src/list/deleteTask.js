import { deleteTask, getTaskList } from "./gateway";
import { renderTasks } from "./renderer";

export const onDeleteTask = (event) => {
  const isDeleteBtn = event.target.classList.contains("list-item__delete-btn");
  if (!isDeleteBtn) return;

  getTaskList()
    .then((tasklist) =>
      tasklist.find((task) => task.id === event.target.dataset.id)
    )
    .then((task) => task.id)
    .then((taskId) => deleteTask(taskId))
    .then(() => getTaskList())
    .then(() => renderTasks());
};
