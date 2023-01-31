const http = require('http');
const displayContent = require("./routes");
const colors = require('colors');

const server = http.createServer(displayContent);

server.listen(3001);

console.log('hello'.green);

