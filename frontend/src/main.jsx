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
import InterventionsList from "@pages/admin/AddInterventions/InterventionsList"
import Patients from "@pages/admin/AddPatients/PatientsList"
import Suivi from "@pages/admin/Suivi"
import Praticiens from "@pages/admin/AddPraticiens/PraticiensList"
import OfficesList from "@pages/admin/AddCabinets/OfficesList";
import AddOfficeFormular from "@pages/admin/AddCabinets/AddOfficeFormular";
import AddInterventionFormular from "@pages/admin/AddInterventions/AddInterventionFormular"
import { SnackbarProvider } from "notistack";


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
        element: <InterventionsList/>,
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
      {
        path: "/admin/add-interventions",
        element: <AddInterventionFormular/>,
      },

    ],

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SnackbarProvider>
    <ThemeProvider theme={mainTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
    </SnackbarProvider>
  </React.StrictMode>
);
