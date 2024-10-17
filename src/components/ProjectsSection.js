import React from "react";
import "./Project-Section.css";
import logo from "../projectphotos/userdata.png";
import logo2 from "../projectphotos/ajax.png";
import logo3 from "../projectphotos/studentidcard.png";

const ProjectSection = () => {
  const projects = [
    {
      title: "USERDATA APP",
      description:
        "A React.js application that fetches and displays user data from a fake API.",
      logo: logo,
      color: "#677D6A",
    },
    {
      title: "DATA FROM API USING AJAX",
      description:
        "",
      logo: logo2,
      color: "#677D6A",
    },
    
    {
      title: "USERDATA",
      description:
        "",
      logo: logo3,
      color: "#677D6A",
    },
    {
      title: "DATA FROM API USING AJAX",
      description:
        "",
      logo: logo2,
      color: "#677D6A",
    },
  ];

  return (
    <div>
      <div className="project-section"  id="projects">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <div className="circle" style={{ "--clr": project.color }}>
              <img
                src={project.logo}
                alt={`${project.title} Logo`}
                className="logo"
              />
            </div>
            <div className="content">
              <h2 className="text-white">{project.title}</h2>
              <p className="text-white">{project.description}</p>
              <a href="#projects">VIEW MY PROJECT</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
