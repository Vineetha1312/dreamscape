import servicesIcon1 from "../assets/images/services-icon1.png"
import artDesignImg2 from "../assets/images/art-design-img2.png"
import servicesIcon2 from "../assets/images/services-icon2.png"
import servicesIcon3 from "../assets/images/services-icon3.png"
import servicesIcon4 from "../assets/images/services-icon4.png"
import "../assets/css/style.css";


const Services = () => {
    return(
        <section className="services-sec-bg" id="services">
            <div className="services-bg-pattern"></div>
            <div className="services-sec-container">
                <div className="row align-items-center justify-content-center text-center">
                    <div className="titles-main">
                        <div>
                        <h4 className="wow fadeIn text-white">Wedding Services</h4>
                        <h3 className="wow fadeIn" data-wow-delay="0.6s">Wedding Plans</h3>
                        <h2 className="wow fadeIn" data-wow-delay="0.9s">Your Event Plans</h2>
                        </div>
                        <img src={artDesignImg2} className="wow fadeIn art-design-img" alt="Dreamscape" data-wow-delay="1.3s"/>
                    </div>
                </div>
                <div className="row text-center services-main mb-0 mb-md-4 mb-lg-0">
                    <div className="col-md-6 col-lg-3">
                        <div className="service-block">
                            <div className="icon-container">
                                <img src={servicesIcon1} alt="Dreamscape" className="icon-container-img1"/>
                            </div>
                            <h3>Wedding Planners</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 offset-md-0 offset-lg-3">
                        <div className="service-block">
                            <div className="icon-container">
                                <img src={servicesIcon2} alt="Dreamscape" className="icon-container-img2"/>
                            </div>
                            <h3>Bridal Shower</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-3 offset-md-0 offset-lg-3">
                        <div className="service-block">
                            <div className="icon-container">
                                <img src={servicesIcon3} alt="Dreamscape" className="icon-container-img3"/>
                            </div>
                            <h3>Kids Party</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 offset-md-0 offset-lg-3">
                        <div className="service-block">
                            <div className="icon-container">
                                <img src={servicesIcon4} alt="Dreamscape" className="icon-container-img4"/>
                            </div>
                            <h3>Rehearsal Dinner</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services