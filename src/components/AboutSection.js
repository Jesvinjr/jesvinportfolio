import { Row, Col, Button, Card, Container } from 'react-bootstrap';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaGitlab, FaEnvelope } from 'react-icons/fa'; // Import social icons
import './AboutSection.css'; // Add custom styles for further customization

function AboutSection() {
  return (
    <div id="about mt-0">
      <Container
        fluid
        className="projects-section py-3 mt-0" id='about'
        style={{
          backgroundColor: '#151f28',

        }}
      >
        <Row>
          <Col>
            {/* Main Card for Skills, About Me, and Resume Download */}
            <Card className="about-card animate__animated animate__fadeInUp" style={{ backgroundColor: '#677D6A', textAlign: 'center', }}>
              <Card.Body>


                {/* About Me Section */}
                <h2 className="text-center neon-text">About Me</h2>
                <p className="text-center text-white">
                  I am a React.js Developer with expertise in creating dynamic, high-performance web applications.
                </p>
                <span
                  style={{
                    textAlign: 'center',
                    fontSize: '14px',  // Decrease the font size
                    maxWidth: '600px', // Set max width to control the length
                    margin: '0 auto',  // Center the paragraph
                  }}
                  className='text-white'
                >
                  <p>
                    <strong>Front-End Development:</strong> Expertise in React.js to build interactive UIs,
                    with a focus on component-based architecture and state management using tools like Redux.
                  </p>
                  <p>
                    <strong>Responsive Design:</strong> Implementing mobile-first, responsive designs using CSS,
                    Bootstrap, and modern frameworks to ensure seamless user experiences across devices.
                  </p>
                  <p>
                    <strong>JavaScript & Modern Technologies:</strong> Proficient in ES6+ syntax, leveraging cutting-edge tools
                    like Webpack and Babel to optimize application performance.
                  </p>
                </span>

                <br></br>
                {/* Add Resume Button */}
                <div className="text-center mb-4">
                  <Button
                    variant="primary"
                    href="/jesvinljose_resume.pdf" // Correct path
                    download
                    className="resume-button neon-button"
                  >
                    Download My Resume
                  </Button>
                </div>
                {/* Social Media Links */}
                <div className="text-center social-links">
                  <a
                    href="https://www.instagram.com/jesvin_jr/profilecard/?igsh=MXJvdzdqZ3Z5Ymp3bg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jesvin-l-jose-bb06a329b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://wa.me/qr/SMPTDWKILWUVC1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    href="https://gitlab.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <FaGitlab />
                  </a>
                  <a href="mailto:jesvinljose39@gmail.com"
                    className="social-icon">
                    <FaEnvelope />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutSection;
