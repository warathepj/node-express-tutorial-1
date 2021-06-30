




const fs = require("fs");

const content = "Node Application";

fs.writeFile('test.txt', content, { flag: 'a+' }, err => {
    if(err) {
        console.log(err);
        return
    }
    console.log("Successfully Done!");
});