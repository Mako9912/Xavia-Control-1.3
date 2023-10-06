import "./Index.css";
import Sidebar from "./Components/Sidebar";
import Dashboardview from "./Components/Dashboardview";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex">
      <div className="basis-[12%] h-[100vh] ">
        {" "}
        <h1>Cambios de pureba</h1>
        <Sidebar />
      </div>
      <div className="basis-[88%] border">
        <Dashboardview />
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default App;
