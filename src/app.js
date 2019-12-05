//import './utils.js'

/*import subtract, {square, add, isadult} from './utils.js';

const PeterAge= 33;

console.log("app.js is running!!!!")
console.log(square(4))
console.log(add(100,23))
console.log(isadult(PeterAge))
console.log(subtract(100,81)); 

import validator from 'validator';

console.log(validator.isEmail('test'))

console.log(validator.isLowercase('test'))*/

import React from 'react';

import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';

import'normalize.css/normalize.css';

import './styles/styles.scss';

import configureStore from './store/configureStore'

import {addexpense} from './actions/expenses';

import {startSetExpenses} from './actions/expenses';

import getvisibleexpenses from './selectors/expenses';

import ExpenseListFilters from'./components/ExpenseListFilters';

import './firebase/firebase';
//import './playground/promises';

const store= configureStore();

console.log('test')

//addexpense like waterbill/ gasbill

// store.dispatch(addexpense({description:'waterbill', amount:65000}));


// store.dispatch(addexpense({description:'rent', amount:35000, createAt:55}))


// store.dispatch(addexpense({description:'bill', amount:35000, createAt:125, }))


//getvisibleexpenses- print visibleones to the screen.
//store.dispatch(settextfilter('bill'));

/*setTimeout(()=> {
    store.dispatch(settextfilter('water'))
}, 3000)*/

    const state= store.getState();
 
    const visibleExpenses= getvisibleexpenses(state.expenses,state.filters)
    
     
 

     const jsx = (
<Provider store={store}>
<AppRouter>
<ExpenseListFilters/>
</AppRouter>
</Provider>
        
     );

     ReactDOM.render(<p>loading...</p> , document.getElementById("app"));

     store.dispatch(startSetExpenses()).then(()=>{ ReactDOM.render(jsx , document.getElementById("app"));})
/*const Layout= (props)=> {

    return <div>
    <p>header</p>
    {props.children}
    <p>footer</p>
    </div>
}
 
 /*class Header extends React.Component {
 
 
     render () {
 
 return <div>{this.props.testing} </div>
 
 
     }
 
 
 }*/


 
 /*class Action extends React.Component{
 
 
     render() {
     
         return <div> <button disabled= {!this.props.hasoptions} onClick= {this.props.handleclick}> What Should i eat?</button></div>
     
     }
     
     
     } */
 
    
 
 /* class Options extends React.Component{
 
 
 
 render() {
 
     return <div> 
     <button onClick={this.props.handleremove}> Remove All</button>
 
     
 {this.props.options.map((option)=> <Option key={option} prop1={option}/>)} 
 
     </div>
 
 
 }
 
 
 } */
 

 
 
 
 /*class Option extends React.Component{
 
 
 render () {
 
     return <div>
     {this.props.prop1} </div>
 
 }
 
 }*/
 
 
 
 
 
     /*const User =(props)=>{
     return (<div>
         <p>Name: {props.name} </p>
         <p>Age: {props.age}</p>
         
         
         </div>
 
 
 
     )};*/
 




