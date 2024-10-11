import { Container, Button } from 'react-bootstrap';
import './HeroSection.css'; // Add custom styles

function HeroSection() {
  return (
    <Container fluid className="hero-section text-center" id='home'>
      <div className="content-wrapper">
        <h1 className="heading animate__animated animate__fadeInDown">
          Hi, I am Jesvin L Jose
        </h1>
        <p className="subheading animate__animated animate__fadeIn animate__delay-1s">
        React.js Developer | Building Engaging and High-Performance Web Applications with Clean Code and Modern Solutions
        </p>
        <Button variant="dark" href="#projects" className="neon-button">
          VIEW MY PROJECTS
        </Button>
      </div>
    </Container>
  );
}

export default HeroSection;
