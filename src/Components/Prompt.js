import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Prompt = ({ handleSubmit }) => {
  return (
    <form
      className="h-auto flex justify-between items-center mb-2"
      onSubmit={handleSubmit}
    >
      <input
        name="input"
        type="text"
        placeholder="Type your question here"
        className="input input-bordered w-full"
      />
      <button className="btn btn-primary ml-5">
        <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight>
      </button>
    </form>
  );
};

export default Prompt;
