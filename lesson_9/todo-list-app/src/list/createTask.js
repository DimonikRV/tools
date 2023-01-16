import { createTaskList } from './gateway';
import { renderTasks } from './renderer';

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');
  const text = taskTitleInputElem.value;
  if (!text) return;
  taskTitleInputElem.value = '';

  const newTasksList = {
    text,
    done: false,
    createDate: new Date().toISOString(),
  };
  createTaskList(newTasksList).then(() => renderTasks());
};

// 1.prepare taskList
// 2.send it to the db
// 3.read newTasks from db
// 4.rendering
