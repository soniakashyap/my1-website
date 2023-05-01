const todoList = [{name:'make dinner',dueDate: '30-04-2023'},
{name:'wash dishes',dueDate: '30-04-2023'}];
renderTodoList();
function renderTodoList(){


  let todoListsHTML ='';
  todoList.forEach((todoObject, index) =>{
    
    const {name,dueDate} = todoObject;
    const html = 
    `<div> ${name} </div>
    <div>${dueDate}</div>
    <button class="delete-todo-button js-delete-todo-button">Delete</button>
    `;
    todoListsHTML += html;
  
  })
  
  
  document.querySelector('.js-todo-list').innerHTML = todoListsHTML;

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click',() => {
        todoList.splice(index,1);
        renderTodoList();
      })
    } ) ;

    

}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
})

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
