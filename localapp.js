const btn = document.getElementById('todo-button');
const todoInput = document.getElementById('todo-input');
const todoUl = document.getElementById('todo-ul');

let todos =JSON.parse(localStorage.getItem('todos')) || [];

renderSavedTodos();

function renderSavedTodos(){
    todos.forEach((todo)=>{
        createListElement(todo)
    })
}

function createListElement(todo){
    const {id, content, isDone} =todo;
    todoUl.innerHTML +=`
    <li id=${id} class=${isDone ? 'checked' : ''} >
     <i class="fa fa-check"></i>
     <p>${content}</p>
     <i class="fa fa-trash"></i>
   </li>`;
}
window.onload = function () {
    todoInput.focus();
  };

btn.addEventListener('click', ()=>{
    if(!todoInput.value){
        alert('please enter your todo');

    }else{
        const todoObject ={
            id: new Date().getTime(),
            isDone : false,
            content : todoInput.value,
        }
        todos.push(todoObject);
        
    }
})