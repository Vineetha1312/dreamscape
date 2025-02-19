import artDesingImg2 from "../assets/images/art-design-img2.png"
import aboutImg1 from "../assets/images/about-img1.png"
import aboutImg2 from "../assets/images/about-img2.png"
import aboutImg3 from "../assets/images/about-img3.png"
import "../assets/css/animate.css"
import WOW from 'wowjs';

const About = () => {
    return(
        <div>
        <section className="about-bg" id="about">
            <div className="about-bg-pattern"></div>
            <div className="about-container">
                <div className="row align-items-center justify-content-center text-center">
                    <div className="titles-main">
                   
                        <div className="headings-container">
            <h4 className="wow fadeIn text-white">About Dreamscape</h4>
            <h3 className="wow fadeIn" data-wow-delay="0.6s">About Dreamscape</h3>
            <h2 className="wow fadeIn" data-wow-delay="0.9s">The Quare Villa</h2>
            </div>
                        <img className="wow fadeIn art-design-img" data-wow-delay="0.6s" src={artDesingImg2} alt="Dreamscape"/>
                        <div className="row align-items-center justify-content-center text-center mt-3">
                            <div className="col-md-8 col-lg-5 WOW fadeInUp" data-wow-delay="0.6s">
                                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipiscing elit sed doeiusm tempor incididunt
                                    dolor sit amet consectetur adipiscing elit sed doeiusm Lorem ipsum dolor.</p>
                            </div>
                        </div>
                        <button className='about-readmore-btn bg-transparent text-white'>
                        <a href="#" className="wow fadeIn text-decoration-none text-white" data-wow-delay="0.9s">Read More</a>
                        </button>
                        
                    </div>
                    <div className="diamond-container mt-5 pt-5">
                        <div className="diamond-inn">
                            <div className="square-bor"></div>
                            <div className="square">
                                <img src={aboutImg1} alt="Dreamscape"/>
                            </div>
                        </div>
                        <div className="diamond-inn">
                            <div className="square-bor"></div>
                            <div className="square">
                                <img src={aboutImg2} alt="Dreamscape"/>
                            </div>
                        </div>
                        <div className="diamond-inn">
                            <div className="square-bor"></div>
                            <div className="square">
                                <img src={aboutImg3} alt="Dreamscape"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default About