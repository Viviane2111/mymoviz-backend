var express = require("express");
var router = express.Router();

const URL_TMDB = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}`;

router.get("/movies", (req, res) => {
  fetch(URL_TMDB)
    .then((response) => response.json())
    .then((apiData) => {
      res.json({ movies: apiData.results });
    });
});

module.exports = router;
