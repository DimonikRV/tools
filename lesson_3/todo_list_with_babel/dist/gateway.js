import "core-js/modules/es.promise.js";
const urlServ = 'https://63a6da56f8f3f6d4ab138405.mockapi.io/api/v1/tasks';
export const getTaskList = () => {
  return fetch(urlServ).then(response => response.json());
};
export const createTaskList = newTasksList => {
  return fetch("".concat(urlServ), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset = utf-8'
    },
    body: JSON.stringify(newTasksList)
  });
};
export const updateTask = (UpdatedTaskData, taskId) => {
  return fetch("".concat(urlServ, "/").concat(taskId), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset = utf-8'
    },
    body: JSON.stringify(UpdatedTaskData)
  });
};
export const deleteTask = taskId => {
  return fetch("".concat(urlServ, "/").concat(taskId), {
    method: 'DELETE'
  });
};