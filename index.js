


const http = require("http");

const data = JSON.stringify({
    name: "John Doe",
    Job: "Content Writer"
});

const options = {
    hostname: 'reqres.in',
    path: '/api/users',
    method: 'POST',
    header: {
        'Content-Type': 'application/json'
    }
}

// request
const req = http.request(options, () => {
    let data = 
})