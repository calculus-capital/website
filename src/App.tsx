import React from "react";
import "./App.css";
import "@fontsource/fira-sans";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Intro } from "./components/intro/intro";
import { Earlypay } from "./components/earlypay/earlypay";
import { Earlycollect } from "./components/earlycollect/earlycollect";

function App() {
  return (
    <div className="App">
      <div className="appContent">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Intro></Intro>} />
          <Route path="/early-pay" element={<Earlypay></Earlypay>} />
          <Route path="/early-collect" element={<Earlycollect></Earlycollect>} />
        </Routes>
        {/* <Earlypay></Earlypay> */}
        {/* <Earlycollect></Earlycollect> */}
        {/* <Intro></Intro> */}
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
