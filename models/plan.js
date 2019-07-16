const mongoose = require('mongoose');

const PlanSchema = mongoose.Schema({
  type: String,   // 'tva' or 'movie'
  title: String,  // temporary represented title, it's not gonna be used when becomes a TVA or Movie
  memo: String,
  mal_id: Number
});

module.exports = mongoose.model('Plan', PlanSchema);

module.exports.addPlan = (newPlan, callback) => {
  newPlan.save(callback);
}
