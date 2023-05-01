const todoList = [{name:'make dinner',dueDate: '30-04-2023'},
{name:'wash dishes',dueDate: '30-04-2023'}];
renderTodoList();
function renderTodoList(){


  let todoListsHTML ='';
  for(let i =0; i<todoList.length; i++)
  {
    const todoObject =todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const {name,dueDate} = todoObject;
    const html = 
    `<div> ${name} </div>
    <div>${dueDate}</div>
    <button onclick="
      todoList.splice(${i},1);
      renderTodoList();
    " class="delete-todo-button">Delete</button>
    `;
    todoListsHTML += html;
  }
  
  document.querySelector('.js-todo-list').innerHTML = todoListsHTML;
}
function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const dateInputElement =document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  const name =inputElement.value;
  console.log(name);
  todoList.push({
  //name:name,
  //dueDate:dueDate,
  name,
  dueDate});
 
  inputElement.value ='';
  renderTodoList();
}
