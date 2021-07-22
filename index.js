




const http = require("http");
const fs = require("fs");

const server = http.createServer(function(req, res) {
    const stream = fs.createReadStream("test.json");
    stream.pipe(res);
    // fs.readFile("test.json", (err, data) =>{
    //     res.end(data);
    // })
})
server.listen(3000, () => {console.log("port 3000")});
