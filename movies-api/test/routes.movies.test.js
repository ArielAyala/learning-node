const assert = require('assert');
const proxyquire = require('proxyquire');

const { moviesMock, MoviesServiceMock } = require('../utils/mocks/movies');
const testServer = require('../utils/testServer');

describe('routes - movies', () => {
    const route = proxyquire('../routes/movies.js', {
        '../services/movies': MoviesServiceMock
    });

    const request = testServer(route);
    describe('GET /movies', (done) => {
        it('shoud respond with status 200', () => {
            request.get('/api/movies').expect(200, done);
        });

        it('should respond with the list of movies', (done) => {
            request.get('/api/movies').end((err, res) => {
                assert.deepEqual(res.body, {
                    data: moviesMock,
                    message: 'movies listed'
                });

                done();
            })
        })
    })
})