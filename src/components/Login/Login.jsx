import { Button, Snackbar, TextField } from '@material-ui/core';
import {Alert} from "@material-ui/lab"
import React, { useState } from 'react'
import "./Login.css"; 
import axios from "../../axios"

function Login(props) {

    const [username,changeUsername] = useState('');
    const [password,changePassword] = useState('');
    const [error,setError] = useState(false);
    const [errorMsg,setErrorMsg] = useState('');
    
    
    const changeValue=(event,changer) => {
        changer(event.target.value);

    }
    const changeErrorMsg = (msg) => {
        setErrorMsg(msg);
    }
    const closeError = () => {
        setError(false);
    }

    let signIn =()=> {
        axios.post('/signIn',{
            username:username,
            password:password
        }).then((response)=>{
            if(response.data){
                props.signIn(username);
            }else{
                setError(true);
                changeErrorMsg('Wrong username or password')
            }
        })
    }
    let signUp = () => {
        axios.post('/signUp',{
            username:username,
            password:password
        }).then(response => {
            if(response.data) {
                props.signIn(username);
            }else{
                setError(true);
                changeErrorMsg(`User with the username: ${username} is already registered`);
            }
        })
    }

    


    return (
        <div className="login">
            <div className="login-container">    
                <h3>
                    Sign In or Sign Up    
                </h3>
                <form>
                    <TextField 
                        label="username" 
                        className="login-input"
                        type="username"
                        value={username}
                        onChange={(evt)=>{changeValue(evt,changeUsername)}}
                    />
                    <TextField 
                        label="Password" 
                        className="login-input"
                        type="password"
                        onChange={(evt)=>{changeValue(evt,changePassword)}}
                        value={password}
                    />
                    <Button
                        className="login-btn"
                        variant="contained"
                        onClick={signIn}
                    >
                        Sign In
                    </Button>
                    <Button
                        className="login-btn"
                        variant="contained"
                        onClick={signUp}
                    >
                        Sign Up
                    </Button>
                </form>
            </div>


            <Snackbar open={error} autoHideDuration={6000} onClose={closeError}>
                <Alert onClose={closeError} severity="error">
                    {errorMsg}
                </Alert>
            </Snackbar>
        
        </div>
    )
}

export default Login
