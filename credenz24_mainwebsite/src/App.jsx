import { useState } from 'react'
import './App.css'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact';
import Sponsors from './pages/Sponsors/Sponsors';
import WebTeam from './pages/Web-Team/WebTeam';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
function App() {


  return (
    <>
      <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/webteam" element={<WebTeam />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
