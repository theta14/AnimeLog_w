const mongoose = require('mongoose');

const PlanSchema = mongoose.Schema({
  type: String,   // 'tva' or 'movie'
  title: Object,
  memo: String,
  mal_id: Number,
  aired: String,  // the first aired date
  img: String,
  studios: Array
});

module.exports = mongoose.model('Plan', PlanSchema);
