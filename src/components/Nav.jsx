import '../styles/Nav.css';
import { useState, useEffect } from 'react';

const Nav = () => {
  const sections = [
    { id: 'main-section', name: 'Main' },
    { id: 'projects-section', name : 'Projects'},
    { id : 'timeline-section', name : "TimeLine"},
    { id : 'skills-section', name : "Skills"},
    { id : 'contact-section', name : "Contact"}
  ];

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleDotClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav>
      
      <ul className="dots-nav">
        {sections.map((section) => (
          <li
            key={section.id}
            className={`dot ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => handleDotClick(section.id)}
          />
        ))}
      </ul>

    </nav>
  );
};

export default Nav;
