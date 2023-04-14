//creating a router for express
//then creating a const to require our path
const router = require("express").Router();
const path = require('path');

//GET Route for homepage
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, "../public/notes.html"))
);

// GET Route that redirects us to the index
router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);

//export our router
module.exports = router;