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
import AdminOffice from "@pages/admin/AdminOffice.jsx";
/* import AdminDoctor  from "@pages/admin/AdminDoctor.jsx" */
//import AdminUser from "@pages/admin/AdminUser.jsx";
//import ListeOffices from "@pages/admin/listeOffices.jsx";
import Admin from "./Admin";
import Cabinets from "@pages/admin/Cabinets"
import Interventions from "@pages/admin/Interventions"
import Patients from "@pages/admin/Patients"
import Suivi from "@pages/admin/Suivi"
import Particiens from "@pages/admin/Particiens"

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
        element: <Cabinets />,
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
        path: "/admin/particiens",
        element: <Particiens/>,
      },
      {
        path: "/admin/suivi",
        element: <Suivi/>,
      },
      {
        path: "/admin/add-offices",
        element: <AdminOffice/>,
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
