const supertest = require('supertest')
const path = require('path')
const app = require('../server/server.js')
const request = supertest(app)
const mongoose = require('mongoose')


it('testing Jest', async ()=> {
    const res = await request.get('/')
    doesNotMatch()
})

// afterAll(done => {
//     // Closing the DB connection allows Jest to exit successfully.
//     server.close()
//     done()
//   })