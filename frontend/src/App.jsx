import React from 'react';
import SideBar from "@components/barcomponents/SideBar";
//import NavBar from "@components/barcomponents/NavBar"
import { Outlet } from "react-router-dom";
//import Login from "@pages/Login";

import "./App.css";

function App() {
  return (
    <div className="App">
      <SideBar />
      <main style={{ padding: 24 }}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
