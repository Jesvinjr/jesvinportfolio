import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Contact.css';

function ContactSection() {
  return (
    <Container
      fluid
      className="mt-0 py-5 " id="contact" style={{ backgroundColor: '#677D6A',  padding:"40px"}}>
      <h2 style={{
        textAlign: 'center',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        letterSpacing: '2px',
        color: 'linear-gradient(to right, #ff416c, #ff4b2b)', // Gradient text effect
        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',  // Adds a subtle shadow
      }}>
        CONTACT ME
      </h2>
      <Row>
        {/* About Me Section */}
        <Col md={6} className="d-flex align-items-center">
          <div className="animate__animated animate__fadeInLeft">
            <p>
              Hi!I'm a passionate developer with a love for creating dynamic and
              responsive web applications.<br></br>I enjoy learning new technologies
              and continuously improving my skills.
            </p>
            <i className="fas fa-map-marker-alt me-2"></i>
            <span>
              Fathima Nagar, <br />
              Eraviputhoor Kadai, Kattathurai, <br />
              Kanniyakumari, Tamil Nadu, <br />
              PIN: 69158
            </span>
            <br />
            <i className="fas fa-phone-alt me-2"></i>
            <span>+91 9751867307</span>
            <br />
            <i className="fas fa-envelope me-2"></i>
            <a href="mailto:jesvinljose39@gmail.com">jesvinljose39@gmail.com</a>
          </div>
        </Col>


        {/* Contact Section */}
        <Col md={6} className="" >

          <div className="animate__animated animate__fadeInRight">
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" size="md" required />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" size="md" required />
              </Form.Group>
              <Form.Group controlId="formPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="tel" placeholder="Enter your phone number" size="md" required />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Your message" size="md" required />
              </Form.Group>
              <br />
              <div className="text-center">
                <Button
                  variant="primary"
                  type="submit"
                  className="neon-button"
                  size="md"
                  style={{ width: '200px' }}  // Custom width for the button
                >
                  Send
                </Button>
              </div>
            </Form>
          </div>


        </Col>

      </Row>
    </Container>
  );
}

export default ContactSection;
