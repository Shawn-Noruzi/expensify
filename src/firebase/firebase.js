// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from 'firebase';



// Add the Firebase services that you want to use

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain:  process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL:  process.env.FIREBASE_DATABASE_URL,
  projectId:  process.env.FIREBASE_PROJECT_ID,
  storageBucket:  process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId:  process.env.FIREBASE_MESSAGING_SENDER_ID
};


firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// //child_removed
// database.ref("expenses").on("child_removed", snapshot => {
//   console.log("child removed");
//   console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref("expenses").on("child_changed", snapshot => {
//   console.log("child edited");
//   console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref("expenses").on("child_added", snapshot => {
//   console.log("child added");
//   console.log(snapshot.key, snapshot.val());
// });

//// subscription to array changes
// database.ref("expenses").on("value", snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

//// creating an array + pushing data into the array in FB
// database.ref("expenses").push({
//   description: "Bill 1",
//   note: "this is a note",
//   amount: "$45.69",
//   createdAt: "june 25th 2019"
// });

// database.ref("expenses").push({
//   description: "Bill 2",
//   note: "this is another note",
//   amount: "$4511.69",
//   createdAt: "june 26th 2019"
// });

//database.ref('notes').push({
// title: 'topics',
// body: 'i did my hwk'
// });

// database.ref().on(
//   "value",
//   snapshot => {
//     const data = snapshot.val();
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
//   },
//   e => {
//     console.log("fetch failed", e);
//   }
// );

// database.ref("job/company").set("bellapizza");

////Setting up a subscription/turning it off
// const onValueChange = database.ref().on('value', (snapshot) => {
// console.log(snapshot.val());
// }, (e) => {
//     console.log('Error fetching Data',e);
// });

// setTimeout(() => {
//     database.ref('age').set('46');
// }, 700);

//// unsubs
// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// }, 1400);

// setTimeout(() => {
//     database.ref('age').set('7');
// }, 2100);

//// fetching data
// database.ref('location/city').once('value').then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);

// }).catch((e)=> {
//     console.log('error fetching data', e)
// })

//// setting data, removing data, setting then+catch if it data sync works/doesnt, how to handle nested objects in a database
// database
//   .ref()
//   .set({
//     name: "shawn",
//     age: "15",
//     stressLevel: 6,
//     job: {
//         title: 'SWE',
//         company: 'google'
//     },
//     location: {
//       place: "somewhere",
//       street: "21st street"
//     }
//   })
//   .then(() => {
//     console.log("Data is Saved");
//   })
//   .catch(e => {
//     console.log("Data sync failed --- ", e);
//   });

// //   database.ref('location/street').remove().then(()=> {
// //       console.log('Remove succeeded');
// //   }).catch((e)=> {
// //       console.log('Remove unsuccessful', e);
// //   });

// //set(null) removes with less code instead of having to remove()

//   database.ref().update({
//       stressLevel: 9,
//       'job/company': 'amazon',
//       'location/city': 'seattle'
//   })
