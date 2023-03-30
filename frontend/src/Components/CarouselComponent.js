import { Carousel } from 'antd';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import '../Assets/Styles/Carousel.css';

const contentStyle_Mobile = {
  margin: 0,
  width: '100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const contentStyle_Computer = {
  margin: 0,
  width: '100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export default function CarouselComponent() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div className="container">
      <div className="carousel-container">
        <div>
          <div>
            <Carousel afterChange={onChange}>
              <div>
                <img
                  src="/images/caro.jpg"
                  alt="carousel"
                  style={
                    isTabletOrMobile
                      ? contentStyle_Mobile
                      : contentStyle_Computer
                  }
                />
              </div>
              <div>
                <img
                  src="/images/caro.jpg"
                  alt="carousel"
                  style={
                    isTabletOrMobile
                      ? contentStyle_Mobile
                      : contentStyle_Computer
                  }
                />
              </div>
              <div>
                <img
                  src="/images/caro.jpg"
                  alt="carousel"
                  style={
                    isTabletOrMobile
                      ? contentStyle_Mobile
                      : contentStyle_Computer
                  }
                />
              </div>
              <div>
                <img
                  src="/images/caro.jpg"
                  alt="carousel"
                  style={
                    isTabletOrMobile
                      ? contentStyle_Mobile
                      : contentStyle_Computer
                  }
                />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
