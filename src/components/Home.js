import React, { useState, useEffect, useRef} from "react";
import logo from "../assets/images/logo-one.png";
import logoTwo from "../assets/images/logo-two.png";
import logoThree from '../assets/images/logo-three.png'
import logoFour from '../assets/images/logo-four.png'
import artDesignImg1 from "../assets/images/art-design-img1.png";
import bannerArrow from "../assets/images/banner-arrow.png";
import "../assets/css/style.css"
import "../assets/css/animate.css"
import WOW from 'wowjs'


const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    useEffect(() => {
        const wow = new WOW.WOW({
          live: false, // Disable monitoring for dynamically added elements
        });
        wow.init();
      }, []);

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
      

      const menuRef = useRef(null); // Create a ref for the menu
      
      useEffect(() => {
          const handleClickOutside = (event) => {
              if (menuRef.current && !menuRef.current.contains(event.target)) {
                  setIsMenuOpen(false); // Close menu if click is outside
              }
          };
      
          if (isMenuOpen) {
              document.addEventListener("mousedown", handleClickOutside);
          }
      
          return () => {
              document.removeEventListener("mousedown", handleClickOutside);
          };
      }, [isMenuOpen]);
      


    // Toggle side menu
    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    // Close side menu explicitly
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Toggle search section
    const toggleSearch = () => {
        setIsSearchOpen((prev) => !prev);
    };

    return (
        <div>
            {/* Right Side Menu */}
            <div className={`side-menu ${isMenuOpen ? "side-menu-active" : ""}`}
    ref={menuRef}>
                <div className="inner-wrapper">
                    <div className="sidenav-header">
                        {/* Sidebar Menu Icon */}
                        <span
                            className="menu-btn menu-button-wrapper"
                            id="btn_sideNavClose"
                            onClick={closeMenu} // Close menu when icon is clicked
                        >
                            <span></span> <span></span> <span></span>
                        </span>
                        <div className="logo-side">
                            <img
                                id="logo"
                                className="logo-one header-logo h-50 w-50"
                                src={logo}
                                alt="Dreamscape"
                            />
                        </div>
                    </div>
                    <nav className="side-nav">
                        <ul className="navbar-nav">
                            <li>
                                <a
                                    className="nav-link pagescroll"
                                    href="#home"
                                    onClick={() => {
                                        if (window.innerWidth < 768) {
                                          closeMenu(); // Close menu only if the screen width is 768px or larger
                                        }
                                      }}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    className="nav-link pagescroll"
                                    href="#about"
                                    onClick={() => {
                                        if (window.innerWidth < 768) {
                                          closeMenu(); // Close menu only if the screen width is 768px or larger
                                        }
                                      }}
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    className="nav-link pagescroll"
                                    href="#services"
                                    onClick={() => {
                                        if (window.innerWidth < 768) {
                                          closeMenu(); // Close menu only if the screen width is 768px or larger
                                        }
                                      }}
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    className="nav-link pagescroll"
                                    href="#ourteam"
                                    onClick={() => {
                                        if (window.innerWidth < 768) {
                                          closeMenu(); // Close menu only if the screen width is 768px or larger
                                        }
                                      }}
                                >
                                    Our Team
                                </a>
                            </li>
                            <li>
                                <a
                                    className="nav-link pagescroll"
                                    href="#news"
                                    onClick={() => {
                                        if (window.innerWidth < 768) {
                                          closeMenu(); // Close menu only if the screen width is 768px or larger
                                        }
                                      }}
                                >
                                    News
                                </a>
                            </li>
                            <li>
                                <a
                                    className="nav-link pagescroll"
                                    href="#gallery"
                                    onClick={() => {
                                        if (window.innerWidth < 768) {
                                          closeMenu(); // Close menu only if the screen width is 768px or larger
                                        }
                                      }}
                                >
                                    Gallery
                                </a>
                            </li>
                            <li>
                                <a
                                    className="nav-link pagescroll"
                                    href="#contact"
                                    onClick={() => {
                                        if (window.innerWidth < 768) {
                                          closeMenu(); // Close menu only if the screen width is 768px or larger
                                        }
                                      }}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* Close Side Menu Overlay */}
                {isMenuOpen && (
                    <div id="close_side_menu" onClick={closeMenu}></div>
                )}
            </div>

            {/* Search Section */}
            <div
                className={`search-section ${
                    isSearchOpen ? "search-section-active" : ""
                }`}
            >
                <div className="search-wrapper d-flex justify-content-center align-items-center w-100">
                    <span className="close" onClick={toggleSearch}>
                        X
                    </span>
                    <form
                        role="search"
                        id="searchform"
                        action="/search"
                        method="get"
                        width="100"
                    >
                        <input
                            type="search"
                            placeholder="Type to search"
                            name="q"
                            autoFocus
                            className="bg-transparent input-lg text-white border-2 w-100 p-3"
                        />
                    </form>
                </div>
            </div>

            <div className="main-wrapper">
                {/* Header Section */}
                <header id="home">
                    <div className="header-pattern"></div>
                    <div className="top-bar ">
                        <div className="topbar-container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-6 col-md-6 ">
                                    <a href="#home" >
                                        <img
                                            id="logo"
                                            className="logo-one  header-main-logo"
                                            src={logoTwo}
                                            alt="Dreamscape"
                                        />
                                    </a>
                                </div>
                                <div className="col-6 col-md-6 d-flex justify-content-end">
                                    <ul className="social-icons">
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-messenger"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-skype"></i>
                                            </a>
                                        </li>
                                        <li>
                                            {/* Toggle Search Section */}
                                            <a
                                                onClick={toggleSearch}
                                                className="search-icon"
                                            >
                                                <i className="fa fa-search"></i>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="menu-bar">
                                        {/* Toggle Sidebar Menu */}
                                        <a
                                            href="#"
                                            className="d-lg-inline-block menu-btn"
                                            id="sidemenu_toggle"
                                            onClick={toggleMenu}
                                        >
                                            <span></span> <span></span>{" "}
                                            <span></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center text-center banner-cnt">
                        <div className="col-10 col-md-8 col-lg-6 banner-content ">
                            <p className="date-banner wow fadeInUp">JUN 18 2024</p>
                            <div className="heading-top wow fadeIn">
                                <div className="heading-box">
                                    <div className="heading-lines">
                                        <span className="small-box-line"></span>
                                        <span className="mid-box-line"></span>
                                        <span className="small-box-line"></span>
                                    </div>
                                    <h1 className="perfect-wedding-heading">Perfect Weddings</h1>
                                </div>
                            </div>
                            <p className="caption-banner wow fadeInUp">Made Easy!</p>
                            <img
                                src={artDesignImg1}
                                className="w-128"
                                alt="Dreamscape"
                            />
                            <div className="book-now-sec">
                                <p>
                                    <a
                                        className="contact-form-btm"
                                        href="#contact-form-btm"
                                    >
                                        Book Now
                                    </a>
                                </p>
                            </div>
                            <img
                                className="arrow-animation"
                                src={bannerArrow}
                                alt="Dreamscape"
                            />
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
};

export default Home;

