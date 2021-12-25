import React from "react";
import Footer from "../../Components/Common/Footer";
import Header from "../../Components/Common/Header";
import Registration from "../../Components/Registation";

const RegistrationPage = () => {
  return (
    <div className="page_wrapper">
      <Header />
      <main className="main">
        <Registration />
      </main>
      <Footer />
    </div>
  );
};

export default RegistrationPage;
