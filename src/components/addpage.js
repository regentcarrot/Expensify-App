import React from 'react';
import AddExpenseForm from './AddExpenseForm';
import {connect} from 'react-redux';
import { startAddExpense } from '../actions/expenses';


const addpage= (props)=> (

    <div>This is from my my add expense component
    <AddExpenseForm 
    expensesdesc= {props.expensesdesc}
    expensesnote= {props.expensesnote}
    allexpenses= {props.allexpenses}
    loggeduser= {props.loggeduser}
    
    onSubmit= {(expen)=>{
        
        props.dispatch(startAddExpense(expen))
        props.history.push('/');
        console.log(props.allexpenses)
        
    }}/>
    
    </div>

);

const mapStateToProps = (state)=>{

return {

    expensesdesc: state.expenses.map((expense)=>{return expense.description}),
    expensesnote: state.expenses.map((expense)=>{return expense.note}),
    allexpenses: state.expenses,
    loggeduser: state.auth.uid
}

}

export default connect(mapStateToProps) (addpage);