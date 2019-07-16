var express = require('express');
var router = express.Router();
const Tva = require('../models/tva');
const Movie = require('../models/movie');

router.get('/', function(req, res, next) {
    Tva.find({}, (err, tvas) => {
        if ( err ) res.status(500).json(err);
        else res.json(tvas);
    });
});

router.get('/:_id', (req, res, next) => {
    Tva.findOne({_id: req.params._id}, (err, tva) => {
        if ( err ) res.status(500).json(err);
        else res.json(tva);
    });
});

router.post('/', (req, res, next) => {
    const newTva = new Tva({
        category: req.body.category,
        category_movie: null,
        series: req.body.series
    });
    Tva.addTva(newTva, (err, tva) => {
        if ( err ) res.status(500).json(err);
        else res.status(201).json(tva);
    });
});

router.put('/:_id', (req, res, next) => {
    const newTva = {
        category: req.body.category,
        category_movie: req.body.category_movie,
        series: req.body.series
    };
    Tva.findOneAndUpdate({_id: req.params._id}, newTva, (err, tva) => {
        if ( err ) res.status(500).json(err);
        else if ( tva.category_movie ) {    // if there is a linked movie, modify its series titles
            Movie.findOne({_id: tva.category_movie}, {series: 1}, (err, movie) => {
                outer: for (let i=0; i<movie.series.length; i++) {
                    for (let j=0; j<tva.series.length; j++) {
                        if ( movie.series[i].key == tva.series[j].key ) {
                            movie.series[i].title = tva.series[j].title;
                            break outer;
                        }
                    }
                }
                Movie.findOneAndUpdate({_id: tva.category_movie}, {series: movie.series}, (err, movie2) => {
                    if ( err ) res.status(500).json(err);
                    else res.json(tva);
                });
            });
        } else res.json(tva);
    });
});

router.delete('/:_id/:series/:sequence', (req, res, next) => {
    const _id = req.params._id;
    const series = req.params.series;
    const sequence = req.params.sequence;
    Tva.findOne({_id: _id}, {series: 1}, (err, tva) => {
        if ( tva.series.length == 1 && tva.series[0].sequences.length == 1 ) {
            if ( series == 0 && sequence == 0 ) {
                Tva.findOneAndDelete({_id: _id}, (err, result) => {
                    if ( err ) res.status(500).json(err);
                    else if ( !tva.category_movie ) res.status(204).json(null);
                    else {
                        Movie.findOneAndUpdate({_id: tva.category_movie}, {category_tva: null}, (err, movie) => {
                            if ( err ) res.status(500).json(err);
                            else res.status(204).json(null);
                        });
                    }
                });
            } else res.status(400).json({message: 'could not remove the item'});
        } else if ( tva.series[series].length == 0 ) {
            if ( sequence == 0 ) {
                tva.series.splice(series, 1);
                Tva.findOneAndUpdate({_id: _id}, {series: tva.series}, (err, result) => {
                    if ( err ) res.status(500).json(err);
                    else res.status(204).json(null);
                });
            } else res.status(400).json({message: 'could not remove the item'});
        } else {
            try {
                tva.series[series].sequences.splice(sequence, 1);
                Tva.findOneAndUpdate({_id: _id}, {series: tva.series}, (err, result) => {
                    if ( err ) res.status(500).json(err);
                    else res.status(204).json(null);
                });
            } catch(e) {
                res.status(400).json(e);
            }
        }
    });
});

module.exports = router;
