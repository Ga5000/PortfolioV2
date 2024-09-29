import '/src/styles/Projects.css';

function Projects() {
    return (
        <div className="projects" id="projects">
            <div className="project-card">
                <div className="project-card-header">
                    <h1 className="project-title">Clinic</h1>
                    <img src="/src/assets/api_icon.svg" alt="API icon" className="icon" />
                    <a href="https://github.com/Ga5000/Clinic" target="_blank" rel="noopener noreferrer">
                        <img src="/src/assets/github_icon_no_background.svg" alt="GitHub icon" className="icon" />
                    </a>
                </div>
                <div className="project-card-content">
                    <p className="project-description">
                        REST API created to enhance my skills and to learn more about Spring. It uses Spring Security with JWT for authentication.
                    </p>
                    <ul className="project-technologies">
                        <li>Spring</li>
                        <li>Java</li>
                        <li>MySQL</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Projects;
