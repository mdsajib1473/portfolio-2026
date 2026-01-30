import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Publications from './components/Publications';
import Volunteering from './components/Volunteering';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Publications />
        <Volunteering />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
