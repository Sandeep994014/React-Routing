import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainHome from './components/MainHome';
import About from './components/About';
import Contact from './components/Contact';
import NoPage from './components/NoPage';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar /> {/* Navbar displayed at the top for navigation */}
      <Routes>
        <Route path="/" element={<MainHome />} />   {/* Home Page */}
        <Route path="/about" element={<About />} />  {/* About Page */}
        <Route path="/contact" element={<Contact />} /> {/* Contact Page */}
        <Route path="*" element={<NoPage />} />      {/* Catch-all for 404 */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
