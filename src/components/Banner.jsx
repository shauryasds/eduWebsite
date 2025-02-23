import React from 'react';
import { Slide } from 'react-slideshow-image';
import banner from "../images/banner.PNG"
import 'react-slideshow-image/dist/styles.css';

function Banner() {
  return (
     <div className='mt-6'>
 <div className="w-full">
        <Slide
          autoplay={true}
          duration={3000}
          transitionDuration={500}
          onChange={function noRefCheck() {}}
          onStartChange={function noRefCheck() {}}
        >
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/032/402/471/non_2x/school-admission-banner-or-social-media-template-vector.jpg)',
                height: '500px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '2rem',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
              }}
            >
              
            </div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/032/402/460/non_2x/school-admission-banner-or-social-media-template-vector.jpg)`,
                height: '500px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '2rem',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
              }}
            >
              
            </div>
          </div>
          
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/032/402/471/non_2x/school-admission-banner-or-social-media-template-vector.jpg)',
                height: '500px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '2rem',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
              }}
            >
              
            </div>
          </div>
        
        </Slide>
      </div>
     </div>
  );
}

export default Banner;