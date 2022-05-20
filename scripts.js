class Card {
  constructor(question,answer) {
    this.question = question;
    this.answer = answer;
  }
}

//DOM Populate
document.addEventListener("DOMContentLoaded", populateItems);
function populateItems(){
  let array = getItemsFromLocalStorage();
  array.forEach(data =>{
    setupCard(data);
  })
}

//Opening the flashcard
let showBtn = document.getElementById("show-btn");
let showCard = document.querySelector(".question-card");

showBtn.addEventListener("click", () =>{
  showCard.style.display = "block";
})

//Closing the flashcard
let closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", () =>{
  showCard.style.display = "none";
})

//Displaying the feedback
let submitBtn = document.querySelector(".submitBtn");

submitBtn.addEventListener("click", (e)=>{
  let feedback = document.querySelector(".feedback");
  let questionInput = document.getElementById("question-input");
  let answerInput = document.getElementById("answer-input");
  
  e.preventDefault()
  if(answerInput.value == "" || questionInput.value == ""){
    feedback.style.display = "block";
  
    setTimeout(() =>{
      feedback.style.display = "none";
    }, 2000)
  }else{
    let questionValue = questionInput.value;
    let answerValue = answerInput.value;

    const card = new Card(questionValue, answerValue);

    setupCard(card);
    addToLocalStorage(card)
  }
  // console.log(questionInput);
  // console.log(answerInput);
  questionInput.value = "";
  answerInput.value = "";
})

function setupCard(card){
  let newElement = document.createElement("div");
  newElement.classList.add("col-md-4");
  newElement.innerHTML = `<div class="card card-body flashcard my-3">
         <h4 class="text-capitalize">${card.question}</h4>
         <a href="#" class="text-capitalize my-3 show-answer">show/hide answer</a>
         <h5 class="answer mb-3">${card.answer}</h5>
         <div class="flashcard-btn d-flex justify-content-between">
          <a href="#" id="edit-flashcard" class=" btn my-1 edit-flashcard text-uppercase" data-id="">edit</a>
          <a href="#" id="delete-flashcard" class=" btn my-1 delete-flashcard text-uppercase">delete</a>
         </div>`
  document.querySelector("#questions-list").appendChild(newElement);
}

//Displaying and hiding answer
let showLink = document.querySelector("#questions-list");

showLink.addEventListener("click", (event) =>{
  event.preventDefault();
  let questionInput = document.getElementById("question-input");
  let answerInput = document.getElementById("answer-input");
  // let showAnswer = document.querySelector(".answer");
  // console.log(event.target);
  if (event.target.classList.contains("show-answer")) {
    if (event.target.nextElementSibling.classList.contains('showItem')) {
      event.target.nextElementSibling.classList.remove("showItem")
    } else {
      event.target.nextElementSibling.classList.add("showItem")
    }
  }

  if (event.target.classList.contains("delete-flashcard")) {
    event.target.parentElement.parentElement.parentElement.remove();
    let item = event.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent
    removeFromLocalStorage(item);
  }

  if (event.target.classList.contains("edit-flashcard")) {
    event.target.parentElement.parentElement.parentElement.remove();
    let editText = event.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
    questionInput.value = editText;
    answerInput.value = "";
    let item = event.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent
    removeFromLocalStorage(item);
  }
})

//Local storage

//Getting items from the local storage
function getItemsFromLocalStorage(){
  let card = [];
  let cardItems = localStorage.getItem("card");
  if (cardItems) {
    card = JSON.parse(localStorage.getItem("card"))
  }
  return card;
}

//Adding the items to the localstorage
function addToLocalStorage(item) {
  let arr = getItemsFromLocalStorage()
  arr.push(item);
  localStorage.setItem("card", JSON.stringify(arr));
}

//Removing an item
function removeFromLocalStorage(item){
  let arr = getItemsFromLocalStorage();
  arr.forEach((element, i) => {
    if (element.question === item) {
      arr.splice(i,1)
    }
  })
  localStorage.setItem("card", JSON.stringify(arr))
}
