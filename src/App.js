import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <Dashboard />
      <ToastContainer />
    </div>
  );
}

export default App;
