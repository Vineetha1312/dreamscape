import React from 'react'
import "../assets/css/animate.css"

const ContactUS = () => {
  return (
    <div><section className="contact-sec-bg" id="contact">
    <div className="cta-reservations wow fadeIn">
        <h3>Let's Start Planning!</h3>
        <a href="#" className=" text-decoration-none theme-btn custom">Make Reservations</a>
    </div>

    <div id="contact-form-btm" className="form-sec-container">
        <div className="row align-items-center justify-content-center text-center">
            <h4 className="wow fadeInUp">Interested in discussing?
                <span className="wow fadeInUp">Get In touch with us.</span>
            </h4>
            <div className="col-lg-11">
                <form className="contact-form">
                    <div className="row">
                        <div className="col-md-6">
                            <input type="text" className="form-control" id="your-name" name="your-name"
                                placeholder="Name" required/>
                        </div>
                        <div className="col-md-6">
                            <input type="email" className="form-control" id="your-email" name="your-email"
                                placeholder="Email" required/>
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control" id="your-surname" name="your-surname"
                                placeholder="Phone" required/>
                        </div>
                        <div className="col-md-6">
                            <select>
                                <option>Choose Services</option>
                                <option>Decoration</option>
                                <option>Photography</option>
                                <option>Videography</option>
                                <option>Makeup & Hairstyling</option>
                                <option>Mehendi</option>
                                <option>Catering</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <textarea className="form-control" id="your-message" name="your-message"
                                placeholder="Message" required></textarea>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="theme-btn custom submit-btn wow fadeInUp">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section></div>
  )
}

export default ContactUS