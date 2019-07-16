var express = require('express');
var router = express.Router();
const Watching = require('../models/watching');

router.get('/', function(req, res, next) {
    Watching.find({}, (err, watchings) => {
        if ( err ) res.status(500).json(err);
        else res.json(watchings);
    });
});

router.get('/:_id', (req, res, next) => {
    Watching.findOne({_id: req.params._id}, (err, watching) => {
        if ( err ) res.status(500).json(err);
        else res.json(watching);
    });
});

router.post('/', (req, res, next) => {
    const newWatching = new Watching({
        type: req.body.type,
        title: req.body.title,
        memo: req.body.memo,
        mal_id: req.body.mal_id,
        ohli_id: req.body.ohli_id,
        img: req.body.img
    });
    Watching.addWatching(newWatching, (err, watching) => {
        if ( err ) res.status(500).json(err);
        else res.status(201).json(watching);
    });
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
    Watching.findOneAndUpdate({_id: req.params._id}, newWatching, (err, watching) => {
        if ( err ) res.status(500).json(err);
        else res.json(watching);
    });
});

router.delete('/:_id', (req, res, next) => {
    Watching.findOneAndDelete({_id: req.params._id}, (err, watching) => {
        if ( err ) res.status(500).json(err);
        else res.status(204).json(null);
    });
});

module.exports = router;
