import React from "react";
import './ProjectsSection.css';
import robotimage1 from '../../img/1.jpg';
import robotimage2 from '../../img/2.jpg';
import robotimage3 from '../../img/3.jpg';
import robotimage4 from '../../img/4.jpg';



const ProjectsSection = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="title">features & services</h2>
      <div className="content">
        <div className="project-card">
          <div className="project-image">
          <img src={robotimage1}></img>

          </div>
          <div className="project-info">
            <p className="project-category">ChatGPTs is an artificial intelligence language model created by OpenAI. It can understand and generate natural language responses with a high degree of accuracy. </p>
            <strong className="project-title">
    
              <a href="#" className="more-details">Try Now</a>
            </strong>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image">
          <img src={robotimage2}></img>


          </div>
          <div className="project-info">
            <p className="project-category">Dynamically translate between languages that Uses contextual clues, semantic understanding, and a vast amount of data to train its models, to deliver translations that are more accurate and </p>
            <strong className="project-title">
        
              <a href="#" className="more-details">Try Now</a>
            </strong>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image">
          <img src={robotimage4}></img>
          </div>
          <div className="project-info">
            <p className="project-category"> An advanced AI-powered tool from ChatGPT that effortlessly Generate images from text </p>
            <strong className="project-title">
      
              <a href="#" className="more-details">Try Now</a>
            </strong>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image">
          <img src={robotimage3}></img>
          </div>
          <div className="project-info">
            <p className="project-category">Summarize any text using AI</p>
            <strong className="project-title">
              <a href="#" className="more-details">Try Now</a>
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;