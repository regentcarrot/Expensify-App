import uuid from 'uuid';
import database from '../firebase/firebase';

//component  calls ction generator
//action generator returns object
//component dispatches object
//redux store changes

//-----synchronis 

//component calls action generator
//action generator returns function
//component dispatches function (?)
//function runs (has the ability to dispatch other actions and whatever it wants)

//ADD EXPENSE
export const addexpense = ({description= '', 
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


export const startAddExpense = (expenseData={})=> {

    return(dispatch)=>{
      
      
  const {
    description= '',  
    note= '',
    amount= 0,
    createAt= 0}= expenseData;

const expense= {description, note, amount, createAt}
    
        
        database.ref('expenses').push(expense)
        .then((ref)=>{ dispatch(addexpense({id:ref.key,...expense}))})



    }


}

// REMOVE EXPENSE

export const removeexpense = (test)=> ({
    type:'REMOVE_EXPENSE',
        test

})

//START REMOVE EXPENSE

export const startRemoveExpense = (id)=> {

    return (dispatch)=> {
        return database.ref(`expenses/${id}`).remove().then(()=> {
            dispatch(removeexpense(id))

        })

    }

}



//EDIT EXPENSE

export const editexpense= (id, updates)=> ({
type: "EDIT_EXPENSE",
id,
updates

})

//START EDIT EXPENSE
export const startEditExpense = (id, updates)=> {
return(dispatch)=> {
return database.ref(`expenses/${id}`).update(updates).then(()=>{

   dispatch(editexpense(id, updates)) 
})

}

}

//SET_EXPENSES
export const setExpenses = (expenses)=>({
    type: 'SET_EXPENSES',
    expenses
})

//fetch all expense data once
//parse that data into the array
//dispatch SET_EXPENSES

export const startSetExpenses = ()=> {

    return(dispatch)=>{ 
return database.ref('expenses').once('value').then((snapshot)=> {
const expenses = [];

snapshot.forEach((childsnapshot)=> {expenses.push({id: childsnapshot.key,...childsnapshot.val()})})

dispatch(setExpenses(expenses));

})
    
    }
}
