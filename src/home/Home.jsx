import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Landing from "../components/landing/Landing";
import Principles from "../home/principles/Principles";
import Features from "../home/features/Features";
function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="pt-14 flex-grow">
        <Landing />
        <Principles></Principles>
        <Features></Features>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
