import React from "react";
import useSubmit from "../Hooks/useSubmit";

const Prompt = () => {
  const { handleSubmit, setInput } = useSubmit();
  return (
    <form className="h-auto flex justify-between items-center">
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Type here"
        class="input input-bordered w-full"
      />
      <button className="btn btn-primary ml-5" onClick={handleSubmit}>
        Send
      </button>
    </form>
  );
};

export default Prompt;
