const request = require('request');

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
