import React from "react";
import'./MainSection.css';
import { Link } from "react-router-dom";

const MainSection = () => {
  return (
    <section id="mainsection_main" >
      <div>
        <h2><br /><span>The World's best curated list of AI tools</span></h2>
        <h6>Explore the future with " AI HUB Tools " offers unique services in artificial intelligence</h6>
        <Link to="/chatgpt"><p id="mainsection-btn">Try Now!</p></Link>

      </div>
    </section>
  );
};

export default MainSection;