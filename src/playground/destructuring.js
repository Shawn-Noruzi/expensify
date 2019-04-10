// //object destructuring 

// console.log('deconstructuring')

// const person = {
//     name:'andrew',
//     age:26,

//     location: {
//         city: 'phili',
//         temp: 92
//     }
// };
// const {name = 'anon',age} = person;
// //const name = person.name;

// console.log(`${name} is ${age}`);
// //renaming , default values
// const {city,temp: temperature} = person.location;
// console.log(`its ${temperature} in ${city}`);

// const book = {
//     title: 'ego',
//     author:'ryan',
//     publisher: {
        
//     }
// }

// const {title, author = 'anon'} = book;
// const {name: renamed = 'slefpublished'} = book.publisher;

// console.log(`its ${renamed} in ${title}`);

// //array destructing

const address = ['1299 s juniper st', 'phili', 'pensylvania', '19191']

const [,,state, zip] = address;

console.log(`You're in ${zip }in the state of ${state}`);