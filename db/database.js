// created file
// requires fs, util, and UUID(need to install package)
// and import from npmjs
const fs = require("fs");
const util = require("util");
const { v4: uuidv4 } = require('uuid');

// render a read/write file function from fs asynchronous
// via promisify by util
const readFileAsynchronous = util.promisify(fs.readFile);
const writeFileAsynchronous = util.promisify(fs.writeFile);

// create class for database

class Database {
    //need methods for read, write, read all, create, and
    //delete

    // method to read file,  
    readFs() {
        return readFileAsynchronous("db/db.json", "utf-8");
    }

    // method to write note to file
    writeFs(note) {
        return writeFileAsynchronous("db/db.json", JSON.stringify(note));
    }

    // helper method to read all notes from file
    // returning a JSON parsed notes
    readAllNotes() {
        return this.readFs().then(notes => JSON.parse(notes));
    }

    //method for creating a note
    createNote(note) {
        //creating a new note with id
        const newNote = {
            id: uuidv4(),
            title: note.title,
            text: note.text,
        }
        // chain of promises
        // reading notes using spread operator, with
        // new note being added to our file
        return this.readAllNotes().then(notes => [...notes, newNote]).then(notes => this.writeFs(notes)).then(() => this.readAllNotes());
    }
    // method for deleting a note, using note id 
    // instead filter out by id by selecting elements that
    // do not match id
    deleteNote(id) {
        return this.readAllNotes().then(notes => notes.filter(note => note.id != id)).then(notes => this.writeFs(notes)).then(() => this.readAllNotes());
    }

}

// exporting module as new database object
module.exports = new Database();

