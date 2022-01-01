import React from "react";
import "./App.css";
import "@fontsource/fira-sans";

import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Intro } from "./components/intro/intro";

function App() {
  return (
    <div className="App">
      <div className="appContent">
        {/* <Header></Header> */}
        <Intro></Intro>
        {/* <Payables></Payables> */}
        {/* <Receivables></Receivables> */}
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
