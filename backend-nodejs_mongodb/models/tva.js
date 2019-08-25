const mongoose = require('mongoose');

const TvaSchema = mongoose.Schema({
  category: String,
  category_movie: String, // _id of movie category, if no movie then null
  series: Array
  /*
    title: String,
    memo: String,
    key: Number,
    sequences: Array {
        title: {
            eng: String,
            kor: String,
            jpn: String,
            rv: String
        },
        premiered: {
            year: Number,
            quarter: Number
        },
        aired: {
            start: String,
            end: String
        },
        season: Number,
        episodes: Number,
        studios: Array,
        memo: String,
        mal_id: Number,
        img: String // url of the img
    }
  */
});

module.exports = mongoose.model('Tva', TvaSchema);
