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

import {settextfilter} from './actions/filters';

import getvisibleexpenses from './selectors/expenses';

import ExpenseListFilters from'./components/ExpenseListFilters';

const store= configureStore();

//addexpense like waterbill/ gasbill

store.dispatch(addexpense({description:'waterbill', barber:'peter', amount:65000}));
//settextfilter= 'bill'

store.dispatch(addexpense({description:'rent', barber:'gabriella', amount:35000, createAt:55}))

store.dispatch(addexpense({description:'tax', barber:'beddy', amount:35000, createAt:55}))

store.dispatch(addexpense({description:'bill', barber:'sienna', amount:35000, createAt:125, }))


//getvisibleexpenses- print visibleones to the screen.
//store.dispatch(settextfilter('bill'));

/*setTimeout(()=> {
    store.dispatch(settextfilter('water'))
}, 3000)*/

    const state= store.getState();
 
    const visibleExpenses= getvisibleexpenses(state.expenses,state.filters)
    
     console.log(visibleExpenses);
 

     const jsx = (
<Provider store={store}>
<AppRouter>
<ExpenseListFilters/>
</AppRouter>
</Provider>
        
     );


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
 
 ReactDOM.render(jsx , document.getElementById("app"));



