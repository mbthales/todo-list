const btnAddTodo = document.querySelector("[data-js=add-todo");
const inputTodo = document.querySelector("[data-js=todo-content");
const containerTodo = document.querySelector("[data-js=container-todo");

const putTodoInTheListOfTodos = () => {
  const todoContent = inputTodo.value;
  
  if(todoContent){
    const template = `<p>${todoContent}</p>`;
    containerTodo.innerHTML += template;
  };
};

btnAddTodo.addEventListener("click", () => {
  putTodoInTheListOfTodos();
});