import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <AnimatePresence wait>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
