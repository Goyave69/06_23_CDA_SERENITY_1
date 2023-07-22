import React from 'react';
import SideBarAdmin from "@components/admincomponents/SideBarAdmin";
//import NavBar from "@components/barcomponents/NavBar"
import { Outlet } from "react-router-dom";
//import Login from "@pages/Login";
import "./Admin.css";

const Admin = () => {
    return (
      <div className="Admin">
        <SideBarAdmin />
        <main style={{ padding: 34 }}>
          <Outlet />
        </main>
      </div>
    );
};

export default Admin;