const elForm = document.querySelector(".form");
const elInput = document.querySelector(".form__input");
const elList = document.querySelector(".todo-list");

const todos = [];

elList.addEventListener("click", evt => {
  if(evt.target.matches(".delete-item")){
    console.log("deleted");
  }
})



function renderTodos (arr, element){
  element.innerHTML = "";

  arr.forEach(todo => {
    const newItem = document.createElement("li");
    const newBtn = document.createElement("button");
    const inputCheck = document.createElement("input")

    newItem.textContent = todo.title;
    newBtn.textContent = "Delete";
    newBtn.classList.add("delete-item");

    inputCheck.type = "checkbox";


    newItem.appendChild(inputCheck)
    newItem.appendChild(newBtn)
    
    element.appendChild(newItem);
  })
}

elForm.addEventListener("submit", evt => {
  evt.preventDefault();

  const elInputValue = elInput.value.trim();

  const todo = {
    id:todos.length,
    title: elInputValue,
    isComplate: false,
  }


  todos.push(todo)

  renderTodos(todos, elList)
  console.log(todos)
    
    
    elInput.value = "";
})

