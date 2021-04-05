import React, { useEffect, useState } from 'react';
import Pusher from 'pusher-js'
import './App.css';
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';
import axios from './axios';
import Login from './components/Login/Login';



function App() {

  const [loggedIn,logIn] = useState(false);
  const [messages,setMessages] = useState([]);
  const [username,changeUsername] = useState("");

  let signIn=(username) => {
    logIn(true);
    changeUsername(username);
  }


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

  let AppBody =() => {
    if(loggedIn){
      return(
        <div className="app-body">
          <Sidebar username={username} />
          <Chat messages={messages} />
        </div>
      )
    }
    else
        return(
          <div className='app-body'>
            <Login signIn={signIn} />
          </div>
        )
  }


  return (
    <div className="app">

      <AppBody />  

    </div>
  );
}

export default App;
