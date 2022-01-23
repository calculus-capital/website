import React from "react";
import "./App.css";
import "@fontsource/fira-sans";

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
        {/* <Earlypay></Earlypay> */}
        <Earlycollect></Earlycollect>
        {/* <Intro></Intro> */}
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
