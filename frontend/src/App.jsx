import SideBar from "@components/barcomponents/SideBar";
import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Outlet />
    </div>
  );
}

export default App;
