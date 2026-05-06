import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Timeline } from './components/Timeline/Timeline';
import { Projects } from './components/Projects/Projects';
import { CaseStudies } from './components/CaseStudies/CaseStudies'; // Ensure this exists
import { Contact } from './components/Contact/Contact';
import { useKeyboardNavigation } from './hooks/useKeyboardNavigation';
import styles from './App.module.css';

export default function App() {
  // IDs must match the <section id="..."> in your components
  const sectionIds = ['home', 'about', 'skills', 'cicd', 'projects', 'casestudies', 'contact'];
  useKeyboardNavigation(sectionIds);

  return (
    <main className={styles.app}>
      <Navbar />
      <Hero /> {/* Already has id="home" */}
      <About /> {/* <section id="about"> */}
      <Skills /> {/* <section id="skills"> */}
      <Timeline /> {/* <section id="cicd"> */}
      <Projects /> {/* <section id="projects"> */}
      <CaseStudies /> {/* <section id="casestudies"> */}
      <Contact /> {/* <section id="contact"> */}
      <footer className={styles.footer}>© {new Date().getFullYear()} Jemal Adem. Built with React + Vite.</footer>
    </main>
  );
}