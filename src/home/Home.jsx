import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
        </div>
        <Footer className="mt-auto" />
      </div>
    
    </>
  );
};

export default Home;
