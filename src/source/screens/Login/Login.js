import React from 'react'
import classes from './Login.module.css'
import {NavLink} from 'react-router-dom'
function Login() {
    return (
        <div className={classes.main}>
            <img style={{width : '150px'} } src="/Capture.PNG" alt="Logo"/>
            
            <div className={classes.flex}>
            <div className={classes.line}></div>  
            <h5 >Login</h5>
            <div className={classes.line}></div>
            </div>
            <input className={classes.space} type='email' placeholder='Email'/ ><br/>
            <input className={classes.space} type='password' placeholder='Password'/><br/>
            <NavLink  to="/home"><input className={classes.onMouse} type='submit' name='Log in'/></NavLink>
            <hr></hr>
            <a href='#'>Fogot Password</a>
            
        </div>
    )
}
export default Login
