




doSomething1()
    .then(() =>{
        return doSomething2().catch(err => {
            //handle error
            throw err //break the chain
        })
    })
    .then


// try {
//     console.log('Start try block');
//     throw new Error('Error message');
//     console.log('End try block');

// } catch (err) {
//     console.log('Error: ' + err);
// }