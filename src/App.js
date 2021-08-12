import "./App.css";
import Chat from "./component/Chat";
import Sidebar from "./component/Sidebar";
import { useEffect, useState } from "react";
import Pusher from "pusher-js";
import axios from "./axios";

function App() {
  const [messages, setMessages] = useState([]);

  // fetching all messages
  useEffect(() => {
    axios.get("/message/sync").then((response) => {
      setMessages(response.data);
    });
  }, []);

  // connecting to pusher for sync with database
  useEffect(() => {
    const pusher = new Pusher("", {
      cluster: "eu",
    });

    const channel = pusher.subscribe("message");
    channel.bind("inserted", (data) => {
      setMessages([...messages, data]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages);
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
