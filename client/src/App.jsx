import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./layout/Dashboard/Dashboard";
import "./style.css";
import "./reset.css";
import Pending from "./pages/Pending/Pending";
import PrivateRoute from "./context/ProtectedRoute";
import Logout from "./Logout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route path="/dashboard/pending" element={<Pending />} />
          </Route>
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
