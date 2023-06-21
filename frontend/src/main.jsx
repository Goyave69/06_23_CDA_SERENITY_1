import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from './pages/DashboardTemplate'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import App from "./App";
import MyPreparation from "@pages/MyPreparation";
import TimeTable from "@pages/TimeTable";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [ //pour l'outlet (afficher les children ici) et navbar reste fix
      {
        index: true, //par default fait pointer vers l'index, hom
        element: <Dashboard/>
      },
      {
        path: "/mypreparation",
        element: <MyPreparation/>
      },
      {
        path: "/timetable",
        element: <TimeTable/>
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
