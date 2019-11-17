import uuid from 'uuid';


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


