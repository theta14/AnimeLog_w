var express = require('express');
var router = express.Router();
const Movie = require('../models/movie');
const Tva = require('../models/tva');

router.get('/', function(req, res, next) {
    Movie.find({})
        .then(movies => res.json(movies))
        .catch(err => res.status(500).json(err));
});

router.get('/count', async (req, res, next) => {
    let count = await Movie.estimatedDocumentCount();
    res.json(count);
});

router.get('/random', async (req, res, next) => {
    let count = await Movie.estimatedDocumentCount();
    let rand = Math.floor(Math.random() * count);
    let item = await Movie.findOne({}, null, {skip: rand});
    res.json(item);
});

router.get('/:_id', (req, res, next) => {
    Movie.findOne({_id: req.params._id})
        .then(movie => res.json(movie))
        .catch(err => res.status(500).json(err));
});

router.post('/', (req, res, next) => {
    const category_tva = req.body.category_tva;
    const newMovie = new Movie({
        category: req.body.category,
        category_tva: category_tva,
        series: req.body.series
    });
    newMovie.save()
        .then(async (movie) => {
            await Tva.findOneAndUpdate({_id: category_tva}, {category_movie: movie._id});
            res.status(201).json(movie);
        })
        .catch(err => res.status(500).json(err));
});

router.put('/:_id', async (req, res, next) => {
    const _id = req.params._id;
    const category_tva = req.body.category_tva;
    const newMovie = {
        category: req.body.category,
        category_tva: category_tva,
        series: req.body.series
    };
    try {
        const movie = await Movie.findOne({_id: _id}, {category_tva: 1});
        const movie2 = await Movie.findOneAndUpdate({_id: _id}, newMovie);
        if ( category_tva == movie.category_tva ) res.json(movie2);
        else {
            await Tva.findOneAndUpdate({_id: movie.category_tva}, {category_movie: null});
            await Tva.findOneAndUpdate({_id: category_tva}, {category_movie: movie._id});
        }

    } catch(err) { res.status(500).json(err) }
});

router.delete('/:_id/:series/:sequence', async (req, res, next) => {
    const _id = req.params._id;
    const series = req.params.series;
    const sequence = req.params.sequence;
    try {
        const movie = await Movie.findOne({_id: _id}, {series: 1, category_tva: 1});
        if ( movie.series.length == 1 && movie.series[0].sequences.length == 1 ) {
            if ( series == 0 && sequence == 0 ) {
                await Movie.findOneAndDelete({_id: _id});
                await Tva.findOneAndUpdate({_id: movie.category_tva}, {category_movie: null});
                res.status(204).json(null);
            } else res.status(400).json({message: 'could not remove the item'});
        } else if ( movie.series[series].length == 0 ) {
            if ( sequence == 0 ) {
                movie.series.splice(series, 1);
                await Movie.findOneAndUpdate({_id: _id}, {series: movie.series});
                res.status(204).json(null);
            } else res.status(400).json({message: 'could not remove the item'});
        } else {
            movie.series[series].sequences.splice(sequence, 1);
            await Movie.findOneAndUpdate({_id: _id}, {series: movie.series});
            res.status(204).json(null);
        }

    } catch(err) { res.status(500).json(err) }
});

module.exports = router;
