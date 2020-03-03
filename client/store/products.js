import axios from 'axios'

//Action types
const GOT_PRODUCTS = 'GOT_PRODUCTS'

const dummyProducts = [
  {
    id: 1,
    name: 'book worm duck',
    description:
      'We all love reading a good book, so why shouldnt your rubber duck enjoy one too? Please note, this duck does not squeak',
    price: 100,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/1184/9194/products/literary-rubber-duck-1322-p_600x.jpeg?v=1457991497'
  },
  {
    id: 2,
    name: 'happy duck',
    description:
      'Life is even more fun with this cheerful rubber duck! This duck becomes everyones playmate',
    price: 200,
    imageUrl:
      'https://www.internet-toys.com/producten/large/free_and_easy_badeend_26_x_20_x_22_cm_geel_268798_20190103155226.jpg'
  },
  {
    id: 3,
    name: 'sad duck',
    description: 'Lets make this sad duck happy buying it',
    price: 300,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51UNZiX8D-L._AC_SX425_.jpg'
  }
]

const initialState = {
  allProducts: [],
  singleProduct: {}
}

//Action creators
const gotProducts = allProducts => {
  return {
    type: GOT_PRODUCTS,
    allProducts
  }
}

//Thunks
export const fetchProducts = () => async dispatch => {
  try {
    // const res = await axios.get('/api/products')
    // dispatch(gotProducts(res.data))
    dispatch(gotProducts(dummyProducts))
  } catch (err) {
    console.error(err)
  }
}

//Reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_PRODUCTS:
      return {
        ...state,
        allProducts: [...action.allProducts]
      }
    // return action.allProducts
    default:
      return state
  }
}
