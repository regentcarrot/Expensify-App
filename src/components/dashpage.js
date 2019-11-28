import React from 'react';
import ExpenseList from './ExpenseList';
import ConnectedExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const dashpage= ()=> (

    <div>
    <ExpensesSummary/>
    <ExpenseListFilters/>
    <ExpenseList/></div>

);

export default dashpage;