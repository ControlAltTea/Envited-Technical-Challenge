const express = require("express");
const router = express.Router();
const path = require('path')

exports.getIndex = (req, res) => {
    console.log(`reached index`);
    res.sendFile('index')
}

exports.getCreate = (req, res) => {
    res.sendFile(path.join(__dirname + '/../public/create.html'));
}

exports.getEvents = (req, res) => {
    console.log(path.join(__dirname + '/../public/events.html'));
    res.sendFile(path.join(__dirname + '/../public/events.html'));
}