import React from 'react';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/swiper-bundle.css';

import SwiperCore, { Controller, Mousewheel, Navigation } from 'swiper/core';
// install Swiper modules
SwiperCore.use([Mousewheel, Navigation, Controller]);

const YearNav = props => {
  const yearNavSwiperRef = React.useRef();
  const [yearNavSwiper, setYearNavSwiper] = React.useState(null);
  const [scrollingDown, setScrollingDown] = React.useState(false);
  const [scrollingUp, setScrollingUp] = React.useState(false);
  const intervalCount = React.useRef(0);
  const slideTo = index => {
    // console.log(index);
    yearNavSwiper.slideTo(index);
  };
  const scrollSpeed = 75;

  React.useEffect(() => {
    yearNavSwiperRef.current = document.getElementById('year-nav-slider');
  }, []);

  const upButtonMouseDown = () => {
    // console.log('Up Arrow held');
    intervalCount.current = 0;
    setScrollingUp(true);
    yearNavSwiperRef.current?.swiper.slidePrev();
  };
  const upButtonMouseUp = () => {
    // console.log('Up Arrow not held');
    setScrollingUp(false);
  };
  React.useEffect(() => {
    if (scrollingUp) {
      const interval = setInterval(() => {
        intervalCount.current += 1;
        console.log('scrollingUp', intervalCount.current);
        if (intervalCount.current > 2) {
          console.log('This will run every second!');
          yearNavSwiperRef.current?.swiper.slidePrev();
        }
      }, scrollSpeed);
      return () => clearInterval(interval);
    }
  }, [scrollingUp]);
  //
  //

  const downButtonMouseDown = () => {
    // console.log('Down Arrow held');
    intervalCount.current = 0;
    setScrollingDown(true);
    yearNavSwiperRef.current?.swiper.slideNext();
  };
  const downButtonMouseUp = () => {
    // console.log('Down Arrow not held');
    setScrollingDown(false);
  };
  React.useEffect(() => {
    if (scrollingDown) {
      const interval = setInterval(() => {
        intervalCount.current += 1;
        console.log('scrollingDown', intervalCount.current);
        if (intervalCount.current > 2) {
          console.log('This will run every second!');
          yearNavSwiperRef.current?.swiper.slideNext();
          // yearNavSwiperRef.current?.swiper.slideNext();
        }
      }, scrollSpeed);
      return () => clearInterval(interval);
    }
  }, [scrollingDown]);

  return (
    <div className="yearNav-container mainPage-years-menu">
      <div id="navSlide" className="slide-in-right">
        <button
          className="arrow-up"
          type="button"
          aria-label="Arrow up"
          onMouseDown={() => {
            upButtonMouseDown();
          }}
          onMouseUp={() => {
            upButtonMouseUp();
          }}
        />
        <img className="mobile-arrows" src="/images/mobile-arrows.svg" alt="" />

        <Swiper
          id="year-nav-slider"
          // onSwiper={setYearNavSwiper}
          onSwiper={props.setYearSwiper}
          onSlideChange={swiperCore => {
            const { activeIndex } = swiperCore;
            // console.log({ activeIndex, snapIndex, previousIndex, realIndex });
            props.childCallback(activeIndex);
          }}
          controller={{ control: props.controlledSwiper }}
          centeredSlides
          mousewheel
          // mobile
          slidesPerView={3.5}
          spaceBetween={19}
          // desktop
          breakpoints={{
            769: {
              direction: 'vertical',
              slidesPerView: 9,
              mousewheel: true,
              // navigation: {
              //   nextEl: '.arrow-down',
              //   prevEl: '.arrow-up',
              // },
            },
          }}
          className="mySwiper"
        >
          {props?.data &&
            props?.data?.map(({ node }, index) => (
              <SwiperSlide key={node.title}>
                {/* <a
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    // slideTo(index);
                  }}
                > */}
                {node.title}
                {/* </a> */}
              </SwiperSlide>
            ))}
        </Swiper>

        <button
          className="arrow-down"
          type="button"
          aria-label="Arrow down"
          onMouseDown={() => {
            downButtonMouseDown();
          }}
          onMouseUp={() => {
            downButtonMouseUp();
          }}
        />
      </div>
    </div>
  );
};

export default YearNav;
