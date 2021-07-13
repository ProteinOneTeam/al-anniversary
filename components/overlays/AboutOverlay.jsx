import React from 'react';
import {
  // disableBodyScroll,
  // enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

const AboutOverlay = props => {
  const isFirstRender = React.useRef(true);
  const isMounted = React.useRef(false);
  const targetElem = React.useRef(null);

  const closeButtonClicked = () => {
    // enableBodyScroll(targetElem.current);
    clearAllBodyScrollLocks();

    // document.querySelector('#about-us').className = 'aboutOverlay close';
    // setTimeout(() => {
    //   // Start the timer
    //   props.toggle(); // After 1 second, set render to true
    // }, 300);
    // props.toggle();

    document.getElementById('about-us').classList.toggle('open-aboutUs');
  };

  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      isMounted.current = true;
      targetElem.current = document.querySelector('#about-us');
      // disableBodyScroll(targetElem.current);
      // console.log('AboutOverlay - On Component Mount');
    }
    return () => {
      isMounted.current = false;
      // console.log('AboutOverlay - On Component Unmount');
    };
  }, []);

  return (
    <div className="aboutOverlay" id="about-us">
      <div className="aboutOverlay-background">
        <img className="white-path-1" src="/images/white-path.svg" alt="" />
        <img className="white-path-2" src="/images/white-path.svg" alt="" />
      </div>
      <div className="aboutUs-container ">
        <div className="aboutUs-container-inner">
          <div className="aboutUs-content">
            <button
              onClick={closeButtonClicked}
              className="btn-exit-about"
              aria-label="Close"
              alt="Close"
              type="button"
            />
            <div className="aboutUs-content-text">
              <h3>{props.data.aboutUsTitle}</h3>
              <p>{props.data.aboutUsContent}</p>
              <a
                href={props.data.aboutUsButtonUrl}
                target="_blank"
                rel="noreferrer"
              >
                <button
                  className="visit-btn"
                  aria-label="Visit"
                  alt="Visit"
                  type="button"
                >
                  {props.data.aboutUsButtonText}
                </button>
              </a>
              {/* <a className="visit-btn" href="https://www.madewithprotein.com/" target="_blank">{props.data.aboutUsButtonText}</a> */}
            </div>
            <div className="aboutUs-content-img">
              <img
                data-src="/images/al-logo.svg"
                className="lazyload"
                alt="Animal Logic"
              />
            </div>
          </div>
        </div>
        <div className="aboutUs-footer">
          <p
            dangerouslySetInnerHTML={{ __html: props.data.aboutUsCopyright }}
          />
          <a
            className="protein-btn"
            href="https://www.madewithprotein.com/"
            target="_blank"
            rel="noreferrer"
            title="Made with Protein"
          >
            Made with Protein
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutOverlay;
