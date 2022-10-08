//Modal Box
var storeItems = document.querySelectorAll(".store-item");
var modal = document.getElementById("modal");
var closeBtn = document.querySelector(".close");

var images = document.querySelectorAll("img");
var btnLeft = document.querySelector(".btnLeft");
var btnRight = document.querySelector(".btnRight");
var counter;
var displayImg;
var myArray = [];

for (let i = 0; i < images.length; i++) {
    myArray.push(images[i].src);
}

closeBtn.addEventListener("click", closeModal);

btnLeft.addEventListener("click", myFunction);
btnRight.addEventListener("click", myFunction);


storeItems.forEach((item) =>{
    // item.addEventListener("click",openModal(item));
    item.addEventListener("click", function() {
        openModal(item);
    })
})

function openModal(item) {
    modal.style.display = "block";
    var img = item.childNodes[1].childNodes[1].childNodes[1].src;
    
    for(let i = 0; i < myArray.length; i++){
        if(img === myArray[i]){
            displayImg = myArray[i];
            counter = i;
        }
    }
    modal.childNodes[1].childNodes[3].style.background = `url(${displayImg})`;
}

function closeModal() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Moving left and right
function myFunction(e) {
    if (e.target.classList.contains("fa-caret-right")) {
        counter++;
        if (counter > myArray.length-1) {
            counter = 2;
        }
    } else if (e.target.classList.contains("fa-caret-left")) {
        counter--;
        if (counter < 2) {
            counter = myArray.length -1;
        }
    }
    modal.childNodes[1].childNodes[3].style.background = `url(${myArray[counter]})`;
}
