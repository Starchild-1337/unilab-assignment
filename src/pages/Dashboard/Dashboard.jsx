import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Header from "../../components/Header/Header";
import { Outlet, useNavigate } from "react-router-dom";
import Backdrop from "../../components/Backdrop/Backdrop";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [isBackdropOpen, setIsBackdropOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (!userData) {
      navigate("/");
    }

    setUser(userData);
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <main className="dashboard">
      {isBackdropOpen && (
        <Backdrop setIsBackdropOpen={setIsBackdropOpen} logout={logout} />
      )}
      <Header user={user} setIsBackdropOpen={setIsBackdropOpen} />
      <Outlet />
    </main>
  );
};

export default Dashboard;
