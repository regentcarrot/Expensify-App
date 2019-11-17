import {createStore, combineReducers} from 'redux';

//ADD EXPENSE
const addexpense = ({description= '',
note= '',
amount= 0,
createAt= 0}={}) =>( {
type:'ADD_EXPENSE',
expense:{
id:'ghgb',
description,
note,
amount,
createAt
}


})

// REMOVE EXPENSE
//EDIT EXPENSE
//SET TEXT FILTER
//SORT BY DATE
//SORT BY AMOUNT
//SET START DATE
//SET END DATE


//expenses reducer

const expensearray= [];

const expenseReducer= (state=expensearray,action)=> {

    switch(action.type) {
    case 'ADD_EXPENSE':
        return [...state, action.expense];
        

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

default:
    return state;

}


}

    //store creation/ combinedred

const store= createStore(combineReducers({expenses: expenseReducer,
                                        filters: filterReducer
}));


store.subscribe(() => {
    console.log(store.getState());
  });

console.log(store.getState());

store.dispatch(addexpense({
description:'our description',
amount:2500
}))

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