var  page = document.getElementById("page");
var button = document.getElementById("btn");

button.addEventListener("click", myFunction);

const hexa = ["a", "b", "c", "d", "e", "f", "0","1","2", "3", "4","5", "6", "7","8", "9"];

let hexadecimal = "#";
function myFunction(){
    
    for(var i = 1; i <= 6; i++){
        let random = Math.floor(Math.random()* hexa.length);
        hexadecimal += hexa[random];
    }
    page.style.backgroundColor = hexadecimal;
    hexadecimal = "#";
}
