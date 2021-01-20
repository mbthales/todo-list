const btnAddTodo = document.querySelector("[data-js=btn-add-todo");
const inputTodoColor = document.querySelector("[data-js=input-todo-color");
const inputTodoContent = document.querySelector("[data-js=input-todo-content");
const containerTodos = document.querySelector("[data-js=container-todos");

const todos = JSON.parse(localStorage.getItem("todo-content")) || []; 

const putTodoInTheListOfTodos = () => {
  const todoContent = inputTodoContent.value;
  const todoColor = inputTodoColor.value;

  if(todoContent) todos.push({content: todoContent, color: todoColor});

  const template = todos.map(({content, color}) => `
    <ul class="todo-box ${color}">
      <span data-js="btn-remove" class="btn-close">X</span>
      <li>${content}</li>
    </ul>
  `).join("");
  
  containerTodos.innerHTML = template;
  setTodoInTheStorage();
  removeTodoInTheListOfTodos();
  resetInputOfTodo();
};

const removeTodoInTheListOfTodos = () => {
  const btnsRemoveTodo = document.querySelectorAll("[data-js=btn-remove");

  btnsRemoveTodo.forEach((btn, todo) => {
    btn.addEventListener("click", e => {
      e.target.parentNode.remove();
      removeTodoInTheStorage(todo);
    });
  });
};

const removeTodoInTheStorage = todo => {
  todos.splice(todo, 1);
  localStorage.setItem("todo-content", JSON.stringify(todos));
}

const setTodoInTheStorage = () => {
  localStorage.setItem("todo-content", JSON.stringify(todos));
};

const resetInputOfTodo = () => {
  inputTodoColor.selectedIndex = 0;
  inputTodoContent.value = "";
}

btnAddTodo.addEventListener("click", () => {
  putTodoInTheListOfTodos();
});

putTodoInTheListOfTodos();