var express = require('express');
var router = express.Router();
const Plan = require('../models/plan');

router.get('/', function(req, res, next) {
    Plan.find({})
        .then(plans => res.json(plans))
        .catch(err => res.status(500).json(err));
});

router.get('/count', async (req, res, next) => {
    const count = await Plan.countDocuments();
    res.json(count);
});

router.get('/:_id', (req, res, next) => {
    Plan.findOne({_id: req.params._id})
        .then(plan => res.json(plan))
        .catch(err => res.status(500).json(err));
});

router.post('/', (req, res, next) => {
    const newPlan = new Plan({
        type: req.body.type,
        title: req.body.title,
        memo: req.body.memo,
        mal_id: req.body.mal_id,
        img: req.body.img,
        aired: req.body.aired,
        studios: req.body.studios
    });
    newPlan.save()
        .then(plan => res.status(201).json(plan))
        .catch(err => res.status(500).json(err));
});

router.put('/:_id', (req, res, next) => {
    const newPlan = {
        type: req.body.type,
        title: req.body.title,
        memo: req.body.memo,
        mal_id: req.body.mal_id,
        img: req.body.img,
        aired: req.body.aired,
        studios: req.body.studios
    };
    Plan.findOneAndUpdate({_id: req.params._id}, newPlan)
        .then(plan => res.json(plan))
        .catch(err => res.status(500).json(err));
});

router.delete('/:_id', (req, res, next) => {
    Plan.findOneAndDelete({_id: req.params._id})
        .then(plan => res.status(204).json(null))
        .catch(err => res.status(500).json(err));
});

module.exports = router;
