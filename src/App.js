import React, { useEffect, useState } from 'react';
import Pusher from 'pusher-js'
import './App.css';
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';
import axios from './axios';


function App() {

  const [messages,setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync').then(response => {
      setMessages(response.data);
    })
  },[])
  
  useEffect(() => {
    var pusher = new Pusher('8c48a8d77ce7fc349e7b', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('message');
    channel.bind('insert', function(newMessage) {
      setMessages([...messages,newMessage])
    });

    return () => {
      channel.unbind_all()
      channel.unsubscribe();
    }
  },[messages])


  return (
    <div className="app">
      <div className="app-body">
        <Sidebar />
        <Chat messages={messages} />
      </div>

    </div>
  );
}

export default App;
