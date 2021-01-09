const btnAddTodo = document.querySelector("[data-js=add-todo");
const inputTodo = document.querySelector("[data-js=todo-content");
const containerTodos = document.querySelector("[data-js=container-todos");

const todos = JSON.parse(localStorage.getItem("todo-content")) || []; 

const putTodoInTheListOfTodos = () => {
  const todo = inputTodo.value;
  if(todo) todos.push(todo);

  const template = todos.map(todo => `
    <div class="todo-box">
    <span data-js="btn-remove" class="btn-close">X</span>
    <p>${todo}</p>
    </div>
  `).join("");
  
  containerTodos.innerHTML = template;
  setTodoInTheStorage();
  removeTodoInTheListOfTodos();
};

const removeTodoInTheListOfTodos = () => {
  const btnsRemoveTodo = document.querySelectorAll("[data-js=btn-remove");

  btnsRemoveTodo.forEach((btn, i) => {
    btn.addEventListener("click", e => {
      e.target.parentNode.remove();
      removeTodoInTheStorage(i);
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

btnAddTodo.addEventListener("click", () => {
  putTodoInTheListOfTodos();
});

putTodoInTheListOfTodos();