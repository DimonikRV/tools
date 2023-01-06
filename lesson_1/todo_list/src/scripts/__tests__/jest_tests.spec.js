import { onCreateTask } from "./createTask.js";
import { renderTasks } from "./renderer";
it("should create task", () => {
  onCreateTask();

  expect(renderTasks()).toEqual();
});
