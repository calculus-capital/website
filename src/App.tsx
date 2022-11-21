import React from "react";
import "./App.css";
import "@fontsource/fira-sans";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Intro } from "./components/intro/intro";
import { Revenue } from "./components/revenue/revenue";
import { Episodes } from "./components/episodes/episodes";

function App() {
  return (
    <div className="App">
      <div className="appContent">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Intro></Intro>} />
          <Route path="/revenue" element={<Revenue></Revenue>} />
          <Route path="/episodes" element={<Episodes></Episodes>} />
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
