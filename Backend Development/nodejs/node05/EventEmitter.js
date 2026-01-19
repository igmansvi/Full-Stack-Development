const Event = require('events');

let event = new Event();

event.addListener('get', (message) => {
    console.log(`message: ${message}`)
})

event.emit('get', 'event emitter fetched');