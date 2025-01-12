import React, { useState, useEffect, useRef } from "react";
import { Github } from "lucide-react";
import "../styles/Card.css";

const Card = ({ title, description, techStack, githubUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const cardRef = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true); 
        } else {
          setIsInView(false); 
        }
      });
    }, { threshold: 0.5 });

    const currentCard = cardRef.current;
    if (currentCard) observer.observe(currentCard);

    return () => {
      if (currentCard) observer.unobserve(currentCard);
    };
  }, []);

  return (
    <div
      className={`card ${isInView ? "animate" : ""}`}
      ref={cardRef}
    >
      <div className="title-link">
        <h2>{title}</h2>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="github-icon-wrapper"
        >
          <span
            style={{
              display: "inline-block",
              transition: "color 0.3s ease-in-out",
              color: isHovered ? "#32cd32" : "white",
            }}
          >
            <Github size={24} />
          </span>
        </a>
      </div>
      <p className="description">{description}</p>
      <div className="tech-stack">
        {techStack.map((stack, index) => (
          <div className="stack" key={index}>
            <p className="tech">{stack}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
