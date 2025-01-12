import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import '../styles/Projects.css';

const Projects = () => {
    const [isInView, setIsInView] = useState(false);

    const projects = [
        { 
          title: "Sudoku Solver", 
          description: "A Sudoku solver implemented using backtracking, with a user interface built in Java Swing for a simple and intuitive experience. The solver can efficiently solve any Sudoku puzzle, making use of recursion and backtracking algorithms.",
          techStack: ["Java"],
          githubUrl: "dmiqwndko", 
        }, 
        { 
          title: "Library API", 
          description: "A simple library management API built with Java, Spring Boot, and MySQL. It supports basic CRUD operations for managing books, users, and transactions. Authentication is handled via JWT for secure access to endpoints.",
          techStack: ["Java", "MYSQL", "Spring Boot", "JWT"],
          githubUrl: "dmiqwndko",
        }, 
        { 
          title: "Clinic API", 
          description: "A clinic management API designed to handle basic functionalities such as appointment scheduling, patient records, and staff management. Built with Java, Spring Boot, and MySQL, the API ensures secure access through JWT authentication.",
          techStack: ["Java", "MYSQL", "Spring Boot", "JWT"],
          githubUrl: "dmiqwndko", 
        },
      ]
      

   
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsInView(true); 
                } else {
                    setIsInView(false); 
                }
            });
        }, { threshold: 0.5 }); 

        const section = document.querySelector("#projects-section");
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    return (
        <section id="projects-section" className={isInView ? 'animate' : ''}>
            <h1>Projects</h1>
            <div className="container">
                {projects.map((project, index) => (
                    <Card 
                        key={index}
                        title={project.title}
                        githubUrl={project.githubUrl}
                        description={project.description}
                        techStack={project.techStack}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;
