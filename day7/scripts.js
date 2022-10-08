//Buttons
var left = document.getElementById("left");
var right= document.getElementById("right");

//Elements
var customerText = document.getElementById("text");
var customerImg = document.getElementById("img");
var customerName = document.getElementById("name");


left.addEventListener("click", myFunction);
right.addEventListener("click", myFunction);

let count = 0;

const myArray = [
    {
        "name": "John",
        "picture": "https://raw.githubusercontent.com/JS-Beginners/testimonial-project/main/img/customer-0.jpg",
        "review": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
    },

    {
        "name": "Sandy",
        "picture": "https://raw.githubusercontent.com/JS-Beginners/testimonial-project/main/img/customer-1.jpg",
        "review": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
    },

    {
        "name": "Amy",
        "picture": "https://raw.githubusercontent.com/JS-Beginners/testimonial-project/main/img/customer-2.jpg",
        "review": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },

    {
        "name": "Tyrell",
        "picture": "https://raw.githubusercontent.com/JS-Beginners/testimonial-project/main/img/customer-3.jpg",
        "review": "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    },

    {
        "name": "Wanda",
        "picture": "https://raw.githubusercontent.com/JS-Beginners/testimonial-project/main/img/customer-4.jpg",
        "review": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    }
];

function myFunction(e){
    if(e.target.id == "left"){
        count--
        if(count < 0){
            count = myArray.length - 1;
        }
    }else if(e.target.id == "right"){
        count++
        if(count > myArray.length - 1){
            count = 0;
        }
    }else{
        console.log("Unsupported button, click agin");
    }
    
    var index = myArray[count];
    
    customerName.innerHTML = `${index.name}`;
    customerImg.src = `${index.picture}`;
    customerText.innerHTML = `${index.review}`;
}
console.log(myArray[count]);





