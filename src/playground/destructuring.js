console.log('hey')

const person = {
name:'Peter',
age: 33,
town: 'Romford',
height:'6.3ft'

};


const {name:tag = 'anonymous', age}= person;

console.log(`My name is ${tag}, i am ${age} years old`);


// array dest

const address= [, 'romford', 'essex','rm7 8rd'];

const [street= 'a street', town, region, postcode]= address;

console.log(`i live on ${street}. It is in ${town}`)


// test
const item= ['coffee(hot)','£2','£3','£4'];

const [coffee='hotdrink', small, medium, large]= item;

console.log(`The price for a medium ${coffee} is ${medium}`)



