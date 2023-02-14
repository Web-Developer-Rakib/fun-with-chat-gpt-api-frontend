import React from "react";

const ClearModal = ({ handleClear }) => {
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="clear-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Are you sure?</h3>
          <p className="py-4">
            All chat history will be clear, If you click on the clear button.
          </p>
          <div className="modal-action">
            <label
              className="btn btn-error"
              onClick={handleClear}
              htmlFor="clear-modal"
            >
              Clear
            </label>
            <label htmlFor="clear-modal" className="btn">
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClearModal;
