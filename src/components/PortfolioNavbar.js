import { Navbar, Nav } from 'react-bootstrap';
import './PortfolioNavbar.css'; // Import custom styles
import profilePic from './jesvin.jpg'; // Import your profile picture
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaLaptopCode } from 'react-icons/fa'; // Import icons

function PortfolioNavbar() {
  return (
    <div >
      <Navbar
        expand="lg"
        fixed="top"
        className="navbar-animate"
      >
        <Navbar.Brand className="d-flex align-items-center brand-animate">
          <img
            src={profilePic}
            alt="Profile"
            className="profile-pic"
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              marginRight: '20px',
            }}
          />
          JESVIN L JOSE
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle-animate" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* Changed from ml-auto to ms-auto */}
            <Nav.Link href="#home" className="nav-link-animate">
              <FaHome className="icon" /> {/* Add Home Icon */}
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="nav-link-animate">
              <FaUser className="icon" /> {/* Add User Icon */}
              About
            </Nav.Link>
            <Nav.Link href="#skills" className="nav-link-animate">
              <FaLaptopCode className="icon" /> {/* Computer Skills Icon */}
              Skills
            </Nav.Link>

            <Nav.Link href="#projects" className="nav-link-animate">
              <FaProjectDiagram className="icon" />
              Projects
            </Nav.Link>

            <Nav.Link href="#contact" className="nav-link-animate">
              <FaEnvelope className="icon" /> {/* Add Contact Icon */}
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default PortfolioNavbar;
