import React from 'react';

import {BrowserRouter,Route, Switch, Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth'



export const Header = ({startLogout, isAuthenticated})=> (
    
    isAuthenticated? (
    <header>
    <h1>Expensify</h1>
    <div>
    <NavLink to="/dashboard" activeClassName="is-active" >Homepage</NavLink> 
    <NavLink to="/create" activeClassName="is-active">Addpage</NavLink> 
    <NavLink to="/help" activeClassName="is-active">Help</NavLink> 
    <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
    <button onClick= {startLogout}>Logout</button>
    </div>
    </header>):( <NavLink to="/help" activeClassName="is-active">Help</NavLink>)
    
    );

    const mapStateToProps = (state) => ({

        isAuthenticated: !!state.auth.uid
    })
    

    const mapDispatchToProps= (dispatch)=> ({
        startLogout: ()=> dispatch(startLogout())

    })
    
    export default connect(mapStateToProps, mapDispatchToProps)(Header)