var express = require('express');
var router = express.Router();
const Mal = require('node-myanimelist').Mal;
const request = require('request');
const cheerio = require('cheerio');
const premiereds = require('../methods/premiereds');
const dates = require('../methods/dates');

router.get('/', function(req, res, next) {
    res.send('');
});

router.get('/onnada', (req, res, next) => {
    const url = 'http://onnada.com/search/?t=anime&q=' + encodeURI(req.query.text);
    request(url, (error, response, body) => {
        const $ = cheerio.load(body);
        let li = $('.list');
        let arr = [];
    
        new Promise((resolve, reject) => {
            for (let i=0; i<li.length; i++) {
                const el = li[i].firstChild.next.children[2];
                Mal.search('anime', {
                    q: el.children[3].children[0].children[0].data.substr(5),
                    limit: 3
                })
                .then(value => {
                    outerLoop: for (let result of value.results) {
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
                        if ( i == li.length - 1 ) resolve();
                    }
                })
                .catch((err) => res.status(500).json(err));
            }
        })
        .then(() => res.json(arr))
        .catch((err) => res.status(500).json(err));
    });
});

router.get('/mal', (req, res, next) => {
    let arr = [];
    Mal.search('anime', {
        q: req.query.text,
        limit: 10
    })
    .then(value => {
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
    })
    .catch((err) => res.status(500).json(err));
});

router.get('/mal/:mal_id', (req, res, next) => {
    Mal.anime(req.params.mal_id).then(value => {
        let premiered, year, qtr;
        try {
            premiered = value.premiered.split(' ');
            year = parseInt(premiered[1]);
            qtr = premiereds.getPremieredQuarterFromSeason(premiered[0]);

        } catch(err) {
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
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
