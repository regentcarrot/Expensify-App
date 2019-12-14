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

// ADD EXPENSE
// export const addexpense = ({description= '', 
// note= '',
// amount= 0,
// createAt= 0}={}) =>( {
// type:'ADD_EXPENSE',
// expense:{
// id:uuid(),
// description,
// note,
// amount,
// createAt
// }


// })


export const addexpense = (expense) =>( {
type:'ADD_EXPENSE',
expense

})


export const startAddExpense = (expenseData={})=> {

    return(dispatch, getState)=>{
      const uid = getState().auth.uid;
      
  const {
    description= '',  
    note= '',
    amount= 0,
    createAt= 0,
    userid = uid}= expenseData;

const expense= {description, note, amount, createAt, userid}
    
        
        database.ref(`expenses`).push(expense)
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

    return (dispatch, getState)=> {
        const uid= getState().auth.uid
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
return(dispatch, getState)=> {
    const uid= getState().auth.uid
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

    return(dispatch, getState)=>{ 

    const uid = getState().auth.uid
return database.ref(`expenses`).once('value').then((snapshot)=> {
const expenses = [];

snapshot.forEach((childsnapshot)=> {expenses.push({id: childsnapshot.key,...childsnapshot.val()})})

dispatch(setExpenses(expenses));

})
    
    }
}

// export const startSetExpenses = ()=> {

//     return(dispatch, getState)=>{ 

//     const uid = getState().auth.uid
// return database.ref(`users`).once('value').then((snapshot)=> {
// const expenses = [];

// const ex1= snapshot.forEach((childsnapshot)=> 

// {expenses.push(childsnapshot.val())})

// const test = expenses.map((item)=>{

//    return {...item.expenses.key}
// })

// const blank = test.join()

// const wow = ()=> {for (var x=0; x<expenses.length; x++){

//     return expenses[x].expenses
// } 
// }

// const man = wow();

// //[{ ...expenses[0].expenses, ...expenses[1].expenses }];








// //const check = expenses[1].expenses

// dispatch(setExpenses(test));

// })
    
//     }
// }


