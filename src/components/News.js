import React from 'react'
import artDesignImg2 from "../assets/images/art-design-img2.png"
import newsImg1 from "../assets/images/news-img1.png"
import newsImg2 from "../assets/images/news-img2.png"
import newsSecArrow from "../assets/images/news-sec-arrow.png"
import "../assets/css/style.css";


const News = () => {
  return (
    <div>
        <section className="news-sec-bg" id="news">
            <div className="news-bg-pattern"></div>
            <div className="news-sec-container">
                <div className="row align-items-center justify-content-center text-center">
                    <div className="titles-main">
                        
                        <div className="headings-container">
            <h4 className="wow fadeIn text-white">WEDDING NEWS</h4>
            <h3 className="wow fadeIn" data-wow-delay="0.6s">WEDDING NEWS</h3>
            <h2 className="wow fadeIn" data-wow-delay="0.9s">We Design You</h2>
            </div>
                        <img src={artDesignImg2} alt="Dreamscape" className="wow fadeIn art-design-img" data-wow-delay="1.3s"/>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center text-center news-main">
                    <div className="col-lg-6 pe-0 pe-lg-4 mb-0 mb-md-5 mb-lg-0">
                        <div className="news-block">
                            <img className="news-img" src={newsImg1} alt="Dreamscape"/>
                            <div className="news-sec-right">
                                <img id="arrow-img" className="news-arrow-img" src={newsSecArrow} alt="Dreamscape"/>
                                <div className="news-txt-sec">
                                    <h6>January 28, 2024</h6>
                                    <h5>Couple’s wedding turns emotional as groom</h5>
                                    <p>Lorem ipsum dolor sit amet adipiscing elit sed doeiusm tempor incididuntLorem
                                        ipsum dolor.</p>
                                    <a href="#" className='text-decoration-none custom-one'>Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 ps-3 ps-lg-4">
                        <div className="news-block">
                            <img className="news-img" src={newsImg2} alt="Dreamscape"/>
                            <div className="news-sec-right">
                                <img id="arrow-img2" className="news-arrow-img" src={newsSecArrow} alt="Dreamscape"/>
                                <div className="news-txt-sec">
                                    <h6>January 28, 2024</h6>
                                    <h5>Couple’s wedding turns emotional as groom</h5>
                                    <p>Lorem ipsum dolor sit amet adipiscing elit sed doeiusm tempor incididuntLorem
                                        ipsum dolor.</p>
                                    <a href="#" className="text-decoration-none custom-one">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default News