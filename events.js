
// Builtin Events

const fs = require('fs')

const myRead = fs.createReadStream('./input.txt')

myRead.on('open', () =>{
    console.log('Input File is Open')
})



// Custom Events

const event = require('events');

const eventEmitter = new event.EventEmitter();

// Define the 'play' event listener
eventEmitter.on('play', (type) => {
    console.log(`I'm Playing ${type}`);
});

// Emit the 'play' event with a parameter
eventEmitter.emit('play', 'Cricket');

