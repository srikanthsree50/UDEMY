
 const fs = require('fs');
 const os = require('os');
 const _ = require('lodash');
 const yargs = require('yargs');

 const notes = require('./notes');

const argv = yargs.argv;
var command = argv._[0];//process.argv[2];


if(command === 'add')
{
 var note = notes.addNote(argv.title,argv.body);
 if(note)
 {
    console.log('note created......');
    notes.logNote(note);
 }
 else
 {
    console.log('note already taken......');
 }
}
else if(command === 'list')
{
 var allNotes = notes.getAll();
 console.log(`Printing ${allNotes.length} note(s).`);
 allNotes.forEach((note) => notes.logNote(note));
}

else if(command === 'read')
{
  var note =  notes.getNote(argv.title);
  if(note)
  {
console.log('note  found....');
notes.logNote(note);
  }
  else{
console.log('note not found');
  }
}

else if(command === 'remove')
{
   var noteRemoved = notes.removeNote(argv.title);
   var message = noteRemoved ? 'note was removed' : 'note not found';
   console.log(message);
}
else
{
    console.log('command not recognized');
}