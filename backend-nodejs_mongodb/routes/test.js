const express = require('express');
const router = express.Router();
const torrentToMagnet = require('torrent-to-magnet');

router.get('/', async (req, res, next) => {
    const s = 'http://torrents.ohys.net/t/disk/%5BOhys-Raws%5D%20Toaru%20Kagaku%20no%20Railgun%20T%20-%2012%20%28AT-X%201280x720%20x264%20AAC%29.mp4.torrent';
    torrentToMagnet(s, undefined, (err, uri) => {
        if ( err ) console.log(err);
        else console.log(uri);
    });
});

module.exports = router;
