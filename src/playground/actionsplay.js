import uuid from 'uuid';

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

// REMOVE EXPENSE

export const removeexpense = (test)=> ({
    type:'REMOVE_EXPENSE',
        test

})
//EDIT EXPENSE

export const editexpense= (id, updates)=> ({
type: "EDIT_EXPENSE",
id,
updates

})

