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

    // afterEach(() => {
    //   Product.destroy();
    // });

    it('gets all products', async () => {
      // const products =[
      //   Product.create(
      //   {
      //     name: 'book worm duck',
      //     description:
      //       'We all love reading a good book, so why shouldnt your rubber duck enjoy one too? Please note, this duck does not squeak',
      //     price: 100,
      //     imageUrl:
      //       'https://cdn.shopify.com/s/files/1/1184/9194/products/literary-rubber-duck-1322-p_600x.jpeg?v=1457991497'
      //   })
      // ];
      // await Promise.all(products);
      const res = await request(app)
        .get('/api/products')
        .expect(200)

      //  expect(res.body).to.have.lengthOf(products.length)
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

  //   describe('GET /api/products/:productId',  ()=> {
  //
  //     beforeEach(()=>{
  //
  //       return Product.create(
  //         {
  //           name: 'book worm duck',
  //           description:
  //             'We all love reading a good book, so why shouldnt your rubber duck enjoy one too? Please note, this duck does not squeak',
  //           price: 100,
  //           imageUrl:
  //             'https://cdn.shopify.com/s/files/1/1184/9194/products/literary-rubber-duck-1322-p_600x.jpeg?v=1457991497'
  //         })
  //     })
  //
  //
  //
  //    it('gets the product with the productId', async () => {
  //
  //       const res = await request(app).get(`/api/products/${Product.id}`).expect(200)
  //         .then((res) => {
  //           expect(res.body).to.be.an('object')
  //           expect(res.body.some(product => product.name ===Product.name )).to.be.equal(true)
  //           expect(res.body.some(product => product.description ===Product.description )).to.be.equal(true)
  //           expect(res.body.some(product => product.price ===Product.price )).to.be.equal(true)
  //           expect(res.body.some(product => product.imageUrl ===Product.imageUrl )).to.be.equal(true)
  //
  //       expect(res.body).to.have.lengthOf(1)
  //
  //
  //     })
  //
  //   })
  //
  //
  //
  //
  // })
  // })

  describe('GET /api/products/:prodId', () => {
    const prodName = 'happy duck'
    let prodId

    beforeEach(() => {
      const newProd = Product.create({
        name: prodName
      })
      prodId = newProd.id
    })

    afterEach(() => {
      Product.destroy({
        where: {
          id: prodId
        }
      })
    })

    it('GET /api/products/:prodId', async () => {
      const res = await request(app)
        .get(`/api/products/${prodId}`)
        .expect(200)

      expect(res.body).to.be.an('object')
      expect(res.body.name).to.be.equal(prodName)
    })
  })
})
