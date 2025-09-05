import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Impact from './components/Impact';
import Volunteer from './components/Volunteer';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Programs />
      <Impact />
      <Volunteer />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;