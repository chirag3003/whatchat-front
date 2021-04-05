import { Avatar,IconButton } from '@material-ui/core'
import {AirportShuttleTwoTone, AttachFile, MoreVert, SearchOutlined} from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import React, { useState } from 'react'
import "./Chat.css"
import ChatMessage from './ChatMessage';
import axios from '../../axios.js';


function Chat({messages}) {
    

    let arrangeMessages = ({message,name,received},index) => {
        
        return(
            <ChatMessage 
                key={index}
                message={message}
                received={received}
                name={name}

            />
        );


    }
    const [input,setInput] = useState("");
    let sendMessage=(event) => {
        event.preventDefault();
        axios.post('/messages/new',{
            message:input,
            name:"apex",
            received:true,
        })
        setInput("");

    }

    return (
        <div className="chat">
            <div className="chat-header">
                <Avatar />

                <div className="chat-headerInfo">
                    <h3>Room Name</h3>
                    <p>Last Seen at....</p>
                </div>
                <div className="chat-headerR">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>



            <div className="chat-body">
                {messages.map(arrangeMessages)}
            </div>

            
            <div className="chat-footer">
                
                    <InsertEmoticonIcon />
                
                <form>
                    <input 
                        value={input}
                        type="text" 
                        placeholder="Type a message" 
                        onChange={(e) => {setInput(e.target.value)}}
                        autofocus="true"
                    />
                    <button 
                        type="submit"
                        onClick={sendMessage}
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Chat
