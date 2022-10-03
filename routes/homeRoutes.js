const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");

router.get("/", homeController.getIndex);
router.get("/events", homeController.getEvents);
module.exports = router