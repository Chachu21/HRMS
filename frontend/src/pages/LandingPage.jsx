import React from "react";
import Header from "../comopnents/landingPage/Header";
import { Outlet } from "react-router-dom";
const LandingPage = () => {
  return (
    <div>
      <Header />
      <main className="mt-[70px]">
       <Outlet />
      </main>
    </div>
  );
};

export default LandingPage;
