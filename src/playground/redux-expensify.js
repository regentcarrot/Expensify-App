import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

//ADD EXPENSE
const addexpense = ({description= '',
note= '',
amount= 0,
createAt= 0}={}) =>( {
type:'ADD_EXPENSE',
expense:{
id:uuid(),
description,
note,
amount,
createAt
}


})

// REMOVE EXPENSE

const removeexpense = (test)=> ({
    type:'REMOVE_EXPENSE',
        test

})
//EDIT EXPENSE

const editexpense= (id, updates)=> ({
type: "EDIT_EXPENSE",
id,
updates

})
//SET TEXT FILTER

const settextfilter= (text='')=> ({
type: 'SET_TEXT_FILTER',
text,


})
//SORT BY DATE
const sortbydate= ()=> ({
    type:'SORT_BY_DATE',
    
})
//SORT BY AMOUNT

const sortbyamount= ()=> ({
    type:'SORT_BY_AMOUNT',
   
})
//SET START DATE
const setstartdate= (start=undefined)=> ({
type:'SET_START_DATE',
start
})
//SET END DATE
const setenddate= (end=undefined)=> ({
    type:'SET_END_DATE',
    end,
    })

//expenses reducer

const expensearray= [];

const expenseReducer= (state=expensearray,action)=> {

    switch(action.type) {
    case 'ADD_EXPENSE':
        return [...state,action.expense];
    case 'REMOVE_EXPENSE':
        return state.filter(({id})=> {return id!==action.test });    
    case 'EDIT_EXPENSE':
        return state.map((expense)=>{

        if(expense.id===action.id) {
            return {...expense,...action.updates}

        }else {
            return expense;
        }
        })

        case 'GCHECK_EXPENSE':
                return state.map((expense)=>{
                    if (expense.checked===false){
                if(expense.id!==action.id) {
                    return {...expense,...action.uncheck}
        
                }else {
                    return expense;
                }}
                })  
    default:
    return state;
    
    }
    
    
    
    };
    //filter reducer
    //text=>, sort by =>date, startdate=>undefined, enddate=>undefined

    const filterReducerdefault= {text: '',
    sortby: 'date', //date or amount
    startdate: undefined,
    enddate: undefined};

const filterReducer = (state=filterReducerdefault, action) => {
switch(action.type) {
    case 'SET_TEXT_FILTER':
        return {...state,
            text:action.text};
    case 'SORT_BY_AMOUNT':
        return {...state,sortby:'amount'}; 
     case'SORT_BY_DATE':
        return {...state,sortby:'date'};
    case 'SET_START_DATE':
        return {...state,startdate:action.start};
        case 'SET_END_DATE':
                return {...state,startdate:action.end};

default:
    return state;

}


}

    //get visible expenses
   const getVisibleExpenses = (expenses, {text, sortby,startdate,enddate})=> {

  return  expenses.filter((expense)=> {
const startdatematch= typeof startdate!=='number'|| expense.createAt>=startdate;
const enddatematch= enddate===undefined|| expense.createAt<=enddate;
const textmatch=expense.description.toLowerCase().includes(text.toLowerCase());

return startdatematch && enddatematch && textmatch;
    }).sort((a,b)=> {
if (sortby==='date') {
return a.createAt<b.createAt?1:-1
} else if (sortby==='amount') {

    return a.amount<b.amount?1:-1



}




    })


   };


    //store creation/ combinedred

const store= createStore(combineReducers({expenses: expenseReducer,
                                        filters: filterReducer
}));


store.subscribe(() => {
   const state= store.getState();

   const visibleExpenses= getVisibleExpenses(state.expenses,state.filters)
   
    console.log(visibleExpenses);
  });



const expenseone= store.dispatch(addexpense({
description:'rent',
amount:4500,
createAt: 3000
}))

const expensetwo= store.dispatch(addexpense({
    description:'our description',
    amount:5500,
    createAt: 1000
    }))

    const expensethree= store.dispatch(addexpense({
        description:'coffee',
        amount:300,
        createAt: 500
        }))

/*store.dispatch(removeexpense(expenseone.expense.id));*/

store.dispatch(editexpense(expensetwo.expense.id, {amount:3000}))

store.dispatch(editexpense(expensetwo.expense.id, {checked:true}))

store.dispatch(editexpense(expensetwo.expense.id, {checked:false}))

//store.dispatch(settextfilter('description'));

store.dispatch(sortbyamount());
//store.dispatch(sortbydate());




  /*  console.log(expenseone) */

//store.dispatch(setstartdate(125));
//store.dispatch(setstartdate());
//store.dispatch(setenddate(1250));  

const demostore= {

    expenses: [{
        id: 'gdhdj',
        description: 'January Rent',
        note: 'This is the final payment',
        amount: 54500,
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sortby: 'amount', //date or amount
        startdate: undefined,
        enddate: undefined
    }

};

const user= {

    name:'Peter',
    age:33
    };
    
    console.log({...user})