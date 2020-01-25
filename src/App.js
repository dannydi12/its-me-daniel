import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './App.css';
import widthContext from './widthContext';
import WordList from './WordList/WordList';
import Landing from './Landing/Landing';
import About from './About/About';

function App() {
  return (
    <main>
      <Landing />
      <About />
      <section className='projects-section'>

      </section>
    </main >
  );
}

export default App;