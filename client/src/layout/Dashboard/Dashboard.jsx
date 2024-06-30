import "./dashboard.css";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
