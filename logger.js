
console.log(__filename);
console.log(__dirname);

const EventEmitter = require('events');

const url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message){
        // Sends an HTTP request
        console.log(message);
    
        // Raised an event
        this.emit('messageLogged', {id: 1, url: url});
    }    
}

// module.exports.log = log;
// module.exports = log;
// module.exports.loggerUrl = url;

module.exports = Logger;