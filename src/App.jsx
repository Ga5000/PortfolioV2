import './App.css';
import Main from './sections/Main';
import Nav from './components/Nav';
import Projects from './sections/Projects';
import TimeLine from './sections/TimeLine';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import { GraduationCap, Code, FolderCog, Laptop } from 'lucide-react';
import detectLanguage from './util';

function App() {
  const language = detectLanguage();

  const timelineItems = [
    {
      id: 1,
      title: language === 'en' ? "Diving Into Programming" : "Mergulhando na Programação",
      description: language === 'en'
        ? "Embarked on my programming journey, eager to learn and explore."
        : "Comecei minha jornada na programação, ansioso para aprender e explorar.",
      date: language == 'en' ? "Oct 2022" : "Out 2022",
      icon: <Code color='green' />
    },
    {
      id: 2,
      title: language === 'en'
        ? "Pursuing a Bachelor's in Computer Science"
        : "Cursando Bacharelado em Ciência da Computação",
      description: language === 'en'
        ? "Started my formal education in Computer Science, laying the foundation for my career."
        : "Iniciei minha educação formal em Ciência da Computação, estabelecendo a base para minha carreira.",
      date: language == 'en' ?  "Feb 2023" : "Fev 2023",
      icon: <GraduationCap color='green' />,
    },
    {
      id: 3,
      title: language === 'en'
        ? "Mastering Back-End Development with Java Spring Boot"
        : "Dominando Desenvolvimento Back-End com Java Spring Boot",
      description: language === 'en'
        ? "Focused on back-end development and mastering Java Spring Boot to build robust and scalable applications."
        : "Focado no desenvolvimento back-end e dominando o Java Spring Boot para construir aplicações robustas e escaláveis.",
      date: "Jan 2024",
      icon: <FolderCog color='green' />
    },
    {
      id: 4,
      title: language === 'en'
        ? "Preparing for Future Challenges and Advanced Concepts"
        : "Preparando-se para Desafios Futuros e Conceitos Avançados",
      description: language === 'en'
        ? "Currently honing my skills in data structures, algorithms, and deepening my expertise in Java for the next stage of my career."
        : "Atualmente aprimorando minhas habilidades em estruturas de dados, algoritmos e aprofundando minha experiência em Java para a próxima etapa da minha carreira.",
      date: language == 'en' ? "Present" : "Presente",
      icon: <Laptop color='green' />
    },
  ];

  return (
    <>
      <div className="app-container">
        <Main />
        <Nav />
        <Projects />
        <TimeLine items={timelineItems} />
        <Skills />
        <Contact />
      </div>
    </>
  );
}

export default App;
