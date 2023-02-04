import React from "react";
import ChatBubbles from "./ChatBubbles";
import Prompt from "./Prompt";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col mx-5">
        {/* <!-- Page content here --> */}
        <div className="overflow-y-scroll h-[80%]">
          <ChatBubbles></ChatBubbles>
        </div>
        <Prompt></Prompt>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-slate-500 text-white">
          {/* <!-- Sidebar content here --> */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
