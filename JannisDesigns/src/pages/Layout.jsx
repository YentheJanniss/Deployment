import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Diensten from "../components/Diensten";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Layout() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Portfolio />
      <Diensten />
      <Contact />
      <Footer />
    </div>
  );
}

export default Layout;
