import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Intro from "../home/Intro";
import Principles from "../home/principles/Principles";
import Features from "../home/features/Features";
function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="pt-14 flex-grow">
        <Intro />
        <Principles></Principles>
        <Features></Features>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default Home;
