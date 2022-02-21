import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from './components/GlobalStyles';
import { lightTheme, darkTheme } from './components/Themes';
import './App.css';
import Footer from './components/Footer'
import Nav from './components/Nav';
import {Context} from './Context'
import Home from './components/Home'
import Location from './components/ghost/Location'
import Pricing from './components/human/Pricing'
import Amenities from './components/ghost/Amenities'
import Support from './components/ghost/Support'
import Terms from './components/ghost/Terms'
import About from './components/ghost/About'
import AboutHuman from './components/human/AboutHuman'
import Careers from './components/human/Careers'
import Booking from './components/human/Booking'



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
          <Route path="/booking" element={<Booking />} />

        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
    
  )
}

export default App;
