const mongoose = require('mongoose');

const WatchingSchema = mongoose.Schema({
  type: String, // 'tva' or 'movie'
  title: String,  // represented title, not gonna be saved after watched
  memo: String,
  mal_id: Number,
  ohli_id: Number,  // id of OHLI, to take a subtitle, if it is not being airing it would be null
  img: String
});

module.exports = mongoose.model('Watching', WatchingSchema);

module.exports.addWatching = (newWatching, callback) => {
  newWatching.save(callback);
}
