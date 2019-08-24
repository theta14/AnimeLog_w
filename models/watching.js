const mongoose = require('mongoose');

const WatchingSchema = mongoose.Schema({
  type: String, // 'tva' or 'movie'
  title: Object,
  memo: String,
  mal_id: Number,
  ohli_id: Number,
  premiered: Object,
  aired: String,  // the first aired date
  img: String,
  studios: Array
});

module.exports = mongoose.model('Watching', WatchingSchema);
