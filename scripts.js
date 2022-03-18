var  page = document.getElementById("page");
var button = document.getElementById("btn");

button.addEventListener("click", myFunction);


const myColors = ["yellow", "pink", "purple", "red", "blue", "green"];
function myFunction(){
    let index = ((Math.floor(Math.random()* myColors.length)));
    page.style.backgroundColor = myColors[index];
}

/*Trying Something Different

var counter = 0;
function myFunction(){
    page.style.backgroundColor = myColors[counter];

    if(counter  < myColors.length -1){
        counter++;
    }else{
        counter = 0;
    }
}
*/