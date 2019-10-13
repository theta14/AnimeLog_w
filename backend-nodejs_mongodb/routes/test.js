const express = require('express');
const router = express.Router();
const request = require('request');
const cheerio = require('cheerio');

const request_promise = (url) => {
    return new Promise((resolve, reject) => {
        request(url, (error, response, body) => {
            if ( error ) reject(error);
            else resolve(body);
        });
    });
}

router.get('/:text', async (req, res, next) => {
    res.send();
    const text = req.params.text;
    const url = 'https://namu.wiki/search/' + encodeURI(text);
    try {
        const body = await request_promise(url);
        const $ = cheerio.load(body);
        const a = $('#__layout > div > div:nth-child(2) > article > div > section > div:nth-child(1) > h4 > a');
        let href;
        if ( href = a.attr('href') ) {
            href = href.substring(3);
            if ( text == decodeURI(href) ) {
                console.log('same text - able to go to the page');
            } else {
                console.log('have to go to the search page');
            }

        } else {
            console.log('nothing has been searched');
        }

    } catch(e) {
        console.log(e);
    }
});

module.exports = router;
