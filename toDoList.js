'use strict';
const toDoForm = document.querySelector('.todo-form');
const toDoInput = document.querySelector('.todo-input');
const toDoItemsList = document.querySelector('.todo-items');

let todos = [];
toDoForm.addEventListener('submit', function (event) {
  event.preventDefault();
  addToDo(toDoInput.value);
});

function addToDo(item) {
  if (item !== '') {
    const todo = {
      id: Date.now(),
      name: item,
      completed: false,
    };
    todos.push(todo);
    addToLocalStorage(todos);

    toDoInput.value = '';
  }
}

function renderTodos(todos) {
  toDoItemsList.innerHTML = '';
  todos.forEach(function (item) {
    const checked = item.completed ? 'checked' : null;
    const li = document.createElement('li');
    li.setAttribute('class', 'item');
    li.setAttribute('data-key', item.id);

    if (item.completed === true) {
      li.classList.add('checked');
    }
    li.innerHTML = `<input type='checkbox' class='checkbox' ${checked} > ${item.name}
  <button  class='delete-button'>X</button>`;
    toDoItemsList.append(li);
  });
}
// console.log(Date.now());

// To prevent the vanishing of the list on reload, we will be storing the values in the local storage.

function addToLocalStorage(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos(todos);
}

function getFromLocalStorage() {
  const reference = localStorage.getItem('todos');
  if (reference) {
    todos = JSON.parse(reference);
    renderTodos(todos);
  }
}

function toggle(id) {
  todos.forEach(function (item) {
    if (item.id == id) {
      item.completed = !item.completed;
    }
  });
  addToLocalStorage(todos);
}

function deleteTodo(id) {
  todos = todos.filter(function (item) {
    return item.id != id;
  });
  addToLocalStorage(todos);
}
getFromLocalStorage();

toDoItemsList.addEventListener('click', function (event) {
  if (event.target.type === 'checkbox') {
    toggle(event.target.parentElement.getAttribute('data-key'));
  }

  if (event.target.classList.contains('delete-button')) {
    deleteTodo(event.target.parentElement.getAttribute('data-key'));
  }
});
console.log('Aakash');
// const a = 0;
// const b = 0;

const addition = function (a, b) {
  console.log(a + b);
};
addition(7, 9);
