
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import IntroAnimation from './components/IntroAnimation';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <div className="app">
      {showIntro ? (
        <IntroAnimation onComplete={handleIntroComplete} />
      ) : (
        <>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <main className="main-container">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
