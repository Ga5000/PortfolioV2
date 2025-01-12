import '../styles/Main.css';
import { useState, useEffect } from 'react';
import detectLanguage from '../util';

const Main = () => {
  const language = detectLanguage();
  const phrases = [
    language === 'en' 
      ? "Passionate about creating impactful software solutions that improve people's lives" 
      : "Apaixonado por criar soluções de software impactantes que melhoram a vida das pessoas",
    language === 'en' 
      ? "Eager to take on new challenges and contribute to innovative projects." 
      : "Ansioso para enfrentar novos desafios e contribuir para projetos inovadores.",
    language === 'en' 
      ? "Driven by a love for problem-solving and delivering high-quality code" 
      : "Movido pelo amor por resolver problemas e entregar código de alta qualidade",
    language === 'en' 
      ? "Always learning and adapting to new technologies in the software development world" 
      : "Sempre aprendendo e se adaptando a novas tecnologias no mundo do desenvolvimento de software",
    language === 'en' 
      ? "Focused on writing clean, maintainable, and efficient code" 
      : "Focado em escrever código limpo, manutenível e eficiente",
    language === 'en' 
      ? "Committed to building scalable and reliable applications" 
      : "Comprometido em construir aplicações escaláveis e confiáveis",
    language === 'en' 
      ? "Dedicated to crafting exceptional user experiences through thoughtful software design" 
      : "Dedicado a criar experiências excepcionais para os usuários através de um design de software cuidadoso",
    language === 'en' 
      ? "Focused on delivering solutions that meet both technical and user needs" 
      : "Focado em entregar soluções que atendam às necessidades técnicas e dos usuários",
    language === 'en' 
      ? "Thrives in fast-paced environments, continuously learning and growing in the tech field" 
      : "Prospera em ambientes dinâmicos, aprendendo continuamente e crescendo no campo da tecnologia"
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
        <h1 className="name">
          <span>{language === 'en' ? 'Gabriel' : 'Gabriel'}</span> Lisboa
        </h1>
        <h3 className="role">
          {language === 'en' ? 'Back-End' : 'Desenvolvedor'} <span>{language === 'en' ? 'Developer' : 'Back-end'}</span>
        </h3>
      </div>

      <div className="phrases">
        <h1 className="text-phrase">{phrases[currentPhraseIndex]}</h1>
      </div>

      <div className="social">
        <button className="social-btn">
          <a href="https://github.com/Ga5000" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> Github
          </a>
        </button>
        <button className="social-btn">
          <a href="https://www.linkedin.com/in/gabriel-lisboa05/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </button>
        <button className="social-btn">
          <a href="https://www.hackerrank.com/profile/Gbr_i" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-hackerrank"></i> HackerRank
          </a>
        </button>
      </div>
    </section>
  );
}

export default Main;
