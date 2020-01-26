import React from 'react';
import './App.css';
import Landing from './Landing/Landing';
import About from './About/About';
import Work from './Work/Work';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

function App() {
  return (
    <main>
      <Landing />
      <About />
      <Work />
      <Contact />
      <Footer />
    </main >
  );
}

export default App;