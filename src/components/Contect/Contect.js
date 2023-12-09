import React from "react";
import './Contect.css';
import { BsHouseDoorFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io"
import { AiFillPhone } from "react-icons/ai";


const Contect = () => {
    return (
        <section id='contectsection'>
        <div className="section-header">
          <div className="container">
            <h2 className="title">CONTACT US </h2>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="contact-info">

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <AiFillPhone className= " icone1" color='rgb(255, 255, 255)'/>
                </div>
                <div className="contact-info-content">
                  <h4>Phone</h4>
                  <p>0534...</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
<IoMdMail  className= " icone1" color='rgb(255, 255, 255)' />
                </div>
                <div className="contact-info-content">
                  <h4>Email</h4>
                  <p>AIHUB@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <form action="" id="contact-form">
                <h2>Send Message</h2>
                <div className="input-box">
                  <input type="text" placeholder="Full Name" required name="" />
                </div>

                <div className="input-box">
                  <input type="email" required name=""  placeholder="Email"/>
                 
                </div>

                <div className="input-box">
                  <textarea required name="" placeholder="Type Your Message"></textarea>
                  
                </div>

                <div className="input-box">
                  <input type="submit" value="Send" name="" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contect;