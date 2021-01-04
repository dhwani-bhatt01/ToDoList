let addToDoButton = documentb.getElementById('addToDo');
let todoContainer = documentb.getElementById('todoContainer');
let inputField = documentb.getElementById('inputField');

addToDoButton.addEventListener('click',function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph.styling');
    paragraph.innerText = inputField.value;
    todoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick',function(){
        todoContainer.removeChild(paragraph);
    })
})