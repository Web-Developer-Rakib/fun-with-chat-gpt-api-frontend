import React, { useState } from "react";
import ChatBubbles from "./ChatBubbles";
import Prompt from "./Prompt";

const Dashboard = () => {
  const [chatLog, setChatLog] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.input.value;
    const oldChatLog = [...chatLog, { user: "Me", text: `${input}` }];
    setChatLog(oldChatLog);
    e.target.reset();
    fetch("http://localhost:5000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: `${input}`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setChatLog([...oldChatLog, { user: "Rakib", text: data.bot }]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleClear = () => {
    localStorage.clear();
  };
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col mx-5">
        {/* <!-- Page content here --> */}
        <div className="overflow-y-scroll h-[80%]">
          {chatLog.length === 0 ? (
            <h1 className="text-xl text-center">Start conversation</h1>
          ) : (
            chatLog.map((message, index) => (
              <ChatBubbles message={message} key={index}></ChatBubbles>
            ))
          )}
        </div>
        <Prompt handleSubmit={handleSubmit}></Prompt>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-slate-500 text-white">
          {/* <!-- Sidebar content here --> */}
          <li>
            <p onClick={handleClear}>Clear chat history</p>
          </li>
          <li>
            <p>About this project</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
