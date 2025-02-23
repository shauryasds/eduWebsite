import React, { useState, useEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

// Custom hook for tracking window size
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

function Banner() {
  const { width } = useWindowSize();
  const isMobile = width <= 768;

  // Image arrays for different screen sizes
  const desktopImages = [  
    'https://static.vecteezy.com/system/resources/previews/032/402/471/non_2x/school-admission-banner-or-social-media-template-vector.jpg',
    'https://static.vecteezy.com/system/resources/previews/032/402/460/non_2x/school-admission-banner-or-social-media-template-vector.jpg',
    'https://static.vecteezy.com/system/resources/previews/032/402/471/non_2x/school-admission-banner-or-social-media-template-vector.jpg'
  ];

  const mobileImages = [
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/school-admission-open-design-template-e91647c41befa122ed571b8d4aab208d_screen.jpg?ts=1660553834',
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/school-admissions-open%2Cschool-design-template-e629943fd2c18b218f88aac58dbb4cdb_screen.jpg?ts=1599219787',
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/school-admission-open-design-template-e91647c41befa122ed571b8d4aab208d_screen.jpg?ts=1660553834',
  ];

  return (
    <div className='mt-6'>
      <div className="w-full">
        <Slide
          autoplay={true}
          duration={3000}
          transitionDuration={500}
          responsive={[{
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }]}
        >
          {(isMobile ? mobileImages : desktopImages).map((image, index) => (
            <div className="each-slide-effect" key={index}>
              <div
                style={{
                  backgroundImage: `url(${image})`,
                  height: isMobile ? '70vh' : '60vh',
                  maxHeight: '600px',
                  width: '100%',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
}

export default Banner;