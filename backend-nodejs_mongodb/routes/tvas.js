var express = require('express');
var router = express.Router();
const Tva = require('../models/tva');
const Movie = require('../models/movie');

router.get('/', (req, res, next) => {
    Tva.find({})
        .then(tvas => res.json(tvas))
        .catch(err => res.status(500).json(err));
});

router.get('/count', async (req, res, next) => {
    let count = await Tva.estimatedDocumentCount();
    res.json(count);
});

router.get('/random', async (req, res, next) => {
    let count = await Tva.estimatedDocumentCount();
    let rand = Math.floor(Math.random() * count);
    let item = await Tva.findOne({}, null, {skip: rand});
    res.json(item);
});

router.get('/:_id', (req, res, next) => {
    Tva.findOne({_id: req.params._id})
        .then(tva => res.json(tva))
        .catch(err => res.status(500).json(err));
});

router.post('/', (req, res, next) => {
    const newTva = new Tva({
        category: req.body.category,
        category_movie: null,
        series: req.body.series
    });
    newTva.save()
        .then(tva => res.status(201).json(tva))
        .catch(err => res.status(500).json(err));
});

router.put('/:_id', async (req, res, next) => {
    const newTva = {
        category: req.body.category,
        category_movie: req.body.category_movie,
        series: req.body.series
    };
    try {
        const tva = await Tva.findOneAndUpdate({_id: req.params._id}, newTva);
        if ( tva.category_movie ) { // if there is a linked movie, modify its series titles
            const movie = await Movie.findOne({_id: tva.category_movie}, {series: 1});
            outer: for (let i=0; i<movie.series.length; i++) {
                for (let j=0; j<tva.series.length; j++) {
                    if ( movie.series[i].key == tva.series[j].key ) {
                        movie.series[i].title = tva.series[j].title;
                        break outer;
                    }
                }
            }
            await Movie.findOneAndUpdate({_id: tva.category_movie}, {series: movie.series});
            res.json(tva);

        } else res.json(tva);
    } catch(err) {
        res.status(500).json(err);
    }
});

router.delete('/:_id/:series/:sequence', async (req, res, next) => {
    const _id = req.params._id;
    const series = req.params.series;
    const sequence = req.params.sequence;

    try {
        const tva = await Tva.findOne({_id: _id}, {series: 1});
        if ( tva.series.length == 1 && tva.series[0].sequences.length == 1 ) {
            if ( series == 0 && sequence == 0 ) {
                const result = await Tva.findOneAndDelete({_id: _id});
                if ( !tva.category_movie ) res.status(204).json(null);
                else {
                    Movie.findOneAndUpdate({_id: tva.category_movie}, {category_tva: null})
                        .then(movie => res.status(204).json(null))
                        .catch(err => res.status(500).json(err));
                }
            }
        } else if ( tva.series[series].length == 0 ) {
            if ( sequence == 0 ) {
                tva.series.splice(series, 1);
                Tva.findOneAndUpdate({_id: _id}, {series: tva.series})
                    .then(result => res.status(204).json(null))
                    .catch(err => res.status(500).json(err));
            } else res.status(400).json({message: 'could not remove the item'});
        } else {
            try {
                tva.series[series].sequences.splice(sequence, 1);
                Tva.findOneAndUpdate({_id: _id}, {series: tva.series})
                    .then(result => res.status(204).json(null))
                    .catch(err => res.status(500).json(err));
            } catch(e) {
                res.status(400).json(e);
            }
        }

    } catch(err) { res.status(400).status(err); }
});

module.exports = router;
