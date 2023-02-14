import React from "react";
import Rakib from "../img/rakib.jpeg";
import Me from "../img/user.png";

const ChatBubbles = ({ message }) => {
  return (
    <div>
      <div
        className={`chat ${message.user === "Me" ? "chat-end" : "chat-start"}`}
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
        <div className="chat-bubble">
          {message.text === undefined
            ? "Sorry! There is a server issue. Please try again."
            : message.text}
        </div>
        {message.user === "Me" && (
          <div className="chat-footer opacity-50">Seen</div>
        )}
      </div>
    </div>
  );
};

export default ChatBubbles;
