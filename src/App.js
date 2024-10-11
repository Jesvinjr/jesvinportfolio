import './App.css';
import PortfolioNavbar from './components/PortfolioNavbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <PortfolioNavbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection/>
      <ProjectsSection />
      <ContactSection />
      <Footer />
      
    </>
  );
}

export default App;
