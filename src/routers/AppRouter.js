import React from 'react';

import {Router,Route, Switch, Link, NavLink} from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';
import addpage from '../components/addpage';

import dashpage from '../components/dashpage';
import editpage from '../components/editpage';

import helppage from '../components/helppage';
import notfound from '../components/notfound';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history= createHistory();

const AppRouter = ()=> (
    <Router history={history}>
    <div>
   
    <Switch>
    <PublicRoute path="/" component={LoginPage} exact={true}/>
    <PrivateRoute path="/dashboard" component={dashpage}/>
    <PrivateRoute path="/create" component={addpage}/>
    <PrivateRoute path="/edit/:id" component={editpage}/>
    <Route path="/help" component={helppage}/>
    <Route component={notfound}/>
    </Switch>
    </div>
    
    </Router>

);

export default AppRouter;