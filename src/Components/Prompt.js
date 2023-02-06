import React from "react";
import useSubmit from "../Hooks/useSubmit";

const Prompt = () => {
  const { handleSubmit } = useSubmit();
  return (
    <form
      className="h-auto flex justify-between items-center"
      onSubmit={handleSubmit}
    >
      <input
        // onChange={(e) => setInput(e.target.value)}
        name="input"
        type="text"
        placeholder="Type here"
        class="input input-bordered w-full"
      />
      <button className="btn btn-primary ml-5">Send</button>
    </form>
  );
};

export default Prompt;
