const promise = new Promise((resolve, reject) => {
setTimeout(() => {
    // resolve("This is my resolved data");
    reject('error msg');
}, 1500);

});

promise.then((data) => {
console.log(data);
}).catch( (error) => {
console.log('error: ', error )
});

//firebase will create promises for us so not really needed to make them. 
//promises = syncs up asynchronous tasks
