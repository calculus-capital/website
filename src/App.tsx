import React from 'react'
import './App.css'
import "@fontsource/fira-sans"

import { Header } from './components/header/header'
import { Intro } from './components/intro/intro'
import { Payables } from './components/payables/payables'
import { Receivables } from './components/receivables/receivables'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Intro></Intro>
      <Payables></Payables>
      <Receivables></Receivables>
    </div>
  )
}

export default App
