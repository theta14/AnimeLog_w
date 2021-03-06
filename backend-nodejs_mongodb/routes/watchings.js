var express = require('express');
var router = express.Router();
const Watching = require('../models/watching');
const strings = require('../methods/strings');
const dates = require('../methods/dates');
const parses = require('../methods/parses');

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

router.get('/ohlis/:state/:title', async (req, res, next) => {
    const state = req.params.state;
    const title = req.params.title;
    const isAiring = state == 'airing';
    const link = isAiring ? 'https://ohli.moe/timetable/list/now' : `https://ohli.moe/timetable/end?year=${state}`;
    const body = await parses.request_promise(link);
    if ( !body ) return res.json();
    const json = JSON.parse(body);
    const ohlis = [];
    const pushing = (arr) => {
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
    };
    if ( !isAiring ) pushing(json);
    else json.map(arr => pushing(arr));
    res.json(ohlis);
});

router.get('/airing/videos/:title', async (req, res, next) => {
    const title = req.params.title;
    const body = await parses.request_promise(`https://nyaa.pantsu.cat/api/search?q=${title}&limit=5`);
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

router.get('/airing/ohys/:title', async (req, res, next) => {
    const title = req.params.title.trim().replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi, ' ');
    const body = await parses.request_promise(`http://torrents.ohys.net/t/json.php?dir=disk&q=${title}`);
    if ( !body ) return res.json([]);
    const json = JSON.parse(body.trim());
    let result = [];
    for (let [i, data] of json.entries()) {
        if ( i == 5 ) break;
        const link = 'http://torrents.ohys.net/t/' + data.a;
        result.push({
            name: data.t,
            link: link,
            magnet: await parses.getMagnetLink(link)
        });
    }
    res.json(result);
});

router.get('/airing/subtitles/:ohli_id', async (req, res, next) => {
    const body = await parses.request_promise(`https://ohli.moe/timetable/cap?i=${req.params.ohli_id}`);
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
            link: data.a,
            episode: data.s
        });
    }
    res.json(result);
});

module.exports = router;
