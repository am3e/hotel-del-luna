import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from './components/GlobalStyles';
import { lightTheme, darkTheme } from './components/Themes';
import {Context} from './Context'
import './App.css';
import Footer from './components/Footer'
import Nav from './components/Nav';
import Home from './components/Home'

import Location from './components/ghost/Location'
import Amenities from './components/ghost/Amenities'
import Support from './components/ghost/Support'
import Terms from './components/ghost/Terms'
import About from './components/ghost/About'
import Confirmation from './components/ghost/Confirmation'

import Pricing from './components/human/Pricing'
import Payment from './components/human/Payment'
import AboutHuman from './components/human/AboutHuman'
import Careers from './components/human/Careers'
import Room from './components/human/Room'

function App() {
  const {closeModal, theme} = React.useContext(Context)

  return (
    <div onClick={closeModal}>
      <ThemeProvider theme={theme ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/location" element={<Location />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/support" element={<Support />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/about" element={theme ? <AboutHuman /> : <About />} />
          <Route path="/about" element={<Careers />} />
          <Route path="/room" element={<Room />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/payment" element={<Payment />} />



        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
    
  )
}

export default App;
