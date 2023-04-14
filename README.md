# Note Taker Starter Code

## Description
An application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file. Users can create a new note, read notes, update notes, and delete notes at their will using the app.


## User Story
```md
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria
```md
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

## How we accomplished this

## By: 

### in JavaScript:

Creating a file for our database in javascript. created constants for creating a file, requires fs, util, and UUID(need to install package)
and import from npmjs.
Render a read/write file function from fs asynchronous
via promisify by util.
Creating a class for database, and in there method to read file, method to write note to file, helper method to read all notes from file returning json parsed notes, and a method for creating a note with id.
Using a chain of promises, reading notes using spread operator, with
a new note being added to our file.
Then a method for deleting a note, using note id to select all notes, but by instead filter out by id by selecting elements that
do not match id, deleting the inputted id from all the notes.
Then exporting module as new database object.
We then have to create our routes, one for api and one for html.
For our api route we are creating a router constant that 
will require our express constant, and our database.
We implement a GET Request for notes, a POST Request for notes, 
a DELETE Request for notes (specifying by id).
Then we are exporting our module as router const.
For our html routes, we are reating a router for express, then creating a const to require our path.
In this route we have GET Route for homepage in notes app, and a 
GET Route that redirects us to the index. 
We then export our router to be used in other classes/files.
For our server, we have imported our requirements for this project
setting constants to require express, our routes for the api and html 
and a connection 3001 port for our app to use. 
Declare a express const for us to use as app. 
Include middleware for parsing JSON and urlencoded form data.
Then including a listener for our app and returning message that app is listening at our port and connected to the server.


## Completed Application Screen Recording:
![NoteTakerDemo](./notesappdemo.gif) 

## Link to Github Repo:

https://github.com/shababrc/Note-Taker

## Link to Deployed Site:


## Credits:
Credits to the rest of the ucla bootcamp class for additional help on this assignment. Credit to Bryan and Shawn from the teaching staff, and credits to tutor Irina Kudosova.

## License
MIT

