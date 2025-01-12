import './App.css';
import Main from './sections/Main';
import Nav from './components/Nav';
import Projects from './sections/Projects';
import TimeLine from './sections/TimeLine';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import { GraduationCap, Code, FolderCog, Laptop } from 'lucide-react';


function App() {
  const timelineItems = 
  [
    {
      id: 1,
      title: "Diving Into Programming",
      description: "Embarked on my programming journey, eager to learn and explore.",
      date: "Oct 2022",
      icon: <Code color='green' />
    },
    {
      id: 2,
      title: "Pursuing a Bachelor's in Computer Science",
      description: "Started my formal education in Computer Science, laying the foundation for my career.",
      date: "Feb 2023",
      icon: <GraduationCap color='green' />,
    },
    {
      id: 3,
      title: "Mastering Back-End Development with Java Spring Boot",
      description: "Focused on back-end development and mastering Java Spring Boot to build robust and scalable applications.",
      date: "Jan 2024",
      icon: <FolderCog color='green' />
    },
    {
      id: 4,
      title: "Preparing for Future Challenges and Advanced Concepts",
      description: "Currently honing my skills in data structures, algorithms, and deepening my expertise in Java for the next stage of my career.",
      date: "Present",
      icon: <Laptop color='green' />
    },
  ]
  
  

  return (
    <>
     <div className="app-container">
      <Main/>
      <Nav />
      <Projects />
      <TimeLine items={timelineItems}/>
      <Skills />
      <Contact />
    </div>
      
    </>
  );
}

export default App;
