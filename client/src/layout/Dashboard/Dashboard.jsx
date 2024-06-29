import "./dashboard.css";
import Navbar from "../../components/Navbar/Navbar";
import Pending from "../../pages/Pending/Pending";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <Pending />
      </div>
    </>
  );
};

export default Dashboard;
