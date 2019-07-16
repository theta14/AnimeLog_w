var express = require('express');
var router = express.Router();
const Movie = require('../models/movie');
const Tva = require('../models/tva');

router.get('/', function(req, res, next) {
    Movie.find({}, (err, movies) => {
        if ( err ) res.status(500).json(err);
        else res.json(movies);
    });
});

router.get('/:_id', (req, res, next) => {
    Movie.findOne({_id: req.params._id}, (err, movie) => {
        if ( err ) res.status(500).json(err);
        else res.json(movie);
    });
});

router.post('/', (req, res, next) => {
    const category_tva = req.body.category_tva;
    const newMovie = new Movie({
        category: req.body.category,
        category_tva: category_tva,
        series: req.body.series
    });
    Movie.addMovie(newMovie, (err, movie) => {
        if ( err ) res.status(500).json(err);
        else {
            Tva.findOneAndUpdate({_id: category_tva}, {category_movie: movie._id}, (err2, tva) => {
                if ( err2 ) res.status(500).json(err);
                else res.status(201).json(movie);
            });
        }
    });
});

router.put('/:_id', (req, res, next) => {
    const _id = req.params._id;
    const category_tva = req.body.category_tva;
    const newMovie = {
        category: req.body.category,
        category_tva: category_tva,
        series: req.body.series
    };
    Movie.findOne({_id: _id}, {category_tva: 1}, (err, movie) => {
        if ( err ) res.status(500).json(err);
        else {
            Movie.findOneAndUpdate({_id: _id}, newMovie, (err2, movie2) => {
                if ( err2 ) res.status(500).json(err2);
                else if ( category_tva == movie.category_tva ) res.json(movie2);
                else {
                    Tva.findOneAndUpdate({_id: movie.category_tva}, {category_movie: null}, (err3, tva) => {
                        Tva.findOneAndUpdate({_id: category_tva}, {category_movie: movie._id}, (err4, tva2) => {
                            if ( err3 ) res.status(500).json(err3);
                            else if ( err4 ) res.status(500).json(err4);
                            else res.json(movie2);
                        });
                    });
                }
            });
        }
    });
});

router.delete('/:_id', (req, res, next) => {
    Movie.findOneAndDelete({_id: req.params._id}, (err, movie) => {
        if ( err ) res.status(500).json(err);
        else {
            Tva.findOneAndUpdate({_id: movie.category_tva}, {category_movie: null}, (err, tva) => {
                if ( err ) res.status(500).json(err);
                else res.status(204).json(null);
            });
        }
    });
});

module.exports = router;
