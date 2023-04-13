//creating a router constant that 
//will require our express constant
const router = require("express").Router();
const Database = require("../db/database");

//GET Request for notes
router.get('/notes', (req, res) =>
  Database.readAllNotes().then(notes => res.json(notes)).catch(err => res.json(err))
);
//POST Request for notes
router.post('/notes', (req, res) =>
  Database.createNote(req.body).then(notes => res.json(notes)).catch(err => res.json(err))
);
//DELETE Request for notes (specifying by id)
router.delete('/notes/:id', (req, res) =>
  Database.deleteNote(req.params.id).then(notes => res.json(notes)).catch(err => res.json(err))
);

//exporging our module as router const
module.exports = router;
