export function increaseGuestQty(product) {
  const id = product.id.toString()
  let duck = localStorage.getItem(id)

  if (duck) {
    let newDuck = JSON.parse(duck)
    newDuck.qty++
    newDuck = JSON.stringify(newDuck)
    localStorage.setItem(id, newDuck)
  } else {
    duck = {
      qty: 1,
      product
    }
    const stringDuck = JSON.stringify(duck)

    localStorage.setItem(id, stringDuck)
  }
}

export function decreaseGuestQty(product) {
  const id = product.id.toString()
  let duck = JSON.parse(localStorage.getItem(id))

  if (duck.qty > 1) {
    duck.qty--
    duck = JSON.stringify(duck)

    localStorage.setItem(id, duck)
  }
}

//remove entire items from the cart
export function removeFromCart(product) {
  const id = product.id.toString()

  localStorage.removeItem(id)
}

export function clearCartStorage() {
  localStorage.clear()
}
