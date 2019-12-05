import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {startRemoveExpense} from '../actions/expenses';
import {ExpenseList} from './ExpenseList';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({dispatch,id, description,amount, createAt})=>(
<div>
<Link to={`/edit/${id}`}><h3>{description}</h3></Link>
<p>
{'£'+numeral(amount/100).format('0,0.00')}- 

{moment(createAt).format('Do, MMMM YYYY')}

</p>

</div>

);

export default connect()(ExpenseListItem);


