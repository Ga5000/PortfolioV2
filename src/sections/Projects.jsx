import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import '../styles/Projects.css';
import detectLanguage from '../util';

const Projects = () => {
    const [isInView, setIsInView] = useState(false);

    const language = detectLanguage();

    const projects = [
        { 
            title: language === 'en' ? "Sudoku Solver" : "Resolutor de Sudoku",
            description: language === 'en' 
                ? "A Sudoku solver implemented using backtracking, with a user interface built in Java Swing for a simple and intuitive experience. The solver can efficiently solve any Sudoku puzzle, making use of recursion and backtracking algorithms." 
                : "Um resolutor de Sudoku implementado usando retrocesso, com uma interface de usuário construída em Java Swing para uma experiência simples e intuitiva. O resolutor pode resolver qualquer quebra-cabeça de Sudoku de forma eficiente, utilizando algoritmos de recursão e retrocesso.",
            techStack: ["Java"],
            githubUrl: "https://github.com/Ga5000/SudokuSolver", 
        }, 
        { 
            title: language === 'en' ? "Library API" : "API de Biblioteca",
            description: language === 'en' 
                ? "A simple library management API built with Java, Spring Boot, and MySQL. It supports basic CRUD operations for managing books, users, and transactions. Authentication is handled via JWT for secure access to endpoints." 
                : "Uma API simples de gerenciamento de biblioteca construída com Java, Spring Boot e MySQL. Ela suporta operações básicas de CRUD para gerenciar livros, usuários e transações. A autenticação é realizada via JWT para acesso seguro aos endpoints.",
            techStack: ["Java", "MYSQL", "Spring Boot", "JWT"],
            githubUrl: "https://github.com/Ga5000/Library-Rest-API",
        }, 
        { 
            title: language === 'en' ? "Clinic API" : "API de Clínica",
            description: language === 'en' 
                ? "A clinic management API designed to handle basic functionalities such as appointment scheduling, patient records, and staff management. Built with Java, Spring Boot, and MySQL, the API ensures secure access through JWT authentication." 
                : "Uma API de gerenciamento de clínica projetada para lidar com funcionalidades básicas, como agendamento de consultas, registros de pacientes e gerenciamento de funcionários. Construída com Java, Spring Boot e MySQL, a API garante acesso seguro por meio de autenticação JWT.",
            techStack: ["Java", "MYSQL", "Spring Boot", "JWT"],
            githubUrl: "https://github.com/Ga5000/Clinic", 
        },
    ];

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
            <h1>{language === 'en' ? "Projects" : "Projetos"}</h1>
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
