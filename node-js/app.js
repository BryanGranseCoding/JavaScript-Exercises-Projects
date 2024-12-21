function helloDev(name){
    console.log('Hello ' + name + ' Dev');
}
helloDev('Bryan');

//load module 
const log = require('./logger');
// calling the function in other file logger.js /for error try to use JShint
log('message');// logger.log('message') incase you export module from logger.js with just a direct function log()
//console.log(logger);