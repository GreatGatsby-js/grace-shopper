//for guest users??????? if we have them??

//when a guest presses add to cart

//i really hope this function works
export function addToGuestCart(product) {
  console.log('clicked addToGuestCart')
  //guest user clicks add to cart button, it adds one at a time!!!!!!!!
  const id = product.id.toString()
  let duck = localStorage.getItem(id)
  //if something w that id exists in localStorage increase qty by 1
  if (duck) {
    //if the duck exists do soemthing
    let newDuck = JSON.parse(duck)
    newDuck.qty++
    newDuck = JSON.stringify(newDuck)
    localStorage.setItem(id, newDuck)
  } else {
    //create a new duck obj
    duck = {
      qty: 1,
      product
    }
    //set local storage to be
    //key: product id, value: our new duck obj
    localStorage.setItem(id, duck)
  }
  console.log('end of add to cart func')
}

export function decreaseQty(product) {
  console.log('clicked decreaseQty')
  const id = product.id.toString()
  let duck = JSON.parse(localStorage.getItem(id))
  //in this case we can assume duck exists bc they cannot access decrease button if there's no duck
  duck.qty--
  duck = JSON.stringify(duck)

  localStorage.setItem(id, duck)
}

//remove entire items from the cart
export function removeFromCart(product) {
  const id = product.id.toString()
  localStorage.removeItem(id)
}

//when a guest checks out
//they can't checkout without an account
//they will have to create an account, once account is created,
//clear cart/storage on checkout
export function clearCartStorage() {
  localStorage.clear()
}
