import Dashboard from "./pages/DashboardTemplate";
import MyPreparation from './pages/MyPreparation'
import TimeTable from './pages/TimeTable'
import { Outlet } from "react-router-dom";

//import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <Outlet />
      </main>
      <Dashboard />
      <MyPreparation/>
      <TimeTable/>
    </div>
  );
}

export default App;
