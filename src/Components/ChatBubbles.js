import React, { useEffect, useState } from "react";
import Rakib from "../img/rakib.jpeg";
import Me from "../img/user.png";

const ChatBubbles = () => {
  const [chatLog, setChatLog] = useState([]);

  useEffect(() => {
    setChatLog(JSON.parse(localStorage.getItem("chatLog")));
  }, []);
  return (
    <div>
      {chatLog.map((message) => (
        <div
          className={`chat ${
            message.user === "Me" ? "chat-end" : "chat-start"
          }`}
        >
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                src={message.user === "Me" ? Me : Rakib}
                alt={message.user === "Me" ? "user" : "rakib"}
              />
            </div>
          </div>
          <div className="chat-header">{message.user}</div>
          <div className="chat-bubble">{message.text}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatBubbles;
