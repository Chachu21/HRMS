import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../comopnents/landingPage/Header";

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
