
const fs = require('fs');

var fetchNotes = () =>
{

    try{

        var Notestring = fs.readFileSync('notesData.json');
        return JSON.parse(Notestring);
    }
    catch(e)
    {
    return [];
    }
}


var saveNotes = (notes) =>
{
    fs.writeFileSync('notesData.json',JSON.stringify(notes));
}

var addNote = (title,body) => {
 var notes = fetchNotes();
 var note = {
     title,
     body
 };


var duplicateNotes = notes.filter((note) => note.title === title);

if(duplicateNotes.length === 0)
{

    notes.push(note);
  saveNotes(notes);
    return note;
}
};

var getAll = () => {
return fetchNotes();
}


var getNote = (title) => {
    var notes = fetchNotes();
    var filteredNote = notes.filter((note) =>  note.title === title);
    return filteredNote[0];
    };

    
var removeNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
    };

var logNote = (note) => {
    console.log('--');
    console.log(`title: ${note.title}`);
    console.log(`body: ${note.body}`);
};

    module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};