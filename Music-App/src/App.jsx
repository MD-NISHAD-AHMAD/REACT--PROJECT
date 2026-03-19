import React from "react";
import { MainRoutes } from "./Pages/MainRoutes";
import { Navbar } from "./Components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <MainRoutes/>
    </>
  )
}

export { App }