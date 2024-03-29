import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Navigate } from "react-router";
import { Routes, Route } from "react-router-dom";

function Kanbas() {
    return (
      <div className="d-flex">
        <div>
          <KanbasNavigation />
        </div>
        <div style={{ flexGrow: 1 }}>
          <Routes>
            {/* navigate below - when you hit the kanbas tab 
            it automatically goes to the dashboard */}
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Account" element={<h1>Account</h1>} />
            <Route path="/Courses/:cid/*" element={<Courses/>} />
          </Routes>
        </div>
      </div>
  );}
  export default Kanbas;