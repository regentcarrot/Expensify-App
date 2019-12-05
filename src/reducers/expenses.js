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

    case 'SET_EXPENSES':
    return action.expenses;
    default:
    return state;
    
    }
    
    
    
    };

    export default expenseReducer;