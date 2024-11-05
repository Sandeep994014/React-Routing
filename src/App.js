import React from 'react';
import { BrowserRouter, Routes, Route, Outlet ,Link} from 'react-router-dom';
import MainHome from './components/MainHome';
import About from './components/About';
import Contact from './components/Contact';
import NoPage from './components/NoPage';
import Navbar from './components/Navbar';
import  Career  from './components/Career';
import  FormDetails  from './components/FormDetails';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<MainHome />} />  
        {/* <Outlet/> */}
        <Route path="/about" element={<About />} />  
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/career" element={<Career />} /> 
        <Route path="/form-details" element={<FormDetails />} />
        <Route path="*" element={<NoPage />} />     
      </Routes>
    </BrowserRouter>
  );
};

export default App;
