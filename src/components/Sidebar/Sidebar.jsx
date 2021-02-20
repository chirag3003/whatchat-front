import React from 'react'
import "./Sidebar.css"
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {IconButton,Avatar} from '@material-ui/core/';
import {SearchOutlined} from '@material-ui/icons';
import SidebarChat from './SidebarChat';

function Sidebar() {
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
                        placeholder="Search or Start new Chat"
                        type="text"
                    />
                </div>
            </div>
            <div className="sidebar-chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                

            </div>
        </div>
    )
}

export default Sidebar
