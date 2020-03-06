const orders = [
  {
    totalQuantity: 1,
    totalCost: 100,
    shipping_Date: new Date(2020, 8, 19),
    delivery_Date: new Date(2020, 9, 29),
    shipping_address: 'Hanover street, NewYork',
    status: 'Placed'
  },
  {
    totalQuantity: 2,
    totalCost: 400,
    shipping_Date: new Date(2020, 8, 19),
    delivery_Date: new Date(2020, 9, 29),
    shipping_address: 'Hanover street, NewYork',
    status: 'Cart'
  },

  {
    totalQuantity: 3,
    totalCost: 900,
    shipping_Date: new Date(2020, 8, 19),
    delivery_Date: new Date(2020, 9, 29),
    shipping_address: 'Hanover street, NewYork',
    status: 'Placed'
  }
]

module.exports = orders
