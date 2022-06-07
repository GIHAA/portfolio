import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Preloader1 from "./components/Preloader1";
import About from "./components/About";
import React, { useEffect, useState } from "react";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [loading , setloading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
       setloading(true);
      //  no api fetching yet
    }, 3000);
  },[])

  useEffect(() => {
    Aos.init({ offset: 0, duration: 2000 })
    window.addEventListener('load', Aos.refresh)
  }, [])

  return (
    <div className="text-white">
      { !loading ? <Preloader1/>:<><Navbar /><Home /><About /><Experience /><Projects /><Contact /><Footer /></> }
    </div>
  );
}

export default App;
