import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./layout/Dashboard/Dashboard";
import "./style.css";
import "./reset.css";
import Pending from "./pages/Pending/Pending";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard/pending" element={<Pending />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
