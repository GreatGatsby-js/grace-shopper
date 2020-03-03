import axios from 'axios'

//Action types
const GOT_PRODUCTS = 'GOT_PRODUCTS'
const GOT_SINGLE_PRODUCT = 'GOT_SINGLE_PRODUCT'

// const dummyProducts = [
//   {
//     name: 'book worm duck',
//     description:
//       'We all love reading a good book, so why shouldnt your rubber duck enjoy one too? Please note, this duck does not squeak',
//     price: 100,
//     imageUrl:
//       'https://cdn.shopify.com/s/files/1/1184/9194/products/literary-rubber-duck-1322-p_600x.jpeg?v=1457991497'
//   },
//   {
//     name: 'happy duck',
//     description:
//       'Life is even more fun with this cheerful rubber duck! This duck becomes everyones playmate',
//     price: 200,
//     imageUrl:
//       'https://www.internet-toys.com/producten/large/free_and_easy_badeend_26_x_20_x_22_cm_geel_268798_20190103155226.jpg'
//   },
//   {
//     name: 'sad duck',
//     description: 'Lets make this sad duck happy buying it',
//     price: 300,
//     imageUrl:
//       'https://images-na.ssl-images-amazon.com/images/I/51UNZiX8D-L._AC_SX425_.jpg'
//   }
// ]

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

const gotSingleProduct = singleProduct => {
  return {
    type: GOT_SINGLE_PRODUCT,
    singleProduct
  }
}

//Thunks
export const fetchProducts = () => async dispatch => {
  try {
    const res = await axios.get('/api/products')
    dispatch(gotProducts(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const fetchSingleProduct = id => async dispatch => {
  try {
    const singleProduct = await axios.get(`/api/products/${id}`)
    dispatch(gotSingleProduct(singleProduct))
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
    case GOT_SINGLE_PRODUCT:
      return {
        ...state,
        singleProduct: {...action.singleProduct}
      }
    default:
      return state
  }
}
