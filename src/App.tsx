import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Proteus from './pages/Proteus';
import OnDemand from './pages/OnDemand';
import PaymentSuccess from './pages/PaymentSuccess';
import Games from './pages/Games';
import { useScrollToTop } from './hooks/useScrollToTop';

function AppContent() {
  useScrollToTop();

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/proteus" element={<Proteus />} />
          <Route path="/on-demand" element={<OnDemand />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/games" element={<Games />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;