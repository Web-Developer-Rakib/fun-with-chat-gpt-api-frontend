import { useState } from "react";

const useSubmit = () => {
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([
    { user: "gpt", message: "How can I help you?" },
    { user: "me", message: "I want to use Chat GPT." },
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sent");
    setChatLog([...chatLog, { user: "me", message: input }]);
    setInput("");
  };
  return { handleSubmit, chatLog, setInput };
};

export default useSubmit;
