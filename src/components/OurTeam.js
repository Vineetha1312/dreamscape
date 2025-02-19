import artDesignImg2 from "../assets/images/art-design-img2.png"
import teamImg1 from "../assets/images/team-img1.png"
import teamImg2 from "../assets/images/team-img2.png"
import teamImg3 from "../assets/images/team-img3.png"
import teamImg4 from "../assets/images/team-img4.png"
import "../assets/css/style.css";


const OurTeam = () => {
    return(
        <div>
            <section className="team-sec-bg" id="ourteam">
            <div className="rain-container">
                <div className="rain-drop"></div>
                <div className="rain-drop"></div>
                <div className="rain-drop"></div>
                <div className="rain-drop"></div>
                <div className="rain-drop"></div>
                <div className="rain-drop"></div>
                <div className="rain-drop"></div>
                <div className="rain-drop"></div>
                <div className="rain-drop"></div>
                <div className="rain-drop"></div>
            </div>

            <div className="team-sec-container">
                <div className="row align-items-center justify-content-center text-center">
                    <div className="titles-main">
                        <div>
                        <h4 className="wow fadeIn text-white">Let's Meet</h4>
                        <h3 className="wow fadeIn" data-wow-delay="0.6s">OUR CREATIVE TEAM</h3>
                        <h2 className="wow fadeIn" data-wow-delay="0.9s">OUR CREATIVE TEAM</h2>
                        </div>
                        <img src={artDesignImg2} alt="Dreamscape" className="wow fadeIn art-design-img" data-wow-delay="1.3s"/>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center text-center team-main">
                    <div className="col-md-6 col-lg-3 mb-0 mb-md-4 mb-lg-0">
                        <div className="team-block">
                            <div className="team-block-img">
                                <img src={teamImg1} alt="Dreamscape"/>
                            </div>
                            <h6>Chris Martin<span>CEO</span></h6>
                            <ul className="social-icons">
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-facebook-messenger"></i></a></li>
                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-0 mb-md-4 mb-lg-0">
                        <div className="team-block">
                            <div className="team-block-img">
                                <img src={teamImg2} alt="Dreamscape"/>
                            </div>
                            <h6>Ellyse Perry<span>HR Manager</span></h6>
                            <ul className="social-icons">
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-facebook-messenger"></i></a></li>
                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="team-block">
                            <div className="team-block-img">
                                <img src={teamImg3} alt="Dreamscape"/>
                            </div>
                            <h6>Downey<span>Manager, Operations</span></h6>
                            <ul className="social-icons">
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-facebook-messenger"></i></a></li>
                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="team-block">
                            <div className="team-block-img">
                                <img src={teamImg4} alt="Dreamscape"/>
                            </div>
                            <h6>Claretta<span>Marketing Manager</span></h6>
                            <ul className="social-icons">
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-facebook-messenger"></i></a></li>
                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default OurTeam