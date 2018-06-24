var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push({itemName:item, itemPrice: Math.floor(Math.random()*100)})
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var cartList = `In your cart, you have ${cart[0].itemName} `;
  for(let i = 0; i < cart.length;i++){
    cartList += `${cart[i].itemName}`;
    
  }
  return cartList;
}

function total() {
  // write your code herd
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
