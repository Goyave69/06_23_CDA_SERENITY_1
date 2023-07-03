import SideBar from "@components/barcomponents/SideBar";
//import NavBar from "@components/barcomponents/NavBar"
import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App" d>
      <SideBar/>
      <main style={{padding: 24}}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
