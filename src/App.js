import React, { useEffect, useRef } from 'react';
import './App.css';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

function App() {
  const gridRef = useRef(null);
  
  useEffect(() => {
    // Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    // Grid animation
    const animateGrid = () => {
      if (gridRef.current) {
        const grid = gridRef.current;
        const gridItems = Array.from(grid.querySelectorAll('.grid-item'));
        
        gridItems.forEach((item) => {
          const delay = Math.random() * 2;
          item.style.animationDelay = `${delay}s`;
        });
      }
    };

    animateGrid();

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  // Generate grid items
  const generateGridItems = (count) => {
    const items = [];
    for (let i = 0; i < count; i++) {
      items.push(<div key={i} className="grid-item"></div>);
    }
    return items;
  };

  return (
    <div className="App">
      <div className="background-overlay"></div>
      <div className="grid-background" ref={gridRef}>
        {generateGridItems(100)}
      </div>
      
      <div className="torii-gate">
        <div className="torii-top"></div>
        <div className="torii-lintel"></div>
        <div className="torii-column left"></div>
        <div className="torii-column right"></div>
      </div>
      
      <div className="sakura-container">
        {Array(20).fill().map((_, i) => (
          <div key={i} className="sakura" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${10 + Math.random() * 20}s`
          }}></div>
        ))}
      </div>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="japanese-text animate-on-scroll">知恵</div>
            <h1 className="animate-on-scroll">Amit Sharma</h1>
            <h2 className="animate-on-scroll">Software Engineer</h2>
            <p className="animate-on-scroll">I turn coffee into code by day and binge anime by night. Software engineer with a knack for elegant solutions and a terrible habit of naming variables after my favorite characters. Let's build something worth pausing the next episode for.</p>
            <div className="social-links animate-on-scroll">
              <a href="https://github.com/amitsharma101" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/amitsharma48" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/__amit_.sharma____" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="mailto:amitsharmamail101@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Amit. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
