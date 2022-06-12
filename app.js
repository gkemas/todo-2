const btn = document.getElementById('todo-button');
const todoUl =document.getElementById('todo-ul');
const todoInput =document.getElementById('todo-input');


btn.addEventListener("click",()=>{
    if(!todoInput.value){
        alert("Please enter your todo");

    }else{
        todoUl.innerHTML=
        `<li>
        <i class="fa fa-check"></i>
         <p>${todoInput.value}</p>
         <i class="fa fa-trash"></i>
       </li>`;
       todoInput.value ='';
    }
})
todoInput.addEventListener("keydown" ,(e)=>{
    if(e.key ==='Enter'){
        btn.click()
    }
})

todoUl.addEventListener('click', ()=>{
    if(e.target.classList.contains('trash')){
        e.target.parent.remove();
    }
    if(e.target.classList.contains('fa-check')){
         if(e.target.classList.contains('checked')){
            e.target.parentElement.classList.remove('checked');

         }else{
            e.target.parentElement.classList.add('checked');
         }
      
    }
});