import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.promise.js";
var urlServ = 'https://63a6da56f8f3f6d4ab138405.mockapi.io/api/v1/tasks';
export var getTaskList = function getTaskList() {
  return fetch(urlServ).then(function (response) {
    return response.json();
  });
};
export var createTaskList = function createTaskList(newTasksList) {
  return fetch("".concat(urlServ), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset = utf-8'
    },
    body: JSON.stringify(newTasksList)
  });
};
export var updateTask = function updateTask(UpdatedTaskData, taskId) {
  return fetch("".concat(urlServ, "/").concat(taskId), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset = utf-8'
    },
    body: JSON.stringify(UpdatedTaskData)
  });
};
export var deleteTask = function deleteTask(taskId) {
  return fetch("".concat(urlServ, "/").concat(taskId), {
    method: 'DELETE'
  });
};