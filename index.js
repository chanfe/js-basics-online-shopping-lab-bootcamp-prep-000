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
  if(cart.length < 1){
    return "Your shopping cart is empty."
  }
  var cartList = `In your cart, you have ${cart[0].itemName} at ${cart[0].itemPrice}`;
  for(let i = 1; i < cart.length;i++){
    cartList += `, ${cart[i].itemName} at ${cart[i].itemPrice}`;
  }
  cartList += `.`
  return cartList;
}

function total() {
  // write your code herd
  totalCost = 0;
  for(let i = 1; i < cart.length;i++){
    totalCost += cart[i].itemPrice;
  }
  return totalCost;
}

function removeFromCart(item) {
  // write your code here
  
}

function placeOrder(cardNumber) {
  // write your code here
}
