import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Homepage from './components/Homepage';
import Newsletter from './components/Newsletter';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/newsletter" element={<Newsletter />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
