import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Dashboard></Dashboard>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
