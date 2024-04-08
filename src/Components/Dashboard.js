import React, { useEffect, useRef, useState } from "react";
import { FaRegTrashAlt, FaUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import "../App.css";
import AboutModal from "./AboutModal";
import ChatBubbles from "./ChatBubbles";
import ClearModal from "./ClearModal";
import Prompt from "./Prompt";
import TypingIndicator from "./TypingIndicator/TypingIndicator";
const Dashboard = () => {
  const [chatLog, setChatLog] = useState([]);
  const [typing, setTyping] = useState("");
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatLog]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.input.value;
    if (input === "") {
      toast.warn("Please type something.");
    } else {
      const oldChatLog = [...chatLog, { user: "Me", text: `${input}` }];
      setChatLog(oldChatLog);
      e.target.reset();
      setTyping(<TypingIndicator />);
      fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: input }],
          temperature: 0.7,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setChatLog([
            ...oldChatLog,
            { user: "Rakib", text: data.choices[0].message.content },
          ]);
          console.log(data.choices[0].message.content);
          setTyping("");
        })
        .catch(() => {
          toast.error("Something went wrong.");
          setTyping("");
        });
    }
  };
  const handleClear = () => {
    if (chatLog.length === 0) {
      toast.warn("Chat history is cleared already.");
    } else {
      setChatLog([]);
      toast.success("Chat history clear successfully.");
    }
  };
  return (
    <>
      <div className="drawer drawer-mobile h-[90vh]">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col mx-5">
          {/* <!-- Page content here --> */}
          <div className="overflow-y-auto flex flex-col-reverse scrollbar-hide h-[100vh]">
            <div>
              {chatLog.length === 0 ? (
                <div className="flex justify-center flex-col h-[500px]">
                  <h1 className="text-xl text-center">Start conversation.</h1>
                  <h3 className="text-center">
                    Ask me anything. I will try to give you appropriate answer.
                  </h3>
                </div>
              ) : (
                chatLog.map((message, index) => (
                  <ChatBubbles message={message} key={index} />
                ))
              )}
              {typing}
              <div className="mt-3" ref={chatEndRef}></div>
            </div>
          </div>
          <Prompt handleSubmit={handleSubmit} />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-slate-500 text-white">
            {/* <!-- Sidebar content here --> */}
            <li>
              <label htmlFor="clear-modal">
                Clear chat history <FaRegTrashAlt />
              </label>
            </li>
            <li>
              <label htmlFor="about-modal">
                About me <FaUserCircle />
              </label>
            </li>
          </ul>
        </div>
      </div>
      <ClearModal handleClear={handleClear} />
      <AboutModal />
    </>
  );
};

export default Dashboard;
