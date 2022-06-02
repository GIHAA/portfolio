import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Preloader1 from "./components/Preloader1";
import Preloader2 from "./components/Preloader2";
import About from "./components/About";
import React, { useEffect, useState } from "react";
import ReactLoading from 'react-loading';

function App() {
  const [loading , setloading] = useState(false);
  const [done , setDone] = useState(false);

  useEffect(() => {
    setTimeout(() => {
       setloading(true);
       setTimeout(() => {
         setDone(true);
       }, 2000);
    }, 4000);
  },[])

  return (
    <div className="text-white">
      {/* <Preloader1 /> */}
      { !loading ? <Preloader1/> : !done ? <Preloader2 />:<>{/*<Navbar /><Home />*/}<About /></>  }
      {/* <Navbar />
      <Home /> */}
    </div>
  );
}

export default App;