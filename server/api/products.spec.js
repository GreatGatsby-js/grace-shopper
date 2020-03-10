const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Product = db.model('product')

describe('Product routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('GET /api/products/', () => {
    beforeEach(() => {
      return Product.create({
        name: 'book worm duck',
        description:
          'We all love reading a good book, so why shouldnt your rubber duck enjoy one too? Please note, this duck does not squeak',
        price: 100,
        imageUrl:
          'https://cdn.shopify.com/s/files/1/1184/9194/products/literary-rubber-duck-1322-p_600x.jpeg?v=1457991497'
      })
    })

    it('gets all products', async () => {
      const res = await request(app)
        .get('/api/products')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].name).to.be.equal('book worm duck')
      expect(res.body[0].description).to.be.equal(
        'We all love reading a good book, so why shouldnt your rubber duck enjoy one too? Please note, this duck does not squeak'
      )
      expect(res.body[0].price).to.be.equal(100)
      expect(res.body[0].imageUrl).to.be.equal(
        'https://cdn.shopify.com/s/files/1/1184/9194/products/literary-rubber-duck-1322-p_600x.jpeg?v=1457991497'
      )
    })
  })
})
