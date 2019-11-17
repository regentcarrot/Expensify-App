import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {removeexpense} from '../actions/expenses';
import {ExpenseList} from './ExpenseList'

const ExpenseListItem = ({dispatch,id, description, barber,amount, createAt})=>(
<div>
<Link to={`/edit/${id}`}><h3>{description}</h3></Link>
<p>{amount}- {createAt}- {id}- {barber}</p>
<button onClick={()=> {
    dispatch(removeexpense(id))
    }
    
    }>Remove Item</button>
</div>

);

export default connect()(ExpenseListItem);


