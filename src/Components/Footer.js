import React from "react";
import Logo from "../Assets/tool.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="footer-wrapper">
        <div className="footer-section-one">
          <div className="footer-logo-container">
            <img className="LLK" src={Logo} alt="" />
          </div>
          <div className="footer-icons">
            <BsTwitter />
            <SiLinkedin />
            <BsYoutube />
            <FaFacebookF />
          </div>
        </div>
        <div className="footer-section-two">
          <div className="footer-section-columns llk">
            <span>Home</span>
            <span>Menu</span>
            <span>About</span>
            <span>Contact</span>
          </div>
          <div className="footer-section-columns">
            <span>E-Mail:info@bellybliss.com </span>
            <span> Phone: (555) 987-6543</span>
          </div>
          <div className="footer-section-columns">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
      <p className="Z">© 2024 Belly Bliss. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
