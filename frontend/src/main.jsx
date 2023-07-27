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
import UsersList from "@pages/admin/AddUsers/UsersList"
import Suivi from "@pages/admin/Suivi"
import Praticiens from "@pages/admin/AddPraticiens/PraticiensList"
import OfficesList from "@pages/admin/AddCabinets/OfficesList";
import AddOfficeFormular from "@pages/admin/AddCabinets/AddOfficeFormular";
import AddInterventionFormular from "@pages/admin/AddInterventions/AddInterventionFormular"
import { SnackbarProvider } from "notistack";
import AddUserFormular from "@pages/admin/AddUsers/AddUserFormular";
import { ProgressProvider } from "./context/ProgressContext";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
   {
    path: "/user",
    element: <App />,
    children: [
      {
        path: "/user/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/user/mypreparation",
        element: <MyPreparation />,
      },
      {
        path: "/user/timetable",
        element: <TimeTable />,
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
        element: <UsersList/>,
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
        path: "/admin/add-user",
        element: <AddUserFormular/>,
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
      <ProgressProvider>
        <ThemeProvider theme={mainTheme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </ProgressProvider>
    </SnackbarProvider>
  </React.StrictMode>
);
