import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

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
      <button className="btn btn-success ml-5">
        <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight>
      </button>
    </form>
  );
};

export default Prompt;
