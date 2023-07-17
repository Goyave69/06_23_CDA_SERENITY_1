import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./pages/DashboardTemplate";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { mainTheme } from "./theme";
import App from "./App";
import MyPreparation from "@pages/MyPreparation";
import TimeTable from "@pages/TimeTable";
import Login from "@pages/Login";
/* import AdminDoctor  from "@pages/admin/AdminDoctor.jsx" */
//import AdminUser from "@pages/admin/AdminUser.jsx";
import Admin from "./Admin";
import Interventions from "@pages/admin/Interventions"
import Patients from "@pages/admin/Patients"
import Suivi from "@pages/admin/Suivi"
import Praticiens from "@pages/admin/Praticiens"
import OfficesList from "@pages/admin/OfficesList";
import AddOfficeFormular from "@pages/admin/AddOfficeFormular";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/mypreparation",
        element: <MyPreparation />,
      },
      {
        path: "/timetable",
        element: <TimeTable />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "/admin/cabinets",
        element: <OfficesList />,
      },
      {
        path: "/admin/interventions",
        element: <Interventions/>,
      },
      {
        path: "/admin/patients",
        element: <Patients/>,
      },
      {
        path: "/admin/praticiens",
        element: <Praticiens/>,
      },
      {
        path: "/admin/suivi",
        element: <Suivi/>,
      },
      {
        path: "/admin/add-offices",
        element: <AddOfficeFormular/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
