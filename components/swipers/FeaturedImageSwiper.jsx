import React from 'react';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/swiper-bundle.css';

import SwiperCore, { EffectFade, Navigation, Controller } from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectFade, Navigation, Controller]);

const FeaturedImageSwiper = props => (
  // console.log(props.data);
  <div className="featuredImage-mobile" id="featuredImageMobile">
    <Swiper
      onSwiper={props.setControlledSwiper}
      controller={{ control: props.yearSwiper }}
      // allowTouchMove={false}
      slidesPerView={1.5}
      spaceBetween={20}
      centeredSlides
      effect="slide"
      className="featuredImageSwiper"
    >
      {props.data.map(({ node }, index) => (
        <SwiperSlide key={node.slug}>
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              props.openFeaturedPanel(index, node.slug);
            }}
            onKeyDown={e => {
              e.preventDefault();
              props.openFeaturedPanel();
            }}
            role="button"
            title={node.title}
          >
            {node?.acf?.featuredImage?.sourceUrl ? (
              <img
                src={node.acf.featuredImage.sourceUrl}
                srcSet="/images/placeholder-medium.gif"
                data-srcset={node.acf.featuredImage.sourceUrl}
                data-sizes="auto"
                className="lazyload"
                alt={node.title}
              />
            ) : (
              <img src="/images/placeholder-medium.gif" alt="" />
            )}
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);
export default FeaturedImageSwiper;
