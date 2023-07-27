import React from "react";
import SideBar from "@components/barcomponents/SideBar";
//import NavBar from "@components/barcomponents/NavBar"
import { Outlet } from "react-router-dom";
//import Login from "@pages/Login";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { getCookie } from "./services/cookieHelper";

function App() {
  const token = getCookie("user");
  const navigate = useNavigate();
  console.log(token)
  React.useEffect(() => {
    if (!token) {
      navigate("/");
    }
    
  }, [token, navigate]);

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
