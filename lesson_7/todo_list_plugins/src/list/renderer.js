import { getTaskList } from "./gateway";
import "./list.scss";

const listElem = document.querySelector(".list");

const compareTasks = (a, b) => {
  if (a.done - b.done !== 0) {
    return a.done - b.done;
  }
  if (a.done) {
    return new Date(b.finishDate) - new Date(a.finishDate);
  }
  return new Date(b.createDate) - new Date(a.createDate);
};

const createCheckBox = ({ done, id }) => {
  const checkboxElem = document.createElement("input");
  checkboxElem.setAttribute("type", "checkbox");
  checkboxElem.dataset.id = id;
  checkboxElem.checked = done;
  checkboxElem.classList.add("list-item__checkbox");
  return checkboxElem;
};

const createListItem = ({ text, done, id }) => {
  const listItemElem = document.createElement("li");
  listItemElem.classList.add("list-item", "list__list-item");
  const checkboxElem = createCheckBox({ done, id });
  if (done) {
    listItemElem.classList.add("list-item_done");
  }

  const textElem = document.createElement("span");
  textElem.classList.add("list-item__text");
  textElem.textContent = text;

  const deleteBtnElem = document.createElement("button");

  deleteBtnElem.classList.add("list-item__delete-btn");
  deleteBtnElem.dataset.id = id;
  listItemElem.append(checkboxElem, textElem, deleteBtnElem);

  return listItemElem;
};

export const renderTasks = () => {
  listElem.innerHTML = "";
  getTaskList()
    .then((tasksList) => tasksList.sort(compareTasks))
    .then((tasksList) => tasksList.map(createListItem))
    .then((tasksElems) => listElem.append(...tasksElems));
};
