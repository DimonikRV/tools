import { onCreateTask } from "./createTask.js";
import { renderTasks } from "./renderer";
it("should create task", function () {
  onCreateTask();
  expect(renderTasks()).toEqual();
});