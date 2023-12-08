import React from "react";
import'./Header.css';
import { Link } from "react-router-dom";


const Header = () => {
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
    <>
    <ul className="navbar-header">
      <Link style={styles.link}  to="/" className="logo">
        AI HUB
      </Link>

      <li>
        <a href="#projects">Tools ▾</a>
        <ul className="dropdown">
        <li> <Link  style={styles.link} to="/chatgpt" className="doplink" >chatGpt </Link></li>
          <li>< Link  style={styles.link} to="/image" className="droplink">text to image </Link></li>
          <li>< Link  style={styles.link} to="/translat" className="droplink">translate</Link></li>
          <li>< Link  style={styles.link} to="/summery" className="droplink">summary </Link></li>
        </ul>
      </li>
      <li><a href="#contact">contact Us</a></li>
      <li><a href="#services">About Us</a></li>
    </ul>
    </>
  );
};

export default Header;