const request = require('supertest')
const assert = require('assert')
const app = require('./app')

describe('/sample test', () => {
    it('should test that true === true', () => {
      expect(true).toBe(true)
    })
    // it('should return successfully', () => {
    //     request(app)
    //     .get('/books')
    //     .expect(200)
    //     .expect((res) => {
    //         assert.equal(res.body['hello', 'world'])
    //     })
    //     expect(true).toBe(true)
    //   })
  })
  