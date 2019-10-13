var express = require('express');
var router = express.Router();
const Mal = require('node-myanimelist').Mal;
const cheerio = require('cheerio');
const premiereds = require('../methods/premiereds');
const dates = require('../methods/dates');
const parses = require('../methods/parses');

router.get('/', function(req, res, next) {
    res.send('');
});

router.get('/onnada/:text', async (req, res, next) => {
    const st = setTimeout(() => {
        return res.json([]);
    }, 12000);  // if there is no response after 12 seconds, just return an empty array

    try {
        const url = 'http://onnada.com/search/?t=anime&q=' + req.params.text;
        const body = await parses.request_promise(url);
        const $ = cheerio.load(body);
        const li = $('.list');
        const arr = [];
        for (let i=0; i<li.length; i++) {
            const el = li[i].firstChild.next.children[2];
            const value = await Mal.search('anime', {
                q: el.children[3].children[0].children[0].data.substr(5),
                limit: 3
            });
            outerLoop: for (let [j, result] of value.results.entries()) {
                for (let each of arr) if ( result.mal_id == each.mal_id ) continue outerLoop;
                let date = new Date(result.start_date);
                arr.push({
                    type: result.type,
                    title: result.title,
                    title_kor: el.children[1].children[0].children[0].data,
                    mal_id: result.mal_id,
                    img: result.image_url,
                    premiered: {
                        year: date.getFullYear(),
                        quarter: premiereds.getPremieredQuarterFromMonth(date.getMonth() + 1)
                    }
                });
                if ( i == li.length - 1 && j == value.results.length - 1 ) {
                    clearTimeout(st);
                    return res.json(arr);
                }
            }
        }
    } catch(e) {
        clearTimeout(st);
        return res.status(500).json(e)
    }
});

router.get('/mal/:text', async (req, res, next) => {
    let arr = [];
    try {
        const value = await Mal.search('anime', {
            q: req.params.text,
            limit: 10
        });
        for (let result of value.results) {
            let date = new Date(result.start_date);
            arr.push({
                type: result.type,
                title: result.title,
                mal_id: result.mal_id,
                img: result.image_url,
                premiered: {
                    year: date.getFullYear(),
                    quarter: premiereds.getPremieredQuarterFromMonth(date.getMonth() + 1)
                }
            });
        }
        res.json(arr);

    } catch(e) { res.status(500).json(e) }
});

router.get('/mal_id/:mal_id', async (req, res, next) => {
    try {
        const value = await Mal.anime(req.params.mal_id);
        let premiered, year, qtr;
        try {
            premiered = value.premiered.split(' ');
            year = parseInt(premiered[1]);
            qtr = premiereds.getPremieredQuarterFromSeason(premiered[0]);

        } catch(e) {
            let from = new Date(value.aired.from);
            year = from.getFullYear();
            qtr = premiereds.getPremieredQuarterFromMonth(from.getMonth() + 1);
        }

        let studios = [];
        for (let studio of value.studios) studios.push(studio.name);

        let aired = undefined;
        if ( value.aired.from ) {
            aired = {
                start: dates.getFormattedDate(value.aired.from),
                end: dates.getFormattedDate(value.aired.to)
            }
        } else aired = dates.getFormattedDate(value.aired);

        let type = value.type.toLowerCase();
        if ( type == 'tv' ) type = 'tva';

        let broadcast = null;
        if ( value.broadcast ) {
            let broadcasts = value.broadcast.split(' ');
            let broadcast_time = broadcasts[2].split(':');
            broadcast = {
                hour: parseInt(broadcast_time[0]),
                minute: parseInt(broadcast_time[1])
            };
            for (let [i, day] of ['Sundays', 'Mondays', 'Tuesdays', 'Wednesdays', 'Thursday', 'Fridays', 'Saturdays'].entries()) {
                if ( day == broadcasts[0] ) {
                    broadcast.day = i;
                    break;
                }
            }
        }

        res.json({
            type: type,
            title: {
                eng: value.title,
                jpn: value.title_japanese
            },
            premiered: {
                year: year,
                quarter: qtr
            },
            broadcast: broadcast,
            aired: aired,
            episodes: value.episodes,
            studios: studios,
            mal_id: value.mal_id,
            img: value.image_url
        });
    } catch(e) { res.status(500).json(e) }
});

router.get('/namuwiki/:text', async (req, res, next) => {
    const text = req.params.text;
    const encoded = encodeURI(text);
    const url = 'https://namu.wiki/search/' + encoded;
    try {
        const body = await parses.request_promise(url);
        const $ = cheerio.load(body);
        const a = $('#__layout > div > div:nth-child(2) > article > div > section > div:nth-child(1) > h4 > a');
        let href = a.attr('href');
        if ( href ) {
            href = href.substring(3);
            if ( text == decodeURI(href) ) return res.redirect(`https://namu.wiki/w/${encoded}`);
        }
        return res.redirect(`https://namu.wiki/search/${encoded}`);

    } catch(e) {
        res.json(e);
    }
});

module.exports = router;
