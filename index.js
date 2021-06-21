


const axios = require("axios");

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

axios.post('https://reqres.in/api/users', data).then(res => {
    console.log(`Status Code :${res.status}`);
    console.log(`Body : ${res.data}`);
}).catch(err => {
    console.log();
})