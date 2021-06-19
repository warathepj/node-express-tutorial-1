


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
    let data = '';
    console.log("Stataus Code: ", res.statusCode);

    res.on('data', (chunk) => {
        data += chunk;
    })

    res.on('end', () => {
        console.log("Body: ", JSON.parse(data));
    })
})