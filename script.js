// buttons
let prev = document.getElementById("left");
let next = document.getElementById("right");

// elements
let alias = document.getElementById("customer-name");
let comment = document.getElementById("customer-text");
let picture = document.getElementById("customer-img");

// counter
let counter = 0;


// array of reviews
const arr = [
    {
        "name": "John",
        "comment": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id inventore facere magnam quaerat excepturi vitae quae labore veniam, nihil aliquam quia ipsum eaque quas enim ducimus totam neque nesciunt delectus?",
        "picture": "https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg"
    },
    {
        "name": "Lucy",
        "comment": "A specified group or range of IP addresses is called 'IP address space.' Each AS controls a certain amount of IP address space. (A group of IP addresses can also be called an IP address 'block'.)",
        "picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNys7iFvBBxifr5E1pgSgnlKxZ8G9HO-47sSR1oW57o1QAXA3YuXsmpVq1WZk9-HkoZls&usqp=CAU"
    },
    {
        "name": "David",
        "comment": "The Internet is a network of networks*, and autonomous systems are the big networks that make up the Internet. More specifically, an autonomous system (AS) is a large network or group of networks that has a unified routing policy. Every computer or device that connects to the Internet is connected to an AS",
        "picture": "https://img.etimg.com/thumb/msid-69381991,width-650,imgsize-594328,,resizemode-4,quality-100/hacker-1.jpg"
    },
    {
        "name": "Sara",
        "comment": "When networking engineers communicate which IP addresses are controlled by which ASes, they do so by talking about the IP address 'prefixes' owned by each AS. An IP address prefix is a range of IP addresses. Because of the way IP addresses are written, IP address prefixes are expressed in this fashion: 192.0.2.0/24. This represents IP addresses 192.0.2.0 through 192.0.2.255, not 192.0.2.0 through 192.0.2.24.",
        "picture": "https://shotkit.com/wp-content/uploads/2021/06/cool-profile-pic-matheus-ferrero.jpeg"
    },
]

// console.log(arr);

prev.addEventListener("click", changeReview);
next.addEventListener("click", changeReview);

// change review function
function changeReview(e){
    if (e.target.id == "left"){
        counter--;
        if (counter < 0) { // check to see whether the first element has been exceeded
            counter = arr.length-1;
        }
    } else if (e.target.id == "right"){ 
        counter++;
        if (counter > arr.length - 1) { // check to see whether the last element has been exceeded
            counter = 0;
        }
    } else { // something for just in case a wrong button was assigned to this function
        console.log("Unsupported button. Check the button and click again.");
    }

    const review = arr[counter];
    alias.innerHTML = `${review.name}`;
    comment.innerHTML = `${review.comment}`;
    picture.src = `${review.picture}`;

}
console.log(review);



