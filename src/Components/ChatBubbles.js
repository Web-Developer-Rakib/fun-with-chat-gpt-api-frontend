import React from "react";

const ChatBubbles = () => {
  // const { isLoad } = useSubmit();
  const chatLog = JSON.parse(localStorage.getItem("chatLog"));
  // const [chatLog, setChatLog] = useState([]);
  // useEffect(() => {
  //   setChatLog(chatLogs);
  // }, []);
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
              <img src="https://picsum.photos/seed/picsum/200/300" />
            </div>
          </div>
          <div className="chat-header">
            {message.user}
            <time className="text-xs opacity-50">12:45</time>
          </div>
          <div className="chat-bubble">{message.text}</div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>
      ))}
    </div>
  );
};

export default ChatBubbles;
