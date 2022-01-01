import React from "react";
import "./App.css";
import "@fontsource/fira-sans";

import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Intro } from "./components/intro/intro";
import { Outro } from "./components/outro/outro";
import { Payables } from "./components/payables/payables";
import { Receivables } from "./components/receivables/receivables";

function App() {
  return (
    <div className="App">
      <div className="appContent">
        {/* <Header></Header> */}
        <Intro></Intro>
        <Payables></Payables>
        <Receivables></Receivables>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
