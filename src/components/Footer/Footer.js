import React from 'react';
import './Footer.css';
import { BiLogoTwitter } from "react-icons/bi"
import { IoMdMail } from "react-icons/io"
import { AiFillPhone } from "react-icons/ai";



const Footer = () => {
  return (
    <footer class="footer">
    <p class="footer-title">© 2023 AI HUB , All rights reserved.</p>
    <div class="social-icons">
    <BiLogoTwitter/>
   <IoMdMail />  
   <AiFillPhone/>
       </div>
</footer>
  );
};

export default Footer;