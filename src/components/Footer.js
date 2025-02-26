import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="text-white text-center py-1" style={{ backgroundColor: '#1A3636' }}>
      <div className="container">
        <div className="row">
          {/* Services Section */}
          <div className="col-md-12 mb-3">
            <h5 className="text-uppercase">Services</h5>
            <div className="d-flex justify-content-center">
              <p className="mx-2">
                <span>| </span><i className="fas fa-laptop-code me-2"></i>Web Designing |
              </p>
              <p className="mx-2">
                <i className="fas fa-code me-2"></i>Web Development |
              </p>
              <p className="mx-2">
                <i className="fab fa-react me-2"></i>React.js Development |
              </p>
            </div>
          </div>
          {/* Copyright Section */}
          <div className="col-md-12 mb-2">
            <i className="fas fa-copyright me-2"></i>
            <span>2024 Jesvin L jose. All Rights Reserved.</span><br />
            <i className="fas fa-user me-2"></i>
            <span>Owned by Jesvin L jose</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
