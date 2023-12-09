import React from "react";
import './ProjectsSection.css';
import robotimage1 from '../../img/1.jpg';
import robotimage2 from '../../img/2.jpg';
import robotimage3 from '../../img/3.jpg';
import robotimage4 from '../../img/4.jpg';
import { Link } from "react-router-dom";



const ProjectsSection = () => {
  const styles = {
    link: {
       color: '#10051b',
       textDecoration: 'none',
    },
    visitedLink: {
       color: '#10051b',
       textDecoration: 'none',
      
    },
   };
  return (
    <section className="projects" id="projects">
      <h2 className="title">features & services</h2>
      <div className="content">
        <div className="project-card">
          <div className="project-image">
          <img src={robotimage1}></img>

          </div>
          <div className="project-info">
            <p className="project-category">ChatGPTs is an AI language model created by OpenAI. It can understand and generate natural language responses with a high degree of accuracy. </p>
            <strong className="project-title">
    
              <Link style={styles.link} to="/chatgpt" className="more-details">Try Now</Link>
            </strong>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image">
          <img src={robotimage2}></img>


          </div>
          <div className="project-info">
            <p className="project-category">Dynamically translate between languages that Uses contextual clues, semantic understanding, and a vast amount of data to train its models, to deliver translations  </p>
            <strong className="project-title">
        
              <Link style={styles.link} to="/translat" className="more-details">Try Now</Link>
            </strong>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image">
          <img src={robotimage4}></img>
          </div>
          <div className="project-info">
            <p className="project-category"> An advanced AI-powered tool from ChatGPT that effortlessly Generate images from text , you can try to visulaize your ideas  </p>
            <strong className="project-title">
      
              <Link style={styles.link} to="/image" className="more-details">Try Now</Link>
            </strong>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image">
          <img src={robotimage3}></img>
          </div>
          <div className="project-info">
            <p className="project-category">AI Summarizer is a free summary generator that can instantly summarize any text, articles and essays with the best key points</p>
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