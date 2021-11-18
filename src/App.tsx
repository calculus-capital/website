import React from 'react'
import './App.css'
import "@fontsource/fira-sans"

import { Header } from './components/header/header'
import { Intro } from './components/intro/intro'
import { Payables } from './components/payables/payables'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Intro></Intro>
      <Payables></Payables>
    </div>
  )
}

export default App
