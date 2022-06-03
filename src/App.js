import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Preloader1 from "./components/Preloader1";
import Preloader2 from "./components/Preloader2";
import About from "./components/About";
import React, { useEffect, useState } from "react";
import ReactLoading from 'react-loading';
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [loading , setloading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
       setloading(true);
      //  no api fetching yet heeee
    }, 6500);
  },[])

  return (
    <div className="text-white">
      { !loading ? <Preloader1/>:<><Navbar /><Home /><About /><Skills /><Projects /> </> }
    </div>
  );
}

export default App;
