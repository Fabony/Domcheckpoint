// cart
var cartIcon =document.getElementById("cart-icon");
var cart =document.getElementById("order-container")
var closeCart =document.getElementById("del");
// add cart
cartIcon.onclick = () => {
    cart.classList.add("active")
}
// remove cart
closeCart.onclick = () => {
    cart.classList.remove("active")
}

// remove items from cart
if (document.readyState == "loading"){
 document.addEventListener("DOMContentLoaded", ready)
}

else{

    ready()
}

 function ready () {
  let trashbtn = document.getElementsByClassName("trash");
//   console.log ( trashbtn)
    for (var i = 0; i < trashbtn.length; i++) {
   let trabutton  =   trashbtn[i]
    trabutton.addEventListener("click", removecart); 
    }
    //Quantity change
    var quantityinput = document.getElementsByClassName("order-quantity");
    for (var i = 0; i < quantityinput.length; i++) {
        var input = quantityinput[i];
        input.addEventListener("change", quantityChange);
    }
     //Add to Cart
    var addcart = document.getElementsByClassName("cart-product")[0]
    for (var i = 0; i < addcart.length; i++) {
    var addbtn = addcart[i];
    addbtn.addEventListener("click", addcarte);
    } 
}



//targeting button and remove it
function removecart(event){
    var buttonclk = event.target;
    buttonclk.parentElement.remove();
   updatetotal(); 
}

//function for changing quantity
function quantityChange(event) {
    var inputs= event.target;
    if (isNaN(inputs.value)  || inputs.value <=0){
     inputs.value = 1 ;
    }
    updatetotal();
}
  
//add to cart

function addcarte(event){
   var addcarted = event.target 
   var shoppro = addcarted.parentElement;
   var title = shoppro.getElementByClassName("product-name")[0].innerText;
   var price = shoppro.getElementByClassName("product-price")[0].innerText;
   var imaged = shoppro.getElementByClassName("product-img")[0].src;
   addProductToCart(title, price, imaged);
   updatetotal();
}

function addProductToCart(title, price, imaged) {
   var cartShop = document.createElement("div");
   //cartshop.classList.add('carty') 
   var cartItem = document.getElementByClassName("order-contain")[0]
   var cartItemNames = document.getElementsByClassName("ordername")
   for (var i=0; i<cartItemNames.length; i++){
    alert("You have already add the item to cart");
   }
}

// var cartBoxContent =` 
// <img src="/img folder/product6.jpeg" alt="shoe"  class="order-img">
// <div class="detail-box">
//     <div class="ordername">Shoe</div>
//     <div class="order-prices">#65</div>
//     <input type="number" value="1" title="order" class="order-quantity" >
    
//     </div>
//     <i class='bx bxs-trash trash' id="trad"></i>`;

//     cartShop.innerHtml = cartBoxContent
//     cartItem.append(cartshop)
//     cartshop.getElementByClassName("trad")[0].addEventListener("click", removecart)



// update total
function updatetotal() {
   var ordercont = document.getElementByClassName("order-contain")[0];
   var cartd   = ordercont.getElementsByClassName("carty");
   var total = 0;
   for (var i = 0; i < cartd.length; i++){
    var cardex = cartd[i]
    var priceEle = cardex.getElementsByClassName("order-prices")[0];
    var quantityEle = cardex.getElementsByClassName("order-quantity")[0];
    var price = parseFloat(priceEle.innerText.replace ("#",""));
    var quantity= quantityEle.value;
    total = total + price * quantity;
    //if price contain somw Cents Value
    total = math.round(total * 100) / 100;

    document.getElementsByClassName("grandTotal")[0].innerHTML = "#" + total;
   }
   
}
