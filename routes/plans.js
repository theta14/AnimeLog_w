var express = require('express');
var router = express.Router();
const Plan = require('../models/plan');

router.get('/', function(req, res, next) {
    Plan.find({}, (err, plans) => {
        if ( err ) res.status(500).json(err);
        else res.json(plans);
    });
});

router.get('/:_id', (req, res, next) => {
    Plan.findOne({_id: req.params._id}, (err, plan) => {
        if ( err ) res.status(500).json(err);
        else res.json(plan);
    });
});

router.post('/', (req, res, next) => {
    const newPlan = new Plan({
        type: req.body.type,
        title: req.body.title,
        memo: req.body.memo,
        mal_id: req.body.mal_id
    });
    Plan.addPlan(newPlan, (err, plan) => {
        if ( err ) res.status(500).json(err);
        else res.status(201).json(plan);
    });
});

router.put('/:_id', (req, res, next) => {
    const newPlan = {
        type: req.body.type,
        title: req.body.title,
        memo: req.body.memo,
        mal_id: req.body.mal_id
    };
    Plan.findOneAndUpdate({_id: req.params._id}, newPlan, (err, plan) => {
        if ( err ) res.status(500).json(err);
        else res.json(plan);
    });
});

router.delete('/:_id', (req, res, next) => {
    Plan.findOneAndDelete({_id: req.params._id}, (err, plan) => {
        if ( err ) res.status(500).json(err);
        else res.status(204).json(null);
    });
});

module.exports = router;
