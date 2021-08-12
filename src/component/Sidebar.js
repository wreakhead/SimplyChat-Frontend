import React from "react";
import "./Sidebar.css";
import DonutLargeTwoToneIcon from "@material-ui/icons/DonutLargeTwoTone";
import ChatBubbleTwoToneIcon from "@material-ui/icons/ChatBubbleTwoTone";
import MoreVertTwoToneIcon from "@material-ui/icons/MoreVertTwoTone";
import { Avatar, IconButton } from "@material-ui/core";
import SearchTwoToneIcon from "@material-ui/icons/SearchTwoTone";
import SidebarChat from "./SidebarChat";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://pm1.narvii.com/6471/3f595a428938815dd148e69317e6f006a3d1e14f_hq.jpg" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeTwoToneIcon />
          </IconButton>
          <IconButton>
            <ChatBubbleTwoToneIcon />
          </IconButton>
          <IconButton>
            <MoreVertTwoToneIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
          <div className="sidebar__searchContainer">
            <SearchTwoToneIcon/>
            <input placeholder="Search or start new chat" type="text"/>

          </div>

      </div>
      <div className="sidebar__chats">
        <SidebarChat/>
      </div>
    </div>
  );
}

export default Sidebar;
