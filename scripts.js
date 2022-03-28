// Filter Elements Buttons
const buttons= document.querySelectorAll(".btn");
const storeItems = document.querySelectorAll(".store-item");

buttons.forEach((button)=>{
    button.addEventListener("click", (event) => {
        event.preventDefault();
        const filter = event.target.dataset.filter;
        storeItems.forEach((item) => {
            if(filter === "all"){
                item.style.display = "block";
    
            }else{
                if(item.classList.contains(filter)){
                    item.style.display = "block";
                }else{
                    item.style.display = "none";
                }
            }

        });
    })
});

// Filter Elements Buttons
const search = document.querySelector("#search-item");
//const storeItems = document.querySelectorAll(".store-item");


search.addEventListener("keyup", (event) => {
    event.preventDefault();
    const filter = search.value;
    storeItems.forEach((item) => {
        if (item.textContent.includes(filter)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});





