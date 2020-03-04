// import { app } from '../index';
const request = require('supertest');
const app = require('../index');

describe('Get all Vehicles', () => {
    it('Should fetch all the vehicles', (done) => {
        request(app)
            .get('/vehicles')
            // .set('Accept', 'application/json')
            .expect(200, done)
    })
})