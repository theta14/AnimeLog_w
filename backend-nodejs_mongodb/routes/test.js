const express = require('express');
const router = express.Router();
const Mal = require('node-myanimelist').Mal;

router.get('/:mal_id', async (req, res, next) => {
    res.send();
    let value = await Mal.anime(req.params.mal_id);
    console.log(value);
    // let arr = value.broadcast.split(' ');
    // let broadcast = {
    //     time: arr[2]
    // };
    // for (let [i, day] of ['Sundays', 'Mondays', 'Tuesdays', 'Wednesdays', 'Thursday', 'Fridays', 'Saturdays'].entries()) {
    //     if ( day == arr[0] ) {
    //         broadcast.day = i;
    //         break;
    //     }
    // }
    // console.log(broadcast);
});

module.exports = router;
