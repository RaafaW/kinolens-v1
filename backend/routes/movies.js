const express = require("express");
const { findMovieByDescription } = require("../controllers/movieController");
const router = express.Router();

router.post("/find", findMovieByDescription);

module.exports = router;
