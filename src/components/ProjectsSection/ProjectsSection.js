import React from "react";
import './ProjectsSection.css';
import robotimage1 from '../../img/1.jpg';
import robotimage2 from '../../img/2.jpg';
import robotimage3 from '../../img/3.jpg';
import robotimage4 from '../../img/4.jpg';



const ProjectsSection = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="title">CHOOSE YOUR TOOL</h2>
      <div className="content">
        <div className="project-card">
          <div className="project-image">
          <img src={robotimage1}></img>

          </div>
          <div className="project-info">
            <p className="project-category">ChatGPT is an artificial intelligence chatbot</p>
            <strong className="project-title">
              <span>ChatGPT</span>
              <a href="#" className="more-details">Try Now</a>
            </strong>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image">
          <img src={robotimage2}></img>


          </div>
          <div className="project-info">
            <p className="project-category">Dynamically translate between languages.</p>
            <strong className="project-title">
              <span>TRANSLATE</span>
              <a href="#" className="more-details">Try Now</a>
            </strong>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image">
          <img src={robotimage3}></img>
          </div>
          <div className="project-info">
            <p className="project-category">Generate images from text using AI</p>
            <strong className="project-title">
              <span>TEXT TO IMAGE</span>
              <a href="#" className="more-details">Try Now</a>
            </strong>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image">
          <img src={robotimage4}></img>
          </div>
          <div className="project-info">
            <p className="project-category">Summarize any text using AI</p>
            <strong className="project-title">
              <span>SUMMARY</span>
              <a href="#" className="more-details">Try Now</a>
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;