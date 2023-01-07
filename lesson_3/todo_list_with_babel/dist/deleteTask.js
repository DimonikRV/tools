import "core-js/modules/es.array.find.js";
import "core-js/modules/es.object.to-string.js";
import { deleteTask, getTaskList } from './gateway.js';
import { renderTasks } from './renderer.js';
export var onDeleteTask = function onDeleteTask(event) {
  var isDeleteBtn = event.target.classList.contains('list-item__delete-btn');
  if (!isDeleteBtn) return;
  getTaskList().then(function (tasklist) {
    return tasklist.find(function (task) {
      return task.id === event.target.dataset.id;
    });
  }).then(function (task) {
    return task.id;
  }).then(function (taskId) {
    return deleteTask(taskId);
  }).then(function () {
    return getTaskList();
  }).then(function () {
    return renderTasks();
  });
};