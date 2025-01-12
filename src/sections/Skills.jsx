import React, { useEffect, useRef } from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillsRef = useRef(null);

  const skills = [
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", name: 'Java' },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg", name: 'Spring Boot' },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", name: 'MySQL' },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg", name: 'Postman' },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", name: 'Git' },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg", name: 'C' },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", name: 'JavaScript' },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", name: 'React' },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", name: 'Docker' },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg", name: 'Maven' },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", name: 'Python' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          } else {
            entry.target.classList.remove('fade-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    const skillsSection = skillsRef.current;
    if (skillsSection) {
      observer.observe(skillsSection);
      return () => observer.unobserve(skillsSection);
    }
  }, []);

  return (
    <section className="skills" id="skills-section" ref={skillsRef}>
      <h1>Languages, Tools, Frameworks</h1>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.image} alt={skill.name} className="skill-image" />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
