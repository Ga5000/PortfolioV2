import '../styles/Main.css';
import { useState, useEffect } from 'react';


const Main = () => {
  const phrases = [
    "Passionate about creating impactful software solutions that improve people's lives",
    "Eager to take on new challenges and contribute to innovative projects.",
    "Driven by a love for problem-solving and delivering high-quality code",
    "Always learning and adapting to new technologies in the software development world",
    "Focused on writing clean, maintainable, and efficient code",
    "Committed to building scalable and reliable applications",
    "Dedicated to crafting exceptional user experiences through thoughtful software design",
    "Focused on delivering solutions that meet both technical and user needs",
    "Thrives in fast-paced environments, continuously learning and growing in the tech field"
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex(prevIndex => (prevIndex + 1) % phrases.length);
    }, 5995);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="main-section">
    
      <div className="me">
        <h1 className="name"><span>Gabriel</span> Lisboa</h1>
        <h3 className="role">Back-End <span>Developer</span></h3>
      </div>

      <div className="phrases">
        <h1 className="text-phrase">{phrases[currentPhraseIndex]}</h1>
      </div>

      <div className='social'>
        <button className='social-btn'>
          <a href="https://github.com/Ga5000" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> Github
          </a>
        </button>
        <button className='social-btn'>
          <a href="https://www.linkedin.com/in/gabriel-lisboa05/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </button>
        <button className='social-btn'>
          <a href="https://www.hackerrank.com/profile/Gbr_i" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-hackerrank"></i> HackerRank
          </a>
        </button>
        
      </div>
    </section>
  );
}

export default Main;

