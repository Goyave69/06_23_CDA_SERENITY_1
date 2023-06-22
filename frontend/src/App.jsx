import Dashboard from "./pages/DashboardTemplate";
import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Outlet />
    </div>
  );
}

export default App;
