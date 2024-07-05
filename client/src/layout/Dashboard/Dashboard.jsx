import "./dashboard.css";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
