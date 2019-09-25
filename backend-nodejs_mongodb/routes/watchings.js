var express = require('express');
var router = express.Router();
const Watching = require('../models/watching');
const request = require('request');
const strings = require('../methods/strings');
const dates = require('../methods/dates');

router.get('/', (req, res, next) => {
    Watching.find({})
        .then(watchings => res.json(watchings))
        .catch(err => res.status(500).json(err));
});

router.get('/count', async (req, res, next) => {
    const count = await Watching.estimatedDocumentCount();
    res.json(count);
});

router.get('/random', async (req, res, next) => {
    let count = await Watching.estimatedDocumentCount();
    let rand = Math.floor(Math.random() * count);
    let item = await Watching.findOne({}, null, {skip: rand});
    res.json(item);
});

router.get('/:_id', (req, res, next) => {
    Watching.findOne({_id: req.params._id})
        .then(watching => res.json(watching))
        .catch(err => res.status(500).json(err));
});

router.post('/', async (req, res, next) => {
    const newWatching = new Watching({
        type: req.body.type,
        title: req.body.title,
        memo: req.body.memo,
        mal_id: req.body.mal_id,
        ohli_id: req.body.ohli_id,
        premiered: req.body.premiered,
        broadcast: req.body.broadcast,
        aired: req.body.aired,
        img: req.body.img,
        studios: req.body.studios
    });
    try {
        const watching = await newWatching.save();
        res.status(201).json(watching);
    } catch(err) { res.status(500).json(err) }
});

router.put('/:_id', (req, res, next) => {
    const newWatching = {
        type: req.body.type,
        title: req.body.title,
        memo: req.body.memo,
        mal_id: req.body.mal_id,
        ohli_id: req.body.ohli_id,
        img: req.body.img
    };
    Watching.findOneAndUpdate({_id: req.params._id}, newWatching)
        .then(watching => res.json(watching))
        .catch(err => res.status(500).json(err));
});

router.delete('/:_id', (req, res, next) => {
    Watching.findOneAndDelete({_id: req.params._id})
        .then(() => res.status(204).json(null))
        .catch(err => res.status(500).json(err));
});

router.get('/ohlis/:title', (req, res, next) => {
    const title = req.params.title;
    request('https://ohli.moe/timetable/list/now', (error, response, body) => {
        if ( !body ) return res.json();
        const json = JSON.parse(body);
        const ohlis = [];
        for (let arr of json) {
            for (let data of arr) {
                if ( strings.match(data.s, title, 60) ) {
                    const sd = data.sd.toString();
                    const aired = `${sd.substring(0, 4)}-${sd.substring(4, 6)}-${sd.substring(6)}`;
                    ohlis.push({
                        id: data.i,
                        aired: aired,
                        title: data.s,
                        img: data.img
                    });
                }
            }
        }
        res.json(ohlis);
    });
});

router.get('/airing/videos/:title', (req, res, next) => {
    const title = req.params.title;
    request(`https://nyaa.pantsu.cat/api/search?q=${title}&limit=5`, (error, response, body) => {
        if ( !body ) return res.json([]);
        const json = JSON.parse(body);
        const arr = json.torrents;
        let result = [];
        for (let each of arr) {
            result.push({
                name: each.name,
                date: dates.getFormattedFullDate(each.date),
                magnet: each.magnet,
                size: each.filesize
            });
        }
        res.json(result);
    });
});

router.get('/airing/ohys/:title', (req, res, next) => {
    const title = req.params.title.replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi, ' ').trim();
    request(`http://torrents.ohys.net/t/json.php?dir=disk&q=${title}`, (error, response, body) => {
        if ( !body ) return res.json([]);
        const json = JSON.parse(body.trim());
        let result = [];
        for (let [i, data] of json.entries()) {
            if ( i == 5 ) break;
            result.push({
                name: data.t,
                link: 'http://torrents.ohys.net/t/' + data.a
            });
        }
        res.json(result);
    });
});

router.get('/airing/subtitles/:ohli_id', (req, res, next) => {
    request(`https://ohli.moe/timetable/cap?i=${req.params.ohli_id}`, (error, response, body) => {
        if ( !body ) return res.json([]);
        const json = JSON.parse(body);
        let result = [];
        for (let data of json) {
            const d = data.d.toString();
            const d1 = `${d.substring(0, 4)}-${d.substring(4, 6)}-${d.substring(6, 8)} `;
            const d2 = `${d.substring(8, 10)}:${d.substring(10, 12)}:${d.substring(12)}`;
            result.push({
                date: d1 + d2,
                by: data.n,
                link: 'http://' + data.a,
                episode: data.s
            });
        }
        res.json(result);
    });
});

module.exports = router;
