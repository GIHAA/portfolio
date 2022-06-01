import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Preloader1 from "./components/Preloader1";
import React, { useEffect, useState } from "react";
import ReactLoading from 'react-loading';

function App() {
  const [done , setDone] = useState(false);

  useEffect(() => {
    setTimeout(() => {
        setDone(true);
    }, 2000);
  },[])

  return (
    <div className="text-white">
      {/* <Preloader1 /> */}
      { !done ? <Preloader1/> : <><Navbar /><Home /></>  }
      {/* <Navbar />
      <Home /> */}
    </div>
  );
}

export default App;
