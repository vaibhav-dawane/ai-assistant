'use client'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

export default function Home() {

  return (
    <>
      <ToastContainer />
      <div className="">
        <Navbar/>
        <Hero/>
        <Features />
        <Feedback />
        <Footer />
      </div>
    </>
  );
}
