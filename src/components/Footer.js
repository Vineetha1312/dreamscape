import React from 'react'
import searchIcon from '../assets/images/search-icon.png'
import logo from "../assets/images/logo-one.png";
import logoTwo from "../assets/images/logo-two.png";
import logoThree from '../assets/images/logo-three.png'
import logoFour from '../assets/images/logo-four.png'
import "../assets/css/animate.css"

const Footer = () => {
    function setTheme(theme) {
            const body = document.body;
            body.setAttribute('data-theme', theme);
          
            // Update the logo based on the theme
            const logo = document.getElementById('logo');
            switch (theme) {
              case 'one':
                logo.src = {logo}; // Path to Theme One's logo
                break;
              case 'two':
                logo.src = {logoTwo}; // Path to Theme Two's logo
                break;
              case 'three':
                logo.src = {logoThree}; // Path to Theme Three's logo
                break;
              case 'four':
                logo.src = {logoFour}; // Path to Theme Four's logo
                break;
              default:
                logo.src = {logo}; // Optional fallback logo
            }
          }
  return (
    <div>
        <footer>
            <div className="footer-bg-pattern"></div>
            <div className="footer-sec-container">
                <div className="row text-center">

                    <h4 className="wow fadeInUp text-white">Sign up for our mailing list
                        <span className="wow fadeInUp">SIGN UP FOR SPECIAL OFFERS</span>
                    </h4>

                    <form className="footer-searchbar" role="search" method="get">
                        <div className="input-container">
                            <img src={searchIcon} alt="Dreamscape"/>
                            <input type="search" className="search-input" name="s"/>
                            <button type="submit" className="search-submit border-0" name="submit">OK</button>
                        </div>
                        {/* <!-- input-container --> */}
                    </form>
                    {/* <!-- searchform --> */}
                </div>
                <div className="footer-inn">
                    <div className="footer-inn-one mb-0 mb-md-4 mb-lg-0">
                        <img id="logo" src={logo} alt="Dreamscape"/>
                        <p className="mt-3 pe-5 text-white">Lorem ipsum dolor sit amet consectetur adipiscing elit sed doeiusm tempor
                            incididuntLorem adipiscing elit sed.</p>
                    </div>
                    <div className="footer-inn-two mb-0 mb-md-4 mb-lg-0">
                        <h6>Company</h6>
                        <div className="footer-nav">
                            <ul>
                                <li><a href="#home" className="pagescroll text-decoration-none">Home</a></li>
                                <li><a href="#about" className="pagescroll text-decoration-none">About</a></li>
                                <li><a href="#services" className="pagescroll text-decoration-none">Services</a></li>
                                <li><a href="#ourteam" className="pagescroll text-decoration-none">Our Team</a></li>
                            </ul>
                            <ul>
                               
                                <li><a href="#news" className="pagescroll text-decoration-none">News</a></li>
                                <li><a href="#gallery" className="pagescroll text-decoration-none">Gallery</a></li>
                                <li><a href="#contact" className="pagescroll text-decoration-none">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-inn-three">
                        <h6>Contact Us</h6>
                        <div className="contact-info">
                            <p>Call US
                                <a href="tel:(123)-4567-890" className=" text-decoration-none">(123)-4567-890</a>
                            </p>
                            <p className="email-icon">Email
                                <a href="mailto:help@dreamscape.com" className=" text-decoration-none">help@dreamscape.com</a>
                            </p>
                        </div>
                    </div>
                    <div className="footer-inn-four">
                        <h6>Contact Us</h6>
                        <ul className="social-icons">
                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fab fa-facebook-messenger"></i></a></li>
                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href="#"><i className="fab fa-skype"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        {/* <!-- Footer Section --> */}
        {/* <!-- Copyrights Section --> */}
        <div className="footer-copy">
            <div className="team-sec-container text-center">
                <p>Copyright © <span id="current-year"></span> Dreamscape. All rights
                    reserved
                </p>
            </div>
        </div>
        {/* <!-- Copyrights Section --> */}
    </div>
  )
}

export default Footer
