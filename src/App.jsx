import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer'


const App = () => {


  return (
    <>
    <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Contact />
        <Footer/>
      </main>
    </>
      
    
  );
};

export default App;
