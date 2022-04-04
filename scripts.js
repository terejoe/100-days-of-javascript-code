//Error messages for invalid input
let feedback = document.querySelector(".feedback");

let inputBill = document.getElementById("input-bill").value;
let inputUser = document.getElementById("input-users").value;
let select = document.querySelector("select");

//Loading phase
let calculate = document.querySelector(".submitBtn");
let form = document.querySelector("form");

//Loading Icon
let loader = document.querySelector(".loader");

//Results
let resultsContainer = document.querySelector('.results');
let tipAmt= document.getElementById("tip-amount");
let totalAmt = document.getElementById("total-amount");
let personAmt = document.getElementById("person-amount");

//Generating the options
const services = [
    {
        "title":"Great-20%",
        "value": 3,
    },

    {
        "title": "Good-10%",
        "value": 2,
    },

    {
        "title": "Bad-2%",
        "value": 1,
    },

]

services.forEach((service) =>{
    let option = document.createElement("option");
    option.value = service.value;
    option.textContent = service.title;

    select.appendChild(option)

});

//Validating three of the inputs
form.addEventListener("submit", validateInputs);

function validateInputs(e){
    let inputBill = document.getElementById("input-bill").value;
    let inputUser = document.getElementById("input-users").value;

    
    let isValid = true;
    if (inputBill ==="" || inputBill < 1) {
        feedback.style.display = "block"
        feedback.innerHTML = '<p>Bill amount cannot be blank</p>';
        isValid = false;
    }
    
    if (inputUser === "" || inputUser < 1) {
        feedback.style.display = "block";
        feedback.innerHTML += '<p>Number Of Users Must Be Greater Than Zero</p>';
        isValid = false;
    }
    
    if (select.value < 1) {
        feedback.style.display = "block";
        feedback.innerHTML += '<p>You Must Select A Service</p>';
        isValid = false;
    }

    //Setting timer for two seconds before closing the errror message window

    setTimeout(closeError,2000);

    function closeError(){
        feedback.innerHTML = "";
        feedback.style.display = "none";
    }

    return isValid;
    
}



//Calculating the tipAmt, totalAmt, personAmt
function performCalcs(inputBill,inputUser,select){

    let tipAmt = document.getElementById("tip-amount");
    let totalAmt = document.getElementById("total-amount");
    let personAmt = document.getElementById("person-amount");
    
    if (select.value === 1) {
        tipPercentage = 0.2;
    } else if (select.value === 2) {
        tipPercentage = 0.1;
    } else {
        tipPercentage = 0.02;
    }


    tipAmt = Number(inputBill) * tipPercentage;
    totalAmt = Number(inputBill) +  Number(tipAmt);
    personAmt = Number(totalAmt) / Number(inputUser);

    return result = [tipAmt, totalAmt, personAmt];
   
}
// console.log(tipAmt);
    

form.addEventListener("submit", displayOutput);


function displayOutput(e) {
    e.preventDefault();

    let inputBill = document.getElementById("input-bill");
    let inputUser = document.getElementById("input-users");

    let isValid = validateInputs(inputBill.value, inputUser.value, select.value);

    if (isValid) {
        result = performCalcs(inputBill.value, inputUser.value, select.value);
        loader.style.display = "block";
    }
    setTimeout(showResults, 2000);

    function showResults() {
        loader.style.display = "none";

        //Populate the result elements
        tipAmt.textContent = result[0];
        totalAmt.textContent = result[1];
        personAmt.textContent = result[2];

        resultsContainer.style.display = "block";

    }

    setTimeout(clearResults, 10000);

    function clearResults() {
        // then close the results
        resultsContainer.style.display = "none";

        // and clear the values in the input fields
        inputBill.value = "";
        inputUser.value = "";
        select.selectedIndex = "0"; // this returns the selected value to the initial value
    }


}




