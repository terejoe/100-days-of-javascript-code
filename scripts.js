var image = document.getElementById("image");
var left = document.getElementById("left");
var right = document.getElementById("right");

left.addEventListener("click", myFunction);
right.addEventListener("click", myFunction);

var pictures = [
    "https://raw.githubusercontent.com/JS-Beginners/background-image-slider-project/main/img/contBcg-0.jpeg",
    "https://raw.githubusercontent.com/JS-Beginners/background-image-slider-project/main/img/contBcg-1.jpeg",
    "https://raw.githubusercontent.com/JS-Beginners/background-image-slider-project/main/img/contBcg-2.jpeg",
    "https://raw.githubusercontent.com/JS-Beginners/background-image-slider-project/main/img/contBcg-3.jpeg",
    "https://raw.githubusercontent.com/JS-Beginners/background-image-slider-project/main/img/contBcg-4.jpeg"
];


function myFunction(){
    var index = Math.floor(Math.random() * pictures.length);
    image.style.background = `url(${pictures[index]})`;
}


