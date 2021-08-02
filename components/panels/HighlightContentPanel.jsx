import React from 'react';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';
import dayjs from 'dayjs';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Pagination, Navigation]);

const HighlightContentPanel = props => {
  const isFirstRender = React.useRef(true);
  const isMounted = React.useRef(false);
  const targetElem = React.useRef(null);
  const sidePanelClasses = props.show
    ? 'highlightSidePanel open'
    : 'highlightSidePanel';
  const pagination = {
    clickable: true,
  };

  const closeButtonClicked = () => {
    clearAllBodyScrollLocks();
    enableBodyScroll(targetElem.current);

    document.querySelector('#highlightSidePanel').className =
      'highlightSidePanel close';
    document.querySelector('#dark-overlay').className = 'darkOverlay fade-out';
    setTimeout(() => {
      // Start the timer
      props.toggle(); // After 1 second, set render to true
    }, 500);

    // props.toggle();
  };

  // Check if highlight thumbnail exists in array
  const extractImageSize = (arr, key, value, backup) => {
    if (arr.some(o => o[key] === value)) {
      if (arr.find(item => item[key] === value)) {
        return arr.find(item => item[key] === value).sourceUrl;
      }
    }
    return backup;
  };

  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      isMounted.current = true;
      targetElem.current = document.querySelector('#highlightSidePanel');
      disableBodyScroll(targetElem.current, { reserveScrollBarGap: true });
      // console.log('AboutOverlay - On Component Mount');
    }
    return () => {
      isMounted.current = false;
      // console.log('AboutOverlay - On Component Unmount');
    };
  }, []);

  return (
    <>
      <div className={sidePanelClasses} id="highlightSidePanel">
        <button
          onClick={closeButtonClicked}
          className="btn-exit-highlights"
          aria-label="Close"
          alt="Close"
          type="button"
        />
        <Swiper
          pagination={pagination}
          className="mySwiper"
          initialSlide={props.startIndex}
        >
          {props?.highlightData
            ? props?.highlightData?.map((node, i) => (
                <SwiperSlide key={i} className="highlight-carousel-card">
                  {node?.image?.mediaDetails?.sizes ? (
                    <div className="highlightSidePanel-img-conatiner">
                      <img
                        // src={node.image.mediaDetails.sizes[0].sourceUrl}
                        src={extractImageSize(
                          node.image.mediaDetails.sizes,
                          'name',
                          'thumbnail',
                          node.image.sourceUrl
                        )}
                        srcSet="/images/placeholder-medium.gif"
                        data-srcset={extractImageSize(
                          node.image.mediaDetails.sizes,
                          'name',
                          'thumbnail',
                          node.image.sourceUrl
                        )}
                        data-sizes="auto"
                        className="highlightImg lazyload"
                        alt={node.title}
                      />
                    </div>
                  ) : (
                    <img
                      src="/images/placeholder-medium.gif"
                      className="highlightImg"
                      alt=""
                    />
                  )}
                  <div className="sidePanelContent">
                    {node?.showDate ? (
                      <div className="dateContainer">
                        <h3>{dayjs(node.date).format('MMMM YYYY')}</h3>
                      </div>
                    ) : null}
                    <h2>{node.title}</h2>
                    {node?.copy ? (
                      <div dangerouslySetInnerHTML={{ __html: node.copy }} />
                    ) : null}
                  </div>
                </SwiperSlide>
              ))
            : null}
        </Swiper>
      </div>
      <button
        onClick={closeButtonClicked}
        className="btn-overlay-bg"
        aria-label="Close"
        alt="Close"
        type="button"
      />
    </>
  );
};

export default HighlightContentPanel;
