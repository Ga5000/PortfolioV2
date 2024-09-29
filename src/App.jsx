import './App.css'
import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import Social from "./components/Social.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";

function App() {
  return (
    <>
     <div className="main">
      <div className="main-content">
          <Header />
          <Nav/>
          <Social/>
      </div>
         <div className="sub-content">
             <About/>
             <Experience/>
             <Skills/>
             <Projects/>

         </div>
     </div>
    </>
  )
}

export default App
