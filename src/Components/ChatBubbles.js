import React from "react";
import useSubmit from "../Hooks/useSubmit";

const ChatBubbles = () => {
  const { chatLog } = useSubmit();
  return (
    <div>
      {chatLog.map((message) => (
        <div
          className={`chat ${
            message.user === "me" ? "chat-start" : "chat-end"
          }`}
        >
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src="https://picsum.photos/seed/picsum/200/300" />
            </div>
          </div>
          <div className="chat-header">
            {message.user}
            <time className="text-xs opacity-50">12:45</time>
          </div>
          <div className="chat-bubble">{message.message}</div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>
      ))}
    </div>
  );
};

export default ChatBubbles;
