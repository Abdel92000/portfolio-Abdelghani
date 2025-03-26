import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './component/comon/header';
import Home from './pages/home';
import Footer from './component/comon/footer';
// import Projects from './pages/Projects';
// import Cv from './pages/Cv';
// import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
