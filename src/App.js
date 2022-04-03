import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from './components/GlobalStyles';
import {humanTheme, ghostTheme } from './components/Themes';
import {Context} from './Context'
import './App.css';
import Footer from './components/Footer'
import Nav from './components/Nav';
import Home from './components/Home'

import Location from './components/ghost/Location'
import Amenities from './components/ghost/Amenities'
import Terms from './components/ghost/Terms'
import About from './components/ghost/About'
import Welcome from './components/ghost/Welcome'

import Pricing from './components/human/Pricing'
import Payment from './components/human/Payment'
import Careers from './components/human/Careers'
import Booking from './components/human/Booking'

function App() {
  const {closeModal, theme} = React.useContext(Context)

  return (
    <div onClick={closeModal}>
      <ThemeProvider theme={theme ? humanTheme : ghostTheme}>
        <GlobalStyles />
        <div className="app">
        <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/location" element={<Location />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </div>
        <Footer />
      </ThemeProvider>
      
    </div>
    
  )
}

export default App;
