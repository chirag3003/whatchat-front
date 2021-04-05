import React, { useState } from 'react'
import "./Sidebar.css"
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddIcon from '@material-ui/icons/Add';
import {IconButton,Avatar, Snackbar} from '@material-ui/core/';
import {SearchOutlined} from '@material-ui/icons';
import SidebarChat from './SidebarChat';
import axios from './../../axios';
import { Alert } from '@material-ui/lab';

function Sidebar(props) {
    
    const [input,setInput] = useState('')
    const [error,setError] = useState(false);
    const [errorMsg,setErrorMsg] = useState('');


    const changeErrorMsg = (msg) => {
        setErrorMsg(msg);
    }
    const closeError = () => {
        setError(false);
    }

    function createChannel(){
        axios.post('/createChannel',{username:input,sender:props.username}).then(response => {
            if(response.data){
                console.log("success");
            }else{
                setError(true);
                changeErrorMsg(`user with the username ${input} doesn't exist`)
            }
        })
    }




    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <Avatar 
                    src="https://www.flaticon.com/
                    premium-icon/icons
                    /svg/3829/3829517.svg" 
                />

                <div className="sidebar-headerRight">
                    <IconButton >
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton >
                        <ChatIcon />
                    </ IconButton>
                    <IconButton >
                        <MoreVertIcon />
                    </IconButton>
                </div>

                
            </div>
            <div className="sidebar-search">
                <div className="sidebar-searchContainer">
                    <SearchOutlined />
                    <input
                        placeholder="Enter the username of the person"
                        type="text"
                        value={input}
                        onChange={evt => {setInput(evt.target.value)}}
                    />
                </div>
                <IconButton onClick={createChannel}>
                    <AddIcon />
                </IconButton>
            </div>
            <div className="sidebar-chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                

            </div>

            <Snackbar open={error} autoHideDuration={6000} onClose={closeError}>
                <Alert onClose={closeError} severity="warning">
                    {errorMsg}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Sidebar
