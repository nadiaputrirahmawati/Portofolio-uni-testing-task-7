import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './components/HomePage';
import { Contact } from './Pages/Contact';
import { Blog } from './Pages/Blog';
// import Blog from './Pages/Blog';  // Pastikan Anda memiliki komponen ini
// import Contact from './Pages/Contact';  // Pastikan Anda memiliki komponen ini

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={< Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
