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
                expect('all users are fetch all').to.equal(resp)
                done();
            })
            .catch(err => done(err))
    });

    it("Get User its has a response of the account and user_id", (done) => {
        request(app).get('/test/request')
            .then(res => {
                let resp = res.body
                expect(resp.id).to.equal(2)
                expect(resp.account).to.equal('test')
                done();
            })
            .catch(err => done(err))
    })

})