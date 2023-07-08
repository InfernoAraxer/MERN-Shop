import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Router} from "react-router-dom"
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route page="/" element={<Layout/>}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
