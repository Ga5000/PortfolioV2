import '/src/styles/Nav.css'
function Nav(){
    return( <nav>
        <a href="#about">
            <div className="line"></div>
            About
        </a>
        <a href="#experience">
            <div className="line"></div>
            Experience
        </a>
            <a href="#skills">
                <div className="line"></div>
                Skills
            </a>
        <a href="#projects">
            <div className="line"></div>
            Projects
        </a>
    </nav>
    )
}

export default Nav;