import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyABGiUKyTnHIri7HFFM96FhIjb8se_TUdM",
    authDomain: "expensify-bd830.firebaseapp.com",
    databaseURL: "https://expensify-bd830.firebaseio.com",
    projectId: "expensify-bd830",
    storageBucket: "expensify-bd830.appspot.com",
    messagingSenderId: "327196891058",
    appId: "1:327196891058:web:50a32b184745fd2415b6ab",
    measurementId: "G-QRHYLYV77P"
  };

  firebase.initializeApp(firebaseConfig);


  const database= firebase.database();

  export {firebase, database as default };

  // database.ref('expenses')
  // .once('value')
  // .then((snapshot)=>{
  //   const expenses =[]
  // snapshot.forEach((childSnapshot) => { expenses.push({
  //   id:childSnapshot.key,
  //   ...childSnapshot.val()

    
  // })})

  // console.log(expenses);
  // })

  // database.ref('expenses').on('value',(snapshot)=>{

  // const expenses =[]
  // snapshot.forEach((childSnapshot) => { expenses.push({
  //   id:childSnapshot.key,
  //   ...childSnapshot.val()

  // })})

  
  // console.log(expenses);

  // })




  // database.ref('expenses').push({
  //  description: 'rent',
  //   amount: 15455,
  //   createAt: 56647789652,
  //   note: ''
  // })



 

  // const firebaseNotes= {
  //   notes: {
  //     jbjhbjhbj:{
  //       title: 'first note',
  //       body: 'my note'
  //     },
  //     hfcfhdsjgj:{
  //       title: 'second note',
  //       body: 'my note'

  //     }
    
    
    
    
  //   }


  // }

  // const notes= [{
  //   id: '12',
  //   title: 'first note',
  //   body: 'my note'
  // }, {id: '14',
  //     title: 'second note',
  //     body: 'my note'}];

  // database.ref('notes').set(notes);
  // database.ref().on('value', (snapshot)=>{

  //   const val = snapshot.val();

  //   console.log( `${val.name} is a ${val.job.title} at ${val.job.company}`)

  // })


//  database.ref().set({
// name: 'peter madziyire',
// age: 33,
// stressLevel: 10,
// job: {title:"Credit Risk Manager",
//     company:"Ocean Media"},
// location : {
//     city: "London",
//     country: "UK"
// }

//   }).then(()=>{console.log('data is saved!')}).catch((e)=>{console.log("this failed", e)}); 

//   //database.ref('age').set(32)

//   database.ref("location/city").set("Essex")

//   database.ref("attribute").set({
//     height: "6.3",
//     weight: "85kg"

//   }).then(()=>{console.log("Attribute Added")}).catch((e)=>{console.log("This has failed,",e)})

//   database.ref("isSingle")
//   .remove()
//   .then(()=>{console.log("this has been removed")})
//   .catch((e)=> {"this has failed", e});

// database.ref().update({

//     stresslevel: 6,
//     "job/company": "Amazon",
//     "location/city":"London"
// })

// database.ref("location/city")
// .once('value' )
// .then((snapshopt)=>{
// const val= snapshopt.val();
// console.log(val);
// })
// .catch((e)=>{console.log("error fetching",e)})



// const onValChange= database.ref()
// .on('value', (snapshot)=>{console.log(snapshot.val())}, (e)=>{console.log('error with data fetching', e)})


// setTimeout(()=>{
//     database.ref('age').set(33)},3000)

//     setTimeout(()=>{
//         database.ref().off(onValChange);}
//         ,7000)


// setTimeout(()=>{
//             database.ref('age').set(29)},10000)