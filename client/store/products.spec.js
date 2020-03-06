import MockAxiosAdapter from 'axios-mock-adapter'
import {expect} from 'chai'
import axios from 'axios'
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import enforceImmutableState from 'redux-immutable-state-invariant'

import Reducer, {fetchProducts, fetchSingleProduct} from './products'

let store
let mockAxios

describe('Thunks', () => {
  beforeEach(() => {
    mockAxios = new MockAxiosAdapter(axios)
    store = createStore(
      Reducer,
      applyMiddleware(thunkMiddleware, enforceImmutableState())
    )
  })

  afterEach(() => {
    mockAxios.restore()
  })

  describe('GET /products succeeds', () => {
    beforeEach(() => {
      mockAxios
        .onGet('/api/products')
        .reply(200, ['red duck', 'yellow duck', 'green duck'])
    })

    it('sets the received products on state', async () => {
      await store.dispatch(fetchProducts())
      const state = store.getState()
      expect(state.allProducts).to.deep.equal([
        'red duck',
        'yellow duck',
        'green duck'
      ])
    })
  })

  describe('GET /products/1 succeeds', () => {
    beforeEach(() => {
      mockAxios.onGet('/api/products/1').reply(200, {product: 'red duck'})
    })

    it('sets the received ONE product on state', async () => {
      await store.dispatch(fetchSingleProduct(1))
      const state = store.getState()
      expect(state.singleProduct).to.deep.equal({product: 'red duck'})
    })
  })
})
