const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        /*resolve({
            name:"Peter",
            age: 33
        })}, 5000)*/

        reject('something went wrong!')


}) 
});

console.log("before");

promise.then((data)=>{
    console.log("1",data)
}).catch((e)=>{console.log(e)});

promise.then((data)=>{
    console.log("2",data)
}).catch((e)=>{console.log(e)});;

console.log("after");