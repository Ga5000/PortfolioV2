import React, { useEffect } from "react";
import "../styles/TimeLine.css";

const TimeLine = ({ items }) => {
  useEffect(() => {
    const timelineTexts = document.querySelectorAll(".timeline-text");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
          } else {
            entry.target.classList.remove("animated"); 
          }
        });
      },
      { threshold: 0.1 } 
    );

    timelineTexts.forEach((text) => observer.observe(text));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="timeline-container" id="timeline-section">
      <div className="timeline-line"></div>
      <div className="timeline-content">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`timeline-item ${index % 2 === 0 ? "timeline-left" : "timeline-right"}`}
          >
            <div className={`timeline-text ${index % 2 === 0 ? "text-right" : "text-left"}`}>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-description">{item.description}</p>
              <span className="timeline-date">{item.date}</span>
            </div>
            <div className="timeline-icon-container">
              <div className="timeline-icon">{item.icon}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimeLine;
