// const log = require('./logger');

function sayHello(name){
    console.log('Hello ' + name);
}

// console.log(window);
// console.log(module);
sayHello('Utsav');

// console.log(logger);
// logger.log('New message');
// log('New message');

const path = require('path');
let pathObj = path.parse(__filename);
console.log(pathObj);

const os = require('os');
let totalMem = os.totalmem;
let freeMem = os.freemem;

// console.log('Total Memory: ' + totalMem);
// console.log('Free Memory: ' + freeMem);

//ES6
console.log(`Total Memeory: ${totalMem}`);
console.log(`Free Memeory: ${freeMem}`);

const fileSystem = require('fs');
const syncFiles = fileSystem.readdirSync('./');
console.log('Sync Files: ', syncFiles);

// Always use async
fileSystem.readdir('./', function(err, files) {
    if(err){
        console.log('Error: ', err);
    }else{
        console.log('Async Files: ', files);
    }
});

// Events
// const EventEmitter = require('events');
// const emitter = new EventEmitter();

//  emit measn making a noise or producing something, here signalling that an 
//  event has happened 

// Register a listener
// emitter.addListener

// emitter.on('messageLogged', function(arg){
//     console.log('Listener Called!!!! ', arg);
// });

// ES6
// emitter.on('messageLogged', arg => {
//     console.log('Listener Called!!!! ', arg);
// });

// Raised an event
// emitter.emit('messageLogged', {id: 1, url: 'http://testurl.com'});

const Logger = require('./logger');
const logger = new Logger();
logger.on('messageLogged', arg => {
    console.log('Listener Called!!!! ', arg);
});
logger.log('New Message!!');

//HTTP
const http = require('http');

// for socket programming

// const server = http.createServer();
// server.on('connection', (socket) => {
//     console.log('New Connection...');
// });

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        console.log('Hello World');
        res.write('Hello World');
        res.end();
    }

    if(req.url === '/api/numbers'){
        console.log(JSON.stringify([1, 2, 3]));
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000.....');

