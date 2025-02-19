import React, { useEffect, useState } from "react";
import artDesignImg2 from "../assets/images/art-design-img2.png";
import "../assets/css/style.css";


const TimeSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date().getTime() + 1000 * 3600 * 48; // Countdown for 48 hours

    const getCountdown = () => {
      const currentDate = new Date().getTime();
      const secondsLeft = (targetDate - currentDate) / 1000;

      const days = pad(parseInt(secondsLeft / 86400));
      const hours = pad(parseInt((secondsLeft % 86400) / 3600));
      const minutes = pad(parseInt((secondsLeft % 3600) / 60));
      const seconds = pad(parseInt(secondsLeft % 60));

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const pad = (value) => (value < 10 ? `0${value}` : value); // Add leading zero

    const interval = setInterval(getCountdown, 1000);
    getCountdown(); // Run immediately on mount

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div>
      <section className="time-section-bg">
        <div className="time-sec-container">
          <div className="text-center">
            <div className="titles-main">
              <h4 className="wow fadeInUp text-white">Stepping Into</h4>
              <h2 className="wow fadeIn" data-wow-delay="0.6s">
                We Celebrating
              </h2>
              <img
                src={artDesignImg2}
                className="wow fadeIn art-design-img"
                alt="Dreamscape"
                data-wow-delay="1s"
              />
            </div>
            <div className="timer-box-bg">
              <div id="countdown">
                <div id="tiles">
                  <span>{timeLeft.days}</span>
                  <span>{timeLeft.hours}</span>
                  <span>{timeLeft.minutes}</span>
                  <span>{timeLeft.seconds}</span>
                </div>
                <div className="labels">
                  <ul>
                    <li>Days</li>
                    <li>Hr</li>
                    <li>Min</li>
                    <li>Sec</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TimeSection;
