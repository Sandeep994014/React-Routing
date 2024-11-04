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
      <Navbar /> 
      <Routes>
        <Route path="/" element={<MainHome />} />  
        <Route path="/about" element={<About />} />  
        <Route path="/contact" element={<Contact />} /> 
        <Route path="*" element={<NoPage />} />     
      </Routes>
    </BrowserRouter>
  );
};

export default App;
