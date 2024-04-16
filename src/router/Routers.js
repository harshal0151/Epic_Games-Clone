

  import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../page/Home';
import Brows from "../page/Brows"
import News from '../page/News';
import Popular from '../page/Popular';

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/brows" element={<Brows />} />
        <Route path="/news" element={<News />} />
        <Route path="/popular" element={<Popular />} />
       
      </Routes>
    </Router>
  );
};

export default Routers;
