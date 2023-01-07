import "core-js/modules/es.array.find.js";
import "core-js/modules/es.object.to-string.js";
import { getTaskList, updateTask } from './gateway.js';
import { renderTasks } from './renderer.js';
export var onToggleTask = function onToggleTask(event) {
  var isCheckbox = event.target.classList.contains('list-item__checkbox');
  if (!isCheckbox) return;
  var taskId = event.target.dataset.id;
  var _getTaskList$then = getTaskList().then(function (tasklist) {
      return tasklist.find(function (task) {
        return task.id === event.target.dataset.id;
      });
    }),
    text = _getTaskList$then.text,
    createDate = _getTaskList$then.createDate;
  var done = event.target.checked;
  var updatedTask = {
    text: text,
    createDate: createDate,
    done: done,
    finishDate: done ? new Date().toISOString() : null
  };
  updateTask(updatedTask, taskId).then(function () {
    return getTaskList();
  }).then(function () {
    return renderTasks();
  });
};