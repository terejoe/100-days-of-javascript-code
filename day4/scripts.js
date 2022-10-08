var message = document.getElementById("message");
var submitBtn = document.getElementById("submitBtn");
var deliver = document.getElementById("deliver");

submitBtn.addEventListener("click", myFunction);

function myFunction(event){
    event.preventDefault();
    var message = document.getElementById("message").value;
    document.getElementById("deliver").innerText = message;
}
