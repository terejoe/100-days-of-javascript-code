let buttons = document.querySelectorAll(".btn");
let display = document.querySelector("input");

let numBtns = document.querySelectorAll("[data-num]");
let equalBtn = document.querySelector(".btn-equal");
let deleteBtn = document.querySelector(".btn-clear");


buttons.forEach((button) =>{
    button.addEventListener("click", (event) =>{
        let value = event.target.dataset.num;
        display.value += value;
    })
});

deleteBtn.addEventListener("click", (event) => {
    display.value = ""
});

equalBtn.addEventListener("click", (event) => {
    display.value = eval(display.value);
});


