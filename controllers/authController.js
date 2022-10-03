const express = require('express')

exports.getIndex = (req, res) => {
    try {
        res.render('index', {
            title: 'Index'
        })
    } catch (err) {
        console.error(err)
    }
}