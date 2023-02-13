import React from "react";

const Prompt = ({ handleSubmit }) => {
  // const { handleSubmit } = useSubmit();
  return (
    <form
      className="h-auto flex justify-between items-center"
      onSubmit={handleSubmit}
    >
      <input
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
