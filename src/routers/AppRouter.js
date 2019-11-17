import React from 'react';

import {BrowserRouter,Route, Switch, Link, NavLink} from 'react-router-dom';

import addpage from '../components/addpage';
import dashpage from '../components/dashpage';
import editpage from '../components/editpage';
import Header from '../components/header';
import helppage from '../components/helppage';
import notfound from '../components/notfound';














const AppRouter = ()=> (
    <BrowserRouter>
    <div>
    <Header/>
    <Switch>
    <Route path="/" component={dashpage} exact={true}/>
    <Route path="/create" component={addpage}/>
    <Route path="/edit/:id" component={editpage}/>
    <Route path="/help" component={helppage}/>
    <Route component={notfound}/>
    </Switch>
    </div>
    
    </BrowserRouter>

);

export default AppRouter;