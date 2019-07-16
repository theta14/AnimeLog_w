const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({
  category: String,
  category_tva: String,  // _id of tva category
  series: Array
  /*
    memo: String,
    title: String,    // title of tva series
    key: Number,
    sequences: Array {
        title: {
            eng: String,
            kor: String,
            jpn: String,
            rv: String
        },
        aired: String,
        order: Number,
        studios: Array,
        memo: String,
        mal_id: Number,
        img: String // url of the img
    }
  */
});

module.exports = mongoose.model('Movie', MovieSchema);

module.exports.addMovie = (newMovie, callback) => {
  newMovie.save(callback);
}
