



const fs = require("fs");

fs.readFile("Majic.js", 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
})

const data = fs.readFileSync('test.txt', {encoding:'utf-8', flag:'r'});