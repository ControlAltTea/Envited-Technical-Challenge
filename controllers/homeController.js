const express = require("express");
const router = express.Router();


exports.getIndex = (req, res) => {
    console.log(`reached index`);
    res.render('index',
        { title: 'Index' }
    )
    // try {
    //     console.log(`reached login`);
    //     res.render('login',
    //         { layout: 'login' }
    //     )
    // } catch (err) {
    //     console.log(`BEEP`)
    //     console.error(err)
    //     res.render('error/404')
    // }
}

module.exports = router;