import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  MicOutlined,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import "./Chat.css";
import axios from "../axios";

function Chat({ messages }) {
  const [input, setInput] = useState("");
  const sendMessage = async (event) => {
    event.preventDefault();
    await axios.post("/message/new", {
      message: input,
      name: "imran",
      timestamp: "date",
      received: true,
    });
    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>last seen</p>
        </div>
        <div className="chat__headerRight">
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
      <div className="chat__body">
        {messages?.map((message) => {
          return (
            <p
              className={`chat__message ${message.received && "chat__reciver"}`}
              key={message._id}
            >
              <span className="chat__name">{message.name}</span>
              {message.message}
              <span className="chat__timestamp">{message.timestamp}</span>
            </p>
          );
        })}

        
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit"></button>
        </form>
        <MicOutlined />
      </div>
    </div>
  );
}

export default Chat;
