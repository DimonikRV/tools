import { getTaskList, updateTask } from './gateway.js';
import { renderTasks } from './renderer.js';
export const onToggleTask = event => {
  const isCheckbox = event.target.classList.contains('list-item__checkbox');
  if (!isCheckbox) return;
  const taskId = event.target.dataset.id;
  const {
    text,
    createDate
  } = getTaskList().then(tasklist => tasklist.find(task => task.id === event.target.dataset.id));
  const done = event.target.checked;
  const updatedTask = {
    text,
    createDate,
    done,
    finishDate: done ? new Date().toISOString() : null
  };
  updateTask(updatedTask, taskId).then(() => getTaskList()).then(() => renderTasks());
};