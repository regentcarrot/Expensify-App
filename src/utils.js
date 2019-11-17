console.log("utils is running !");

//export- named export

const square= (x)=> x*x;

const add= (a,b)=>a+b;

export {square, add, isadult, subtract as default};

const isadult = (a)=> a>18;

//export- default export

const subtract= (a,b)=> a-b;