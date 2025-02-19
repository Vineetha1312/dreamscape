import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [buttonOpacity, setButtonOpacity] = useState(0);  // For fade-in effect

  const toggleVisibility = () => {
    const scrollPosition = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (scrollPosition > pageHeight * 0.3) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    const opacity = Math.min(scrollPosition / 300, 1);   
   setButtonOpacity(opacity);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          type="button"
          className="btn btn-primary"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: '1000',
            fontSize:'15px',
            transition: 'all 0.6s ease', 
            height:'40px',
            width:'40px',
            color:'#ffffff',
            position : 'fixed',
            textAlign : 'center',
            textDecoration : 'none',
            borderRadius : '3px',
            background : '#123F61',
            display:'flex',
            alignItems : 'center',
            justifyContent : 'center'
           }}
          onClick={scrollToTop}
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;