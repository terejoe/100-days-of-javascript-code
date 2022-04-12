//Gathering values to populate my list
// let itemInput = document.getElementById("itemInput").value;
let addItem = document.getElementById("itemForm");
let items = document.getElementById("items");
let clearList = document.getElementById("clear-list");

// task item class
class Task {
    constructor(task) {
        this.task = task;
    }
}

// JSON.parse(); -> convert from string to array/object
// JSON.stringify(); -> convert from array/object to string
// localStorage.removeItem('tasks');

// get saved items from the localStorage
function handleLocalStorageFetch() {
    let tasks = [];
    if(!localStorage.getItem('tasks')) {
        return tasks;
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
        return tasks;
    }
}
// Add new item to the localStorage
function handleLocalStorageAdd(task) {
    if (!localStorage.getItem('tasks')) {
        const arr = [];
        arr.push({task: task.task})
        localStorage.setItem('tasks', JSON.stringify(arr));
    } else {
        let allTasks = JSON.parse(localStorage.getItem('tasks'));
        allTasks.push({task: task.task});
        localStorage.setItem('tasks', JSON.stringify(allTasks));
    }
}

function handleLocalStorageDelete(task) {
    let arr = JSON.parse(localStorage.getItem('tasks'));

    arr.forEach((item, index) => {
        if(item.task === task) {
            arr.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(arr));
}

//Creating an array to store my list items
function displayItems() {
    const arrItems = handleLocalStorageFetch();

    arrItems.forEach((item) => {
        ourTasks(item);
    });
}

// create task item
function ourTasks(item) {
    items.insertAdjacentHTML("beforeend", `<div class="item my-3"><h5 class="item-name text-capitalize">${item.task}</h5><div class="item-icons"><a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a><a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a><a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a></div></div>`) 
}

// run when the DOM loads completely
document.addEventListener('DOMContentLoaded', displayItems);

// handle form submit
addItem.addEventListener("submit", (e) =>{
    e.preventDefault();

    let itemInput = document.getElementById("itemInput");
    //Creating a feedback to ensure input of a value
    let feedback = document.querySelector(".feedback");
    
    //Validating an input is there
    if(itemInput.value == ""){
        feedback.style.display = "block";

        setTimeout(closeError, 2000);
        function closeError(){
            feedback.style.display = "none";
        }
    }else{
        // make the new task item into an object
        let newTask = new Task(itemInput.value)
        // now create new task
        ourTasks(newTask);
        // add new task to localStorage
        handleLocalStorageAdd(newTask);

        itemInput.value = "";
    }
});

// handle delete, edit and complete functions
items.addEventListener('click', (e) => {

    // handle delete function
    if(e.target.classList.contains("fa-times-circle")) {
        let itemName = e.target.parentElement.parentElement.previousElementSibling.textContent;
        e.target.parentElement.parentElement.parentElement.remove();
        handleLocalStorageDelete(itemName);
    }

    // handle edit function
    if(e.target.classList.contains("fa-edit")) {
        // get text of the item to edit
        let itemName = e.target.parentElement.parentElement.previousElementSibling.textContent;
        // set the value of new input tag to text above
        document.querySelector('#itemInput').value = itemName;
        // delete the current task
        e.target.parentElement.parentElement.parentElement.remove();
    }

    // handle complete function
    if(e.target.classList.contains("fa-check-circle")) {
        // toggle: inserts and removes the specified item from the classList
        e.target.parentElement.parentElement.parentElement.classList.toggle('completed');
    }
});

clearList.addEventListener("click", () => {
    items.innerHTML = "";
    localStorage.removeItem('tasks');
});
