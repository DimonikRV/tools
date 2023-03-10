import "core-js/modules/es.array.sort.js";
import "core-js/modules/web.dom-collections.iterator.js";
import { getTaskList } from './gateway.js';
const listElem = document.querySelector('.list');
const compareTasks = (a, b) => {
  if (a.done - b.done !== 0) {
    return a.done - b.done;
  }
  if (a.done) {
    return new Date(b.finishDate) - new Date(a.finishDate);
  }
  return new Date(b.createDate) - new Date(a.createDate);
};
const createCheckBox = _ref => {
  let {
    done,
    id
  } = _ref;
  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.dataset.id = id;
  checkboxElem.checked = done;
  checkboxElem.classList.add('list-item__checkbox');
  return checkboxElem;
};
const createListItem = _ref2 => {
  let {
    text,
    done,
    id
  } = _ref2;
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list-item', 'list__list-item');
  const checkboxElem = createCheckBox({
    done,
    id
  });
  if (done) {
    listItemElem.classList.add('list-item_done');
  }
  const textElem = document.createElement('span');
  textElem.classList.add('list-item__text');
  textElem.textContent = text;
  const deleteBtnElem = document.createElement('button');
  deleteBtnElem.classList.add('list-item__delete-btn');
  deleteBtnElem.dataset.id = id;
  listItemElem.append(checkboxElem, textElem, deleteBtnElem);
  return listItemElem;
};
export const renderTasks = () => {
  listElem.innerHTML = '';
  getTaskList().then(tasksList => tasksList.sort(compareTasks)).then(tasksList => tasksList.map(createListItem)).then(tasksElems => listElem.append(...tasksElems));
};