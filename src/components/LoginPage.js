import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from "../actions/auth"
import Header from './header';

export const LoginPage = ({startLogin})=> {
    return (
<div><Header/> <br/>
<button onClick= {startLogin}>Login</button>
</div>)

}

const mapDispatchToProps = (dispatch) => ({

    startLogin: ()=> dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)