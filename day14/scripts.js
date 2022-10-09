//Adding an item to a cart
let item = document.querySelector(".items");
let feedback = document.getElementById("feedback");
let greenFeedback = document.getElementById("green-feedback");
let blueFeedback = document.getElementById("blue-feedback");
let addItem = document.getElementById("inForm");


//Declaring my array
const myArray = ["Javascript","Python", "Java", "MySql", "C#", "Ruby"];

document.addEventListener('DOMContentLoaded', populateItems);

function populateItems() {
  let array = getItemsFromLocalStorage();

  array.forEach(element => {
    createElement(element.value);
  });
}

addItem.addEventListener("submit", (e) => {
  e.preventDefault();
  let input = document.getElementById("item");
  if (input.value == ""){
    feedback.style.display = "block";
    setTimeout (closeError,2000);

    function closeError(){
      feedback.style.display = "none";
    }
  }else if(!myArray.includes(input.value)){
    blueFeedback.style.display = "block";
    setTimeout(closeError, 2000);

    function closeError() {
      blueFeedback.style.display = "none";
    }
  }else{
    greenFeedback.style.display = "block"
    setTimeout(closeError,2000);
    
    createElement(input.value);

    let objValue = { value: input.value };
    addToLocalStorage(objValue);

    input.value = '';

    function closeError() {
      greenFeedback.style.display = "none";
    }
  }
  
})

//Deleting one item
let items = document.querySelector(".items");
//Handling one item
items.addEventListener("click", (e) =>{
  if(e.target.classList.contains("fa-trash")){
    var newText = e.target.previousElementSibling.textContent;
    
    removeFromLocalStorage(newText);
    e.target.parentElement.remove();
  }
});

//Clearing the whole items
let clearAll = document.getElementById("clear-all");
clearAll.addEventListener("click", () =>{
  items.innerHTML = "";
  clearLocalStorage();
});

// create item on UI
function createElement(value) {
  let html = `<div class="d-flex justify-content-between form-control border border-dark my-3 py-2 align-items-center">
              <p class="h6">${value}</p>
              <i class="fa fa-trash" aria-hidden="true" style="color: #be1010;"></i>
            </div>`
  item.insertAdjacentHTML("beforeend", html)
}

//Local Storage
/** things to note:
 * only strings can be saved in localStorage.
 * to place an item in the localStorage, a key and a value are to be provided. both are to be string values.
 * to place an object or array into the localStorage, it has to be converted into a string first.
 * to convert an object or array into a string, you make use of "JSON.stringify()" javascript in-built method
 * localStorage values persist in the browser.
 * 
 * to get an item from the localStorage, you make use of ".getItem" method.
 * to convert an object or array that was stored in the localStorage as a string back to its original form, -
 * you make use of the "JSON.parse()" javascript in-built method.
 * 
 * to remove a specific item from the localStorage, you use the ".removeItem()" method.
 * the removeItem method takes in one arguement which is the key of the value to be removed as a string.
 * 
 * to remove everything from localStorage, the ".clear()" method is used.
 */

// items = [
//   {name: 'name'},
//   {name: 'you'},
//   {name: 'me'},
//   { name: 'they' }
// ];

// item = {name: 'they'};

function getItemsFromLocalStorage() {
  // getItem
  let items = [];

  if (localStorage.getItem("items")) {
    items = JSON.parse(localStorage.getItem("items"));
  }

  return items;
}

function addToLocalStorage(item) {
  // setItem
  let arr = getItemsFromLocalStorage();
  arr.push(item);
  console.log(arr);

  localStorage.setItem('items', JSON.stringify(arr));
}

function removeFromLocalStorage(item) {
  let arr = getItemsFromLocalStorage();

  arr.forEach((element, i) => {
    if (element.value === item) {
      arr.splice(i, 1);
    }
  });

  localStorage.setItem('items', JSON.stringify(arr));
}

function clearLocalStorage() {
  // clear
  localStorage.clear();
}

