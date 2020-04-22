const request = require('request');
const torrentToMagnet = require('torrent-to-magnet');

/**
 * @param {string} url
 */
exports.request_promise = (url) => {
    return new Promise((resolve, reject) => {
        request(encodeURI(url), (error, response, body) => {
            if ( error ) reject(error);
            else resolve(body);
        });
    });
}

/**
 * @param {string} url
 */
exports.getMagnetLink = url => {
    return new Promise((resolve, reject) => {
        torrentToMagnet(url, {}, (err, uri) => {
            if ( err ) reject(err);
            else resolve(uri);
        });
    });
}
