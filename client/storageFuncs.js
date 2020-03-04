//add to cart
function addToCart(product) {
  const id = product.id.toString()
  const stringified = JSON.stringify(product)

  localStorage.setItem(id, stringified)
}

//display cart items in cart page

//update item in cart
//add to qty

//remove qty

//remove entire items
function removeItem(product) {
  const id = product.id.toString()
  localStorage.removeItem(id)
}

//clear cart/storage on checkout
function clearStorage() {
  localStorage.clear()
}

//add qty key to obj when adding it to localStorage
//update qty field when they add/remove

//get rid of that field when it goes to the database?????
