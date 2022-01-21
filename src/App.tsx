import React, { useEffect } from "react";
import "./App.css";
import MainPage from "./Containers/MainPage";
// import RegistrationPage from "./Containers/RegistrationPage";

const App = () => {
  useEffect(() => {
    console.log("app mount");
  }, []);
  return <MainPage />;
};

export default App;
