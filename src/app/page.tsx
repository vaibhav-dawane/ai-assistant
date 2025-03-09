'use client'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    async function verifyToken() {
      const response = await fetch('/api/verify-token');
      if(response.ok){
        console.log("User Is logged in");
      }
      else
      {
        console.log("Unauthorised User");
      }
    }
    verifyToken();
  }, []);
  return (
    <>
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
