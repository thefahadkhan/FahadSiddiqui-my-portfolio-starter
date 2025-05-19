import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonial from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollButton from './components/ScrollButton';

const App = () => {
    return (
      <div>
        <Navbar />
        <Header />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Testimonial />
        <Contact />
        <Footer />
        <ScrollButton />
      </div>
    );
  };
  
  export default App;
  