import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './skills.css';

const SkillsSection = () => {
  const skills = [
    'REACT.JS',
    'PHP/MYSQL',
    'BOOTSTRAP',
    'JAVASCRIPT',
    'HTML & CSS',
    'GITHUB',
    'UI/UX',
    'POWERPOINT',
    'JQUERY',
    'FIGMA',
    'PHOTOSHOP',
    'ANDROID',
    // Add more skills as needed
  ];

  return (
    <div style={{ backgroundColor: '#222831', padding: '10px' }} id='skills'>
      <Container
        fluid
      className="skills-container ">
        <div className="skills-section">
        <h2 style={{
        textAlign: 'center',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        letterSpacing: '2px',
        color: 'linear-gradient(to right, #ff416c, #ff4b2b)', // Gradient text effect
        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',  // Adds a subtle shadow
      }}>
        SKILLS
      </h2>
          <Row>
            {skills.map((skill, index) => (
              <Col xs={12} md={4} key={index}>
                <Card className="skill-card text-light" style={{backgroundColor:"#1A3636"}}>
                  <Card.Body>
                    <Card.Title>{skill}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default SkillsSection;
