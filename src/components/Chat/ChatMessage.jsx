import React from 'react'
import "./ChatMessage.css";

function ChatMessage({message,name,received}) {
    console.log(received)
    let classes = "chat-message" + (received?" chat-reciever":"");
    return (
        <p className={classes}>
            <span className="chat-name">{name}</span>
            
            {message}

            <span className="chat-timeStamp">{new 
            Date().toUTCString()}</span>
        </p>
    )
}

export default ChatMessage
