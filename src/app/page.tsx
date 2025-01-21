import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Feedback from "./components/Feedback";

export default function Home() {
  return (
    <>
      <div className="">
        <Navbar/>
        <Hero/>
        <Features />
        <Feedback />
      </div>
    </>
  );
}
