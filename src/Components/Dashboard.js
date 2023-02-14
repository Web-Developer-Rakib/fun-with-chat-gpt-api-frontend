import React, { useState } from "react";
import AboutModal from "./AboutModal";
import ChatBubbles from "./ChatBubbles";
import ClearModal from "./ClearModal";
import Prompt from "./Prompt";

const Dashboard = () => {
  const [chatLog, setChatLog] = useState([]);
  const [typing, setTyping] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.input.value;
    const oldChatLog = [...chatLog, { user: "Me", text: `${input}` }];
    setChatLog(oldChatLog);
    e.target.reset();
    setTyping(
      <div className="mb-5">
        <p>Typing...</p>
        <progress className="progress w-20"></progress>
      </div>
    );
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
        setTyping("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleClear = () => {
    setChatLog([]);
  };
  return (
    <>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col mx-5">
          {/* <!-- Page content here --> */}
          <div className="overflow-y-auto flex flex-col-reverse h-[80%] scrollbar-hide">
            <div>
              {chatLog.length === 0 ? (
                <div className="flex justify-center flex-col h-[500px]">
                  <h1 className="text-xl text-center">Start conversation</h1>
                  <h3 className="text-center">
                    Do not overlap message. I need to think about your question.
                  </h3>
                </div>
              ) : (
                chatLog.map((message, index) => (
                  <ChatBubbles message={message} key={index}></ChatBubbles>
                ))
              )}
              {typing}
            </div>
          </div>

          <Prompt handleSubmit={handleSubmit}></Prompt>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <ul className="menu p-4 w-80 bg-slate-500 text-white">
            {/* <!-- Sidebar content here --> */}
            <li>
              <label htmlFor="clear-modal">Clear chat history</label>
            </li>
            <li>
              <label htmlFor="about-modal">About me</label>
            </li>
          </ul>
        </div>
      </div>
      <ClearModal handleClear={handleClear}></ClearModal>
      <AboutModal></AboutModal>
    </>
  );
};

export default Dashboard;
