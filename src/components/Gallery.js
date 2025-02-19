import React from "react";
import artDesignImg2 from "../assets/images/art-design-img2.png";
import memoriesImg1 from "../assets/images/memories-img1.png";
import memoriesImg2 from "../assets/images/memories-img2.png";
import memoriesImg3 from "../assets/images/memories-img3.png";
import memoriesImg4 from "../assets/images/memories-img4.png";
import memoriesImg5 from "../assets/images/memories-img5.png";
import memoriesImg6 from "../assets/images/memories-img6.png";
import "../assets/css/animate.css"

const Gallery = () => {
  return (
    <div>
      <section className="gallery-sec-bg" id="gallery">
        <div className="team-sec-container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="titles-main">
            <div className="headings-container">
            <h4 className="wow fadeIn text-white">BEAUTIFUL MEMORIES</h4>
            <h3 className="wow fadeIn" data-wow-delay="0.6s">Wedding Clicks</h3>
            <h2 className="wow fadeIn" data-wow-delay="0.9s">Wedding Clicks</h2>
            </div>
              <img
                src={artDesignImg2}
                alt="Dreamscape"
                className="wow fadeIn art-design-img"
                data-wow-delay="1.3s"
              />
            </div>
          </div>

          <div className="gallery-main">
            {/* Large Image */}
            <div className="photos1">
              <div className="gallery-box">
                <div className="gallery-img">
                  <img src={memoriesImg1} alt="Dreamscape" className="gal-img1" />
                </div>
                <div className="gallery-text">
                  <a className="img-zoom" href={memoriesImg1}>
                    <i className="fa fa-search-plus"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Smaller Images */}
            <div className="photos2">
              <div className="gallery-box">
                <div className="gallery-img">
                  <img src={memoriesImg2} alt="Dreamscape" className="gal-img2" />
                </div>
                <div className="gallery-text">
                  <a className="img-zoom" href={memoriesImg2}>
                    <i className="fa fa-search-plus"></i>
                  </a>
                </div>
              </div>
              <div className="gallery-box">
                <div className="gallery-img">
                  <img src={memoriesImg3} alt="Dreamscape" className="gal-img3" />
                </div>
                <div className="gallery-text">
                  <a className="img-zoom" href={memoriesImg3}>
                    <i className="fa fa-search-plus"></i>
                  </a>
                </div>
              </div>
              <div className="gallery-box">
                <div className="gallery-img">
                  <img src={memoriesImg4} alt="Dreamscape" className="gal-img4" />
                </div>
                <div className="gallery-text">
                  <a className="img-zoom" href={memoriesImg4}>
                    <i className="fa fa-search-plus"></i>
                  </a>
                </div>
              </div>
              <div className="gallery-box">
                <div className="gallery-img">
                  <img src={memoriesImg5} alt="Dreamscape" className="gal-img5" />
                </div>
                <div className="gallery-text">
                  <a className="img-zoom" href={memoriesImg5}>
                    <i className="fa fa-search-plus"></i>
                  </a>
                </div>
              </div>
              <div className="gallery-box">
                <div className="gallery-img">
                  <img src={memoriesImg6} alt="Dreamscape" className="gal-img6" />
                </div>
                <div className="gallery-text">
                  <a className="img-zoom" href={memoriesImg6}>
                    <i className="fa fa-search-plus"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
