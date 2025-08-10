import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import ProjectCreator from './components/ProjectCreator';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <ProjectCreator />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;