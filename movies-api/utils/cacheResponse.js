const { config } = require('../config');

function cacheResponse(res, seconds) {
    console.log('seconds', seconds);
    if (!config.dev) {
        res.set('Cache-Control', `public, max-age=${seconds}`)
    }
}

module.exports = cacheResponse;