document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const todoContainer = document.querySelector("#tasks");
  const newTask = document.querySelector("#new-task-description");
  const form = document.querySelector("#create-task-form");

  const isValidInput = (input) => {
    input = input.trim();
    return input ? input : false;
  };

  const addTask = (e) => {
    e.preventDefault();
    getTask();
  };

  const getTask = () => {
    const task = newTask.value;
    if (isValidInput(task)) {
      createTask(task);
    }
  };

  const createTask = (taskContent) => {
    const task = document.createElement("li");
    task.textContent = taskContent;
    todoContainer.appendChild(task);
    form.reset();
  };

  form.addEventListener("submit", addTask);
  
});
