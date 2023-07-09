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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      //pour l'outlet (afficher les children ici) et navbar reste fix
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
      {
        path: "/admin/office",
        element: <AdminOffice />,
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
