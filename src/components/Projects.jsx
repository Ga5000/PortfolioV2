import '/src/styles/Projects.css';

function Projects() {
    return (
        <section className="projects-section" id="projects">
            <h2 className="section-title">Projects</h2>
            <div className="project-card">
                <div className="project-card-header">
                    <h3 className="project-title">Clinic</h3>
                    <div className="project-icons">
                        <img src="/src/assets/api_icon.svg" alt="API icon" className="icon"/>
                        <a href="https://github.com/Ga5000/Clinic" target="_blank" rel="noopener noreferrer"
                           aria-label="View on GitHub">
                            <img src="/src/assets/github_icon_no_background.svg" alt="GitHub icon" className="icon"/>
                        </a>
                    </div>
                </div>
                <div className="project-card-content">
                    <p className="project-description">
                        REST API created to enhance my skills and learn more about Spring. It uses Spring Security with
                        JWT for authentication.
                    </p>
                    <ul className="project-technologies">
                        <li>Spring</li>
                        <li>Java</li>
                        <li>MySQL</li>
                    </ul>
                </div>
            </div>
            <div className="project-card">
                <div className="project-card-header">
                    <h3 className="project-title">Library API</h3>
                    <div className="project-icons">
                        <img src="/src/assets/api_icon.svg" alt="API icon" className="icon"/>
                        <a href="https://github.com/Ga5000/Library-Rest-API" target="_blank" rel="noopener noreferrer"
                           aria-label="View on GitHub">
                            <img src="/src/assets/github_icon_no_background.svg" alt="GitHub icon" className="icon"/>
                        </a>
                    </div>
                </div>
                <div className="project-card-content">
                    <p className="project-description">
                        REST API created to enhance my skills and learn more about Spring JPA. It uses Spring Security
                        with
                        JWT for authentication.
                    </p>
                    <ul className="project-technologies">
                        <li>Spring</li>
                        <li>Java</li>
                        <li>MySQL</li>
                    </ul>
                </div>
            </div>
            <div className="project-card">
                <div className="project-card-header">
                    <h3 className="project-title">Sudoku Solver</h3>
                    <div className="project-icons">
                        <img src="/src/assets/code.svg" alt="code icon" className="icon"/>
                        <a href="https://github.com/Ga5000/SudokuSolver" target="_blank" rel="noopener noreferrer"
                           aria-label="View on GitHub">
                            <img src="/src/assets/github_icon_no_background.svg" alt="GitHub icon" className="icon"/>
                        </a>
                    </div>
                </div>
                <div className="project-card-content">
                    <p className="project-description">
                        Sudoku solver create to enhance my skills and programming logic. It uses Java 20 and it&#39;s
                        libraries.
                    </p>
                    <ul className="project-technologies">
                        <li>Java</li>
                        <li>Java Swing</li>
                    </ul>
                </div>
            </div>
            <div className="project-card">
                <div className="project-card-header">
                    <h3 className="project-title">Portfolio V1</h3>
                    <div className="project-icons">
                        <img src="/src/assets/web.svg" alt="web icon" className="icon"/>
                        <a href="https://portfolio-smoky-ten-28.vercel.app/" target='_blank' rel="noopener noreferrer">
                            <img src="/src/assets/external_link_icon.svg" alt="link icon" className="icon"/>
                        </a>
                        <a href="https://github.com/Ga5000/Portfolio" target="_blank" rel="noopener noreferrer"
                           aria-label="View on GitHub">
                            <img src="/src/assets/github_icon_no_background.svg" alt="GitHub icon" className="icon"/>
                        </a>
                    </div>
                </div>
                <div className="project-card-content">
                <p className="project-description">
                        Sudoku solver create to enhance my skills and programming logic. It uses Java 20 and it&#39;s
                        libraries.
                    </p>
                    <ul className="project-technologies">
                        <li>React</li>
                        <li>CSS</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Projects;
