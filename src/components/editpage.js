import React from 'react';
import {connect} from 'react-redux';
import AddExpenseForm from './AddExpenseForm';
import {editexpense} from '../actions/expenses';
import {removeexpense} from '../actions/expenses';


const editpage= (props)=> {

   
 /* 
 console.log(props);
 return  (<div>This is from my my edit expense component<br/>
    We are editing the expense with id of {props.match.params.id}
    </div>)*/

    return  (<div><AddExpenseForm 
      expense= {props.expense}
      thenotes= {props.thenotes}
      
      thedesc= {props.thedesc}
      exobject= {props.exobject}
      removeExpense= {()=>{ props.dispatch(removeexpense(props.expense.id))}
        }
      onSubmit= {(expense)=>{

      props.dispatch(editexpense(props.expense.id, expense));
      props.history.push('/');

      console.log('updated',expense)
    }}/>

    <button onClick={()=> {
      props.dispatch(removeexpense(props.expense.id));
      props.history.push('/');
      }
      
      }>Remove Item</button>
      </div>)

};

const mapStateToProps= (state, props)=>{
return {expense: state.expenses.find((expense)=>  expense.id===props.match.params.id),
      thenotes: state.expenses.map((expense)=>{return expense.note}),
      thedesc: state.expenses.map((expense)=>{return expense.description}),
      exobject: state.expenses
}

}

export default connect(mapStateToProps)(editpage);