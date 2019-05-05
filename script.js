var btn = document.querySelector('.header__button');
var input = document.querySelector('.header__input');
btn.addEventListener('click',addTask);
input.addEventListener('keypress',addTaskByPressEnter);

function addTaskByPressEnter(event){
    if(event.keyCode == 13){
    var ul = document.querySelector('.tasks');
    var li = document.createElement('li');
    li.className = 'tasks__li';
    li.classList.add('tasks__li-border');
    li.style.listStyleType = 'none';
    li.innerHTML = input.value;
    ul.appendChild(li);
    li.addEventListener('click',markTask);
    var span = document.createElement('span');
    span.className = 'tasks__close';
    var text = document.createTextNode('\u00D7');
    span.appendChild(text);
    li.appendChild(span);
    span.addEventListener('click',deleteTask);
    }
}

function addTask(){
    var ul = document.querySelector('.tasks');
    var li = document.createElement('li');
    li.className = 'tasks__li';
    li.classList.add('tasks__li-border');
    li.style.listStyleType = 'none';
    li.innerHTML = input.value;
    ul.appendChild(li);
    li.addEventListener('click',markTask);
    var span = document.createElement('span');
    span.className = 'tasks__close';
    var text = document.createTextNode('\u00D7');
    span.appendChild(text);
    li.appendChild(span);
    span.addEventListener('click',deleteTask);
    

}

function markTask(){
    this.classList.toggle('tasks__li-checked');
}

function deleteTask(){
    var parent = this.parentElement;
    parent.style.display = 'none';
}