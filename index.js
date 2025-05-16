const http = require("http");
const myServer = http.createServer((req, res) => {
    console.log("new request received");
    console.log("hello from server");  
});

myServer.listen(8003, () => console.log("server started"));