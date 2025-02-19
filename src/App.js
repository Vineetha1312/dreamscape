import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import About from "./components/About";
import "./assets/css/style.css";
import TimeSection from "./components/TimeSection";
import Services from "./components/Services";
import OurTeam from "./components/OurTeam";
import News from "./components/News";
import Gallery from "./components/Gallery";
import ContactUS from "./components/ContactUS";
import Footer from "./components/Footer";
import "./assets/css/color-switcher.css";
import './App.css';
import "./assets/css/animate.css"
import WOW from 'wowjs'

const App = () => {
  const [loading, setLoading] = useState(true); // Preloader state
  const [isSwitcherOpen, setIsSwitcherOpen] = useState(false); // Switcher visibility state
  const [selectedTheme, setSelectedTheme] = useState("one"); // Currently selected theme

  useEffect(() => {
    // Hide preloader after 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  useEffect(() => {
    // Check if a theme is stored in localStorage and apply it
    const savedTheme = localStorage.getItem("theme") || "one"; // Default to "one"
    changeTheme(savedTheme);
  }, []);

  useEffect(() => {
          const wow = new WOW.WOW({
            live: false, // Disable monitoring for dynamically added elements
          });
          wow.init();
        }, []);

  const changeTheme = (theme) => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // Save theme in localStorage
    setSelectedTheme(theme); // Update the selected theme state
  };

  const toggleSwitcher = () => {
    setIsSwitcherOpen(!isSwitcherOpen); // Toggle switcher visibility
  };

  return (
    <div>
      {/* Preloader */}
      {loading && (
        <div className="preloader" id="preloader">
          <div className="loader">
            <p>D</p>
            <p>R</p>
            <p>E</p>
            <p>A</p>
            <p>M</p>
            <p>S</p>
            <p>C</p>
            <p>A</p>
            <p>P</p>
            <p>E</p>
          </div>
        </div>
      )}

      {/* Color Switcher */}
      <div className={`theme-settings ${isSwitcherOpen ? "active" : ""}`} id="switcher">
        <span className="theme-click" onClick={toggleSwitcher}>
          <i className="fa fa-cog fa-spin" aria-hidden="true"></i>
        </span>
        <span
          className={`theme-color theme-default ${selectedTheme === "one" ? "theme-active" : ""}`}
          data-color="one"
          onClick={() => changeTheme("one")}
        ></span>
        <span
          className={`theme-color theme-color-two ${selectedTheme === "two" ? "theme-active" : ""}`}
          data-color="two"
          onClick={() => changeTheme("two")}
        ></span>
        <span
          className={`theme-color theme-color-three ${selectedTheme === "three" ? "theme-active" : ""}`}
          data-color="three"
          onClick={() => changeTheme("three")}
        ></span>
        <span
          className={`theme-color theme-color-four ${selectedTheme === "four" ? "theme-active" : ""}`}
          data-color="four"
          onClick={() => changeTheme("four")}
        ></span>
      </div>
      <a id="totop" href="#top"><i className="fas fa-angle-up"></i></a>
      {/* Main Content */}
      <Home />
      <About />
      <TimeSection />
      <Services />
      <OurTeam />
      <News />
      <Gallery />
      <ContactUS />
      <Footer />
    </div>
  );
};

export default App;
