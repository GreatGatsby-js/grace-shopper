//for guest users??????? if we have them??

//when a guest presses add to cart

function addToCart(product) {
  //if that id already exists increase the quantity  of that product in cart by 1

  //else add that product to storage
  // (id, stringifiedArr)
  //arr [qty, productObj]

  const id = product.id.toString()
  const stringified = JSON.stringify(product)

  localStorage.setItem(id, stringified)
}

//when a guest looks at their cart
//display cart items in cart page

//when a guest updates an items qty
//update item in cart
//might have to be some sort of doc.elementById thing for qty form(?) field?
//and qty in local storage is just === that?

//add to qty

//remove qty

//remove entire items from the cart
function removeItem(product) {
  const id = product.id.toString()
  localStorage.removeItem(id)
}

//when a guest checks out
//they can't checkout without an account
//they will have to create an account, once account is created,

//clear cart/storage on checkout
function clearStorage() {
  localStorage.clear()
}

//add qty key to obj when adding it to localStorage
//update qty field when they add/remove

//get rid of that field when it goes to the database?????
