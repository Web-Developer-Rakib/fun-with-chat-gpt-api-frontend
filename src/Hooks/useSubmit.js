const useSubmit = () => {
  const oldChatLog = JSON.parse(localStorage.getItem("chatLog"));
  let chatLog = [];
  if (oldChatLog === null) {
    localStorage.setItem("chatLog", JSON.stringify([]));
  } else {
    chatLog = [...oldChatLog];
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.input.value;
    chatLog.push({ user: "Me", text: `${input}` });
    localStorage.setItem("chatLog", JSON.stringify(chatLog));

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
        chatLog.push({ user: "Rakib", text: data.bot });
        localStorage.setItem("chatLog", JSON.stringify(chatLog));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return { handleSubmit };
};

export default useSubmit;
