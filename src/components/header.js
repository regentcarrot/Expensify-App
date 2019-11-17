import React from 'react';

import {BrowserRouter,Route, Switch, Link, NavLink} from 'react-router-dom';

const Header = ()=> (
    <header>
    <h1>Expensify</h1>
    <div>
    <NavLink to="/" activeClassName="is-active" exact={true}>Homepage</NavLink> 
    <NavLink to="/create" activeClassName="is-active">Addpage</NavLink> 
    <NavLink to="/help" activeClassName="is-active">Help</NavLink> 
    <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
    </div>
    </header>
    
    );
    
    export default Header;