import React from 'react';
import ExpenseList from './ExpenseList';
import ConnectedExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilters';

const dashpage= ()=> (

    <div>
    <ExpenseListFilter/>
    <ExpenseList/></div>

);

export default dashpage;