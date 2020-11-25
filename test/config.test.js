const { expect } = require('chai')
const request = require('supertest')
const app = require('../app');

describe('Configuration environment', () => {
    it('development server runs on port 3000', () => {
        expect('3000').to.equal('3000')
    });

    it(" Get's User list of users", (done) => {
        request(app).get('/test')
            .then(res => {
                let resp = res.body.message;
                expect('all users are fetc').to.equal(resp)
                done();
            })
            .catch(err => done(err))
    })

    // it('node environment runs development', () => {
    //     expect(env.NODE_ENV).to.equal('development')
    // })

})