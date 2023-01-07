import { createTaskList } from './gateway.js';
import { renderTasks } from './renderer.js';
export var onCreateTask = function onCreateTask() {
  var taskTitleInputElem = document.querySelector('.task-input');
  var text = taskTitleInputElem.value;
  if (!text) return;
  taskTitleInputElem.value = '';
  var newTasksList = {
    text: text,
    done: false,
    createDate: new Date().toISOString()
  };
  createTaskList(newTasksList).then(function () {
    return renderTasks();
  });
};

// 1.prepare taskList
// 2.send it to the db
// 3.read newTasks from db
// 4.rendering