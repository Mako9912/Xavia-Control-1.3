import "./Index.css";
import Sidebar from "./Components/Sidebar";
import Dashboardview from "./Components/Dashboardview";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex">
      <div className="basis-[12%] h-screen">
        <Sidebar />
      </div>
      <div className="basis-[88%] border h-[100vh] overflow-scroll">
        <Dashboardview />
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default App;
