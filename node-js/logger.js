var url = 'http://mylogger.io/log';

//calling this function to app.js make this accessible using EXPORT MODULE below
function log(message){
    // Send an HTTP request
    console.log(message);
}
//export to make it public and accessible to other file
//module.exports.log = log;
module.exports = log; //direct export with just a function
//module.exports.endPoint = url;