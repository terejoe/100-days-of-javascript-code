var count = document.getElementById("count").innerHTML;
var lowercount = document.getElementById("down");
var addcount = document.getElementById("up");

lowercount.addEventListener("click", myFunction);
addcount.addEventListener("click", myFunction);

function myFunction(event){
    event.preventDefault();
    if(event.target.id == "down"){
        count--
    }else {
        count++
    } 
    document.getElementById("count").innerHTML = count;
}

