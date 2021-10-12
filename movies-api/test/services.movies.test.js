const assert = require('assert');
const proxyquire = require('proxyquire');

const { MongoLibMock, getAllStub } = require('../utils/mocks/mongoLib');

const { moviesMock } = require('../utils/mocks/movies');

describe('services - movies', () => {

    const MoviesServices = proxyquire('../services/movies.js', {
        '../lib/mongo': MongoLibMock
    })

    const moviesService = new MoviesServices();

    describe('when getMovies method is called', async () => {
        it('should call the getAll MogoLib method', async () => {
            await moviesService.getMovies({});
            assert.strictEqual(getAllStub.called, true);
        })

        it('should return and array of movies', async () => {
            const result = await moviesService.getMovies({});
            const expected = moviesMock;
            assert.deepEqual(result, expected);
        })
    })
})

