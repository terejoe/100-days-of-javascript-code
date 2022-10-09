//Button to open and close modal
let cartInfo = document.getElementById("cart-info");

//Modal pop up box
let cart = document.getElementById("cart");

cartInfo.addEventListener("click", toggleModal);

function toggleModal(){
    cart.classList.toggle("show-cart");
}

//Targeting an item to display the alert window
let shopCarts= document.querySelectorAll(".fa-shopping-cart");
// console.log(shopCarts);

shopCarts.forEach((shopCart) => {
    shopCart.addEventListener("click", (event) =>{
        alert("Item has been added to cart");
        // console.log("Item has been added to cart");
        // console.log(event.target);

        if (event.target.parentElement.classList.contains("store-item-icon")){
            let fullPath = event.target.parentElement.previousElementSibling.src;
            
            let postn = fullPath.indexOf("img") + 3;
            let partPath = fullPath.slice(postn);
            // console.log(partPath);


            const item = {};
            item.img = `https://raw.githubusercontent.com/JS-Beginners/grocery-cart-project/main/img-cart${partPath}`;
            // console.log(item); 

            item.name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;

            let price = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
            let finalPrice = price.slice(1).trim();
            item.price = finalPrice;

            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item", "d-flex", "justify-content-between","text-capitalize", "my-3");

            cartItem.innerHTML = `<img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
            <div class="item-text">
              <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
              <span>$</span>
              <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
            </div>
            <a href="#" id='cart-item-remove' class="cart-item-remove">
              <i class="fas fa-trash"></i>
            </a>`

            const cart = document.getElementById("cart");
            const total = document.querySelector(".cart-total-container");

            cart.insertBefore(cartItem, total);
            showTotal();
        }
      function showTotal() {
        const total = [];
        const items = document.querySelectorAll(".cart-item-price");

        items.forEach((item) => {
          total.push(parseFloat(item.textContent));
        });

        console.log(total);
        
        const totalMoney = total.reduce(myFunc);

        function myFunc(result,item){
          return result += item;
        }
        let finalMoney = totalMoney.toFixed(2);
        console.log(finalMoney);

        document.getElementById("cart-total").textContent = finalMoney;
        document.querySelector(".item-total").textContent = finalMoney;
        document.getElementById("item-count").textContent = total.length;


      }
    })
});



