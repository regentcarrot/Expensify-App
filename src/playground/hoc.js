//hoc= higher order component. A component (HOC) that renders another component
//Reuse code
//render hijacking
//prop manipulation
//abstract state

import React from 'react';
import ReactDOM from 'react-dom';


const Info= (props)=> (
<div>
 <h1>Info</h1>
 <p>This info is: {props.info}</p>

</div>

);

const withadminwarning = (WrappedComponent)=> {

    return (props)=> (
    <div>
    {props.isAdmin&&<p>This is private info. Please do not share!</p>}
    <WrappedComponent {...props}/>
    </div>
    )

};

//requireauthentication

const requirAuthentication = (WrappedComponent)=> {

    return (props)=> (

        <div>
        {props.isLogged? <WrappedComponent {...props}/>: <p>Please Log in!</p>}
</div>
    )
}


const AuthInfo= requirAuthentication(Info);

const Admininfo= withadminwarning(Info);







//ReactDOM.render(<Admininfo isAdmin={true} info="These are the details"/>, document.getElementById("app"))
ReactDOM.render(<AuthInfo isLogged={false} info="These are the details"/>, document.getElementById("app"))