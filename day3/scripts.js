var button = document.getElementById("generate-btn");
var quote = document.getElementById("quote");
var author = document.getElementById("author");

button.addEventListener("click", myFunction);

let newArray = [
    {
        "quote": "Humor is richly rewarding to the person who employs it.It has some value in gaining and holding attention. But it has no persuasive value at all",
        "name": "John Kenneth Galbraith",
    },

    {
        "quote": "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance.",
        "name": "Charles Lindbergh",
    },

    {
        "quote":"Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
        "name":"Life",
    },

    {
        "quote": "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
        "name": "Tyne Daly",
    },

    {
        "quote": "God save me from my friends. I can protect myself from my enemies.",
        "name": "Claude Louis Hector De Villars",
    },

    {
        "quote": "The price of anything is the amount of life you exchange for it.",
        "name": "David Thoreau"
    }
    
    
];

function myFunction(){
    let random = Math.floor(Math.random()* newArray.length);
    quote.innerHTML = newArray[random].quote;
    author.innerHTML =  newArray[random].name;

}
