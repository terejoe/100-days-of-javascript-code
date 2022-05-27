class Card {
  constructor(title,price) {
    this.title = title;
    this.price = price;
  }
}

//Budget
let budgetInput = document.getElementById("budget-input");
let budgetAmt = document.getElementById("budget-amount");

let budgetFeedback = document.querySelector(".budget-feedback");
let budgetSubmit = document.getElementById("budget-submit");

budgetSubmit.addEventListener("click", (e) =>{
  e.preventDefault();
  if(budgetInput.value == ""){
    budgetFeedback.style.display = "block";

    setTimeout(() =>{                                           
      budgetFeedback.style.display = "none";
    },2000)
  }else{
    budgetAmt.textContent = budgetInput.value;
    balanceAmt.textContent = budgetInput.value;
  }
  budgetInput.value = "";
  // console.log(budgetAmt.textContent);
})


//The expenses and balance money in dollars
let expenseAmt = document.getElementById("expense-amount");
let balanceAmt = document.getElementById("balance-amount");

//Expense Title and Amount
let expenseTitle = document.getElementById("expense-input");
let expenseInput = document.getElementById("amount-input");

let expenseFeedback = document.querySelector(".expense-feedback")
let expenseSubmit = document.getElementById("expense-submit");

expenseSubmit.addEventListener("click",(e) =>{
  e.preventDefault();
  if (expenseTitle.value == "" || expenseInput.value == "") {
    expenseFeedback.style.display = "block";

    setTimeout(() =>{                                           
      expenseFeedback.style.display = "none";  
    },2000)
  } else {
    // console.log(balanceAmt);
    
    totalExp = parseInt(expenseInput.value) + parseInt(expenseAmt.textContent); 
    // console.log(totalExp);
    expenseAmt.textContent = totalExp;

    let balance = balanceAmt.textContent - expenseInput.value;
    balanceAmt.textContent = balance;
    
    let titleInput = expenseTitle.value;
    let priceInput = expenseInput.value;

    const card = new Card(titleInput, priceInput)
    
    showItem(card);
  }
  expenseTitle.value = "";
  expenseInput.value = "";
}) 

function showItem(card){
  let newElement = document.createElement("div");
  newElement.classList.add("expense-item", "d-flex", "justify-content-between", "align-items-baseline");
  newElement.innerHTML = `<h6 class="expense-title mb-0 text-uppercase list-item">${card.title}</h6>
             <h5 class="expense-amount mb-0 list-item">${card.price}</h5>
             <div class="expense-icons list-item">
              <a href="#" class="edit-icon mx-2">
               <i class="fas fa-edit"></i>
              </a>
              <a href="#" class="delete-icon">
               <i class="fas fa-trash"></i>
              </a>
             </div>`
  document.querySelector("#exp").appendChild(newElement);
}

//Deleting and editing part
let expense = document.getElementById("exp");
// console.log(expense);

expense.addEventListener("click", (event)=>{
  event.preventDefault();
  // console.log(event.target);
  if (event.target.classList.contains("fa-edit")){
    event.target.parentElement.parentElement.parentElement.remove();

    itemPrice = event.target.parentElement.parentElement.previousElementSibling.textContent;
    // console.log(itemPrice);

    totalExp = totalExp - itemPrice;
    expenseAmt.textContent = totalExp;
    
    balanceAmt.textContent = parseInt(balanceAmt.textContent) + parseInt(itemPrice);

    expenseTitle.value = event.target.parentElement.parentElement.previousElementSibling.previousElementSibling.textContent;
    expenseInput.value = event.target.parentElement.parentElement.previousElementSibling.textContent;
  }

  //Deleting Part
  if (event.target.classList.contains("fa-trash")) {
    event.target.parentElement.parentElement.parentElement.remove();

    itemPrice = event.target.parentElement.parentElement.previousElementSibling.textContent;

    totalExp = totalExp - itemPrice;
    expenseAmt.textContent = totalExp;

    balanceAmt.textContent = parseInt(balanceAmt.textContent) + parseInt(itemPrice);
  }
  
})


