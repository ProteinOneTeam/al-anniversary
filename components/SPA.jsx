import React from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin';
import 'lazysizes/plugins/attrchange/ls.attrchange';
import 'lazysizes/plugins/respimg/ls.respimg';
import 'lazysizes';

import { disableBodyScroll } from 'body-scroll-lock';
import DarkOverlay from './overlays/DarkOverlay';
import AboutOverlay from './overlays/AboutOverlay';
import FeaturedImageSwiper from './swipers/FeaturedImageSwiper';
import YearNav from './swipers/YearNav';
import HighlightContentPanel from './panels/HighlightContentPanel';
import FeaturedHighlightPanel from './panels/FeaturedHighlightPanel';
import LandingPage from './LandingPage';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, MotionPathPlugin);

const SPA = props => {
  const isFirstRender = React.useRef(true);
  const isMounted = React.useRef(false);
  const leftPanelRef = React.useRef();
  const desktopImageRef = React.useRef();
  const featuredHighlightPanelRef = React.useRef();
  const featuredImageMobileRef = React.useRef();
  const featuredHighlightPanelImgRef = React.useRef();
  const featuredContentRef = React.useRef();
  const singlePageAppRef = React.useRef();
  const aboutUsElem = React.useRef(null);
  const mainPageRef = React.useRef(null);
  const [yearInt, setYearInt] = React.useState(0);
  const [tempYearInt, setTempYearInt] = React.useState(0);
  const [highlightContentInt, setHighlightContentInt] = React.useState(0);
  const [controlledSwiper, setControlledSwiper] = React.useState(null);
  // new test
  const [yearSwiper, setYearSwiper] = React.useState(null);
  const [contentPanelOpen, setContentPanelOpen] = React.useState(false);
  const [transistionDirectionDown, setTransistionDirectionDown] =
    React.useState(true);
  //   const [aboutPanelOpen, setAboutPanelOpen] = React.useState(false);
  //   const [randomImgKey, setRandomImgKey] = React.useState(0);
  // const [landingPageOpen, setLandingPageOpen] = React.useState(true);

  // On Component Mount
  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      isMounted.current = true;
      // console.log('On Component Mount');

      leftPanelRef.current = document.getElementById('leftPanel');
      desktopImageRef.current = document.getElementById('desktopImage');
      featuredHighlightPanelRef.current = document.getElementById(
        'featuredHighlightPanel'
      );
      featuredImageMobileRef.current = document.getElementById(
        'featuredImageMobile'
      );
      featuredContentRef.current = document.getElementById('featured-content');
      featuredHighlightPanelImgRef.current =
        document.getElementById('featured-panel-img');
      aboutUsElem.current = document.getElementById('about-us');
      mainPageRef.current = document.getElementById('years');

      singlePageAppRef.current = document.getElementById('single-page-app');
      singlePageAppRef.current.classList.add('page-loaded');

      //   landing page path 1
      gsap.to('#p1-arrow-1', {
        duration: 40,
        ease: 'none',
        motionPath: {
          path: '#p1-guide-path',
          align: '#p1-guide-path',
          autoRotate: true,
          start: 0.15,
          end: 1.15,
          alignOrigin: [0.5, 0.5],
        },
        repeat: -1,
      });
      gsap.to('#p1-arrow-2', {
        duration: 40,
        repeat: -1,
        ease: 'none',
        motionPath: {
          path: '#p1-guide-path',
          align: '#p1-guide-path',
          autoRotate: true,
          start: 0.5,
          end: 1.5,
          alignOrigin: [0.5, 0.5],
        },
      });
      gsap.to('#p1-arrow-3', {
        duration: 40,
        repeat: -1,
        ease: 'none',
        motionPath: {
          path: '#p1-guide-path',
          align: '#p1-guide-path',
          autoRotate: true,
          start: 0.85,
          end: 1.85,
          alignOrigin: [0.5, 0.5],
        },
      });

      // landing page path 2
      gsap.to('#p2-arrow', {
        duration: 20,
        repeat: -1,
        ease: 'none',
        motionPath: {
          path: '#p2-guide-path',
          align: '#p2-guide-path',
          autoRotate: true,
          start: 0.45,
          end: 1.45,
          alignOrigin: [0.5, 0.5],
        },
      });

      // landing page path 3
      gsap.to('#p3-arrow', {
        duration: 25,
        repeat: -1,
        ease: 'none',
        motionPath: {
          path: '#p3-guide-path',
          align: '#p3-guide-path',
          autoRotate: true,
          start: 0.25,
          end: 1.25,
          alignOrigin: [0.5, 0.5],
        },
      });

      // landing page path 4
      gsap.to('#p4-arrow', {
        duration: 20,
        repeat: -1,
        ease: 'none',
        motionPath: {
          path: '#p4-guide-path',
          align: '#p4-guide-path',
          autoRotate: true,
          start: 0.45,
          end: 1.45,
          alignOrigin: [0.5, 0.5],
        },
      });

      // landing page mobile path 1
      gsap.to('#mobile-p1-arrow', {
        duration: 15,
        repeat: -1,
        ease: 'none',
        motionPath: {
          path: '#mobile-p1-guide-path',
          align: '#mobile-p1-guide-path',
          autoRotate: true,
          start: 0.2,
          end: 1.2,
          alignOrigin: [0.5, 0.5],
        },
      });

      // landing page mobile path 2
      gsap.to('#mobile-p2-arrow', {
        duration: 20,
        repeat: -1,
        ease: 'none',
        motionPath: {
          path: '#mobile-p2-guide-path',
          align: '#mobile-p2-guide-path',
          autoRotate: true,
          start: 0.45,
          end: 1.45,
          alignOrigin: [0.5, 0.5],
        },
      });

      // years page mobile path 3
      gsap.to('#mobile-p3-arrow', {
        duration: 20,
        repeat: -1,
        ease: 'none',
        motionPath: {
          path: '#mobile-p3-guide-path',
          align: '#mobile-p3-guide-path',
          autoRotate: true,
          start: 0.45,
          end: 1.45,
          alignOrigin: [0.5, 0.5],
        },
      });

      // years page path 5
      gsap.to('#p5-arrow', {
        duration: 20,
        repeat: -1,
        ease: 'none',
        motionPath: {
          path: '#p5-guide-path',
          align: '#p5-guide-path',
          autoRotate: true,
          start: 0.9,
          end: 1.9,
          alignOrigin: [0.5, 0.5],
        },
      });

      // years page path 6
      gsap.to('#p6-arrow', {
        duration: 20,
        repeat: -1,
        ease: 'none',
        motionPath: {
          path: '#p6-guide-path',
          align: '#p6-guide-path',
          autoRotate: true,
          start: 0.1,
          end: 1.1,
          alignOrigin: [0.5, 0.5],
        },
      });

      // years page path 7
      gsap.to('#p7-arrow', {
        duration: 20,
        repeat: -1,
        ease: 'none',
        motionPath: {
          path: '#p7-guide-path',
          align: '#p7-guide-path',
          autoRotate: true,
          start: 0.95,
          end: 1.95,
          alignOrigin: [0.5, 0.5],
        },
      });

      // Example ScrollTrigger
      ScrollTrigger.create({
        trigger: '#years',
        once: true,
        start: 'top center',
        // markers: true,
        onEnter: () => {
          // document.getElementById("desktopImage").style.animationPlayState = 'Running';
          desktopImageRef.current.style.animationPlayState = 'Running';
          document.getElementById('navSlide').style.animationPlayState =
            'Running';
          // document.getElementById("leftPanel").style.animationPlayState = 'Running';
          leftPanelRef.current.style.animationPlayState = 'Running';
        },
      });

      ScrollTrigger.create({
        trigger: '.mainPage',
        start: 'top +100',
        end: 'bottom',
        // markers: true,
        toggleClass: { targets: '.header-background', className: 'on-scroll' },
      });
    }
    return () => {
      isMounted.current = false;
    };
  }, []);

  const scrollToMainPage = () => {
    gsap.to(window, { scrollTo: '#years' });
  };

  const scrollToLandingPage = () => {
    gsap.to(window, { scrollTo: '#landing' });
  };

  const contentPanelToggle = () => {
    setContentPanelOpen(!contentPanelOpen);
  };
  const openContentPanel = value => {
    setHighlightContentInt(value);
    setContentPanelOpen(true);
    // console.log(value);
  };

  const aboutPanelToggle = () => {
    // setAboutPanelOpen(!aboutPanelOpen);
    document.getElementById('about-us').classList.toggle('open-aboutUs');
    disableBodyScroll(aboutUsElem.current, { reserveScrollBarGap: true });
  };

  // const landingPageToggle = () => {
  // setLandingPageOpen(!landingPageOpen);
  // console.log("scroll down");
  // };

  const openFeaturedPanel = (index, slug) => {
    console.log('mobile: featured image clicked', index, slug);
    featuredHighlightPanelRef.current.classList.add(
      'featured-highlight-expanded'
    );
    featuredImageMobileRef.current.classList.add('featured-highlight-expanded');
    featuredHighlightPanelImgRef.current.classList.add(
      'featured-highlight-expanded'
    );
    featuredContentRef.current.classList.add('featured-highlight-expanded');
    mainPageRef.current.classList.add('mobile-expanded-view');

    gsap.to(window, {
      // delay: 0.01,
      duration: 0.25,
      scrollTo: { y: featuredImageMobileRef.current, offsetY: -10 },
    });
  };

  const featuredImageTransition = () => {
    setYearInt(tempYearInt);
    leftPanelRef.current.classList.remove('update-slide-in-left');
    desktopImageRef.current.classList.remove('fade-in-bottom');
    desktopImageRef.current.classList.remove('rotate-in-top');
    desktopImageRef.current.classList.remove('rotate-in-bottom');

    // eslint-disable-next-line no-void
    void leftPanelRef.current.offsetWidth;

    leftPanelRef.current.classList.add('update-slide-in-left');

    if (transistionDirectionDown) {
      desktopImageRef.current.classList.add('rotate-in-bottom');
    } else {
      desktopImageRef.current.classList.add('rotate-in-top');
    }
  };

  // callback of yearNav changing
  const childCallback = value => {
    setTempYearInt(value);
    // console.log(yearInt);

    if (yearInt > value) {
      setTransistionDirectionDown(false);
    } else {
      setTransistionDirectionDown(true);
    }
  };

  React.useEffect(() => {
    const timeOutId = setTimeout(() => featuredImageTransition(), 100);
    return () => clearTimeout(timeOutId);
  }, [tempYearInt]);

  // Get video embed
  function getVideoEmbed(url) {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    const videoId = match && match[2].length === 11 ? match[2] : null;
    const videoUrl = `//www.youtube.com/embed/${videoId}?autoplay=1&mute=1&cc_load_policy=0&controls=0&disablekb=1&enablejsapi=1&fs=0&iv_load_policy=3&list=user_uploads&playlist=//www.youtube.com/embed/${videoId}&loop=1&modestbranding=1&playsinline=1&rel=0`;
    return videoUrl;
  }

  // Check if highlight thumbnail exists in array
  const extractImageSize = (arr, key, value, backup) => {
    if (arr.some(o => o[key] === value)) {
      if (arr.find(item => item[key] === value)) {
        return arr.find(item => item[key] === value).sourceUrl;
      }
    }
    return backup;
  };

  return (
    <div className="singlePageApp" id="single-page-app">
      {/* {aboutPanelOpen ? ( */}
      <AboutOverlay data={props.aboutUsData} toggle={aboutPanelToggle} />
      {/* ) : null} */}

      <button
        onClick={scrollToLandingPage}
        className="btn-logo"
        type="button"
        aria-label="Scroll to content button"
      />
      <button
        //   onClick={aboutPanelToggle}
        onClick={aboutPanelToggle}
        className="btn-burger-menu"
        type="button"
        aria-label="About panel toggle button"
      />

      <div className="header-background" />

      {/* {landingPageOpen ?
                <LandingPage show={landingPageOpen} toggle={landingPageToggle}
                    
                /> : null} */}

      <LandingPage
        // show={!landingPageOpen}
        id="landing"
        scrollToMainPage={scrollToMainPage}
      />

      <div className="mainPage" id="years">
        {/* <img className="p5" src="/images/teal-path/teal-path-5.svg" /> */}
        <div className="p5">
          <svg
            width="601px"
            height="381px"
            viewBox="0 0 601 381"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="Graphic/Path/5/Teal-Copy"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="p5-dotted"
                transform="translate(5.000000, 9.811710)"
                fill="#7EC8BA"
              >
                <path
                  d="M363.5821,25.05834 C363.508,24.46174 363.508,23.85374 363.3769,23.26664 L363.0596,21.49204 L363.9944,21.26784 L364.3345,23.12414 C364.4732,23.73974 364.4827,24.37054 364.5606,24.99374 L363.5821,25.05834 Z"
                  id="Fill-56"
                />
                <polygon
                  id="Fill-58"
                  points="361.93062 18.07242 360.22442 14.89182 360.99772 14.38642 362.79512 17.69812"
                />
                <polygon
                  id="Fill-60"
                  points="358.00256 12.03954 355.37866 9.53914 355.98856 8.80574 358.69796 11.40684"
                />
                <polygon
                  id="Fill-62"
                  points="352.44924 7.40354 349.28764 5.61374 349.72654 4.73214 352.97554 6.58844"
                />
                <polygon
                  id="Fill-64"
                  points="345.94953 4.15644 342.48963 3.01834 342.76323 2.04174 346.30673 3.22354"
                />
                <polygon
                  id="Fill-66"
                  points="338.93777 2.18785 335.32967 1.65965 335.43797 0.62035 339.13157 1.17705"
                />
                <polygon
                  id="Fill-68"
                  points="331.69022 1.4364 328.04792 1.5238 327.97572 0.4503 331.71302 0.3762"
                />
                <polygon
                  id="Fill-71"
                  points="324.43165 1.93914 320.84065 2.65354 320.59175 1.57814 324.25875 0.86374"
                />
                <polygon
                  id="Fill-73"
                  points="317.31786 3.6119 313.87316 4.8013 313.47036 3.7411 316.99106 2.5422"
                />
                <polygon
                  id="Fill-75"
                  points="310.51377 6.21319 307.25527 7.84719 306.69477 6.79839 310.03687 5.16629"
                />
                <polygon
                  id="Fill-77"
                  points="304.10317 9.68202 301.06697 11.70742 300.33737 10.66812 303.45717 8.63512"
                />
                <polygon
                  id="Fill-79"
                  points="298.15256 13.91256 295.37286 16.28756 294.47036 15.28056 297.33556 12.88466"
                />
                <polygon
                  id="Fill-81"
                  points="292.73471 18.82216 290.25331 21.49926 289.17791 20.54736 291.74481 17.83986"
                />
                <polygon
                  id="Fill-83"
                  points="287.93094 24.3124 285.77824 27.2555 284.53374 26.3891 286.77194 23.4004"
                />
                <polygon
                  id="Fill-85"
                  points="283.79692 30.32419 282.00142 33.50099 280.59162 32.74859 282.46882 29.51099"
                />
                <polygon
                  id="Fill-87"
                  points="280.40314 36.77564 279.01234 40.13674 277.44294 39.53254 278.91354 36.09354"
                />
                <polygon
                  id="Fill-89"
                  points="277.83339 43.57137 276.87769 47.07117 275.17149 46.65507 276.19369 43.05647"
                />
                <polygon
                  id="Fill-91"
                  points="276.15607 50.62303 275.67347 54.21593 273.84947 54.02593 274.38527 50.31333"
                />
                <polygon
                  id="Fill-93"
                  points="275.43977 57.83714 275.46067 61.46804 273.55117 61.53454 273.57017 57.77254"
                />
                <polygon
                  id="Fill-95"
                  points="275.72743 65.07994 276.23473 68.66144 274.27393 68.99394 273.78753 65.27754"
                />
                <polygon
                  id="Fill-97"
                  points="276.9725 72.20114 277.932 75.68954 275.956 76.28804 275.0003 72.66854"
                />
                <polygon
                  id="Fill-99"
                  points="279.1081 79.11467 280.4913 82.46627 278.5305 83.33077 277.1359 79.84807"
                />
                <polygon
                  id="Fill-101"
                  points="282.07134 85.73313 283.84404 88.90233 281.93454 90.03283 280.13334 86.73063"
                />
                <polygon
                  id="Fill-103"
                  points="285.79895 91.96646 287.92125 94.90386 286.09345 96.29276 283.92555 93.22616"
                />
                <polygon
                  id="Fill-105"
                  points="290.20942 97.71377 292.66232 100.39087 290.95232 102.03437 288.43482 99.22997"
                />
                <polygon
                  id="Fill-107"
                  points="295.26551 102.91654 298.00911 105.28204 296.45871 107.17634 293.62961 104.68734"
                />
                <polygon
                  id="Fill-109"
                  points="300.88761 107.47179 303.88961 109.47819 302.54061 111.61379 299.43031 109.48959"
                />
                <polygon
                  id="Fill-111"
                  points="307.00504 111.28756 310.22934 112.89116 309.13494 115.25096 305.77764 113.53906"
                />
                <polygon
                  id="Fill-113"
                  points="313.5475 114.27664 316.9523 115.43374 316.1638 117.99494 312.5994 116.74094"
                />
                <polygon
                  id="Fill-115"
                  points="320.4312 116.35752 323.9728 117.07382 323.4845 119.78702 319.8023 119.00232"
                />
                <polygon
                  id="Fill-117"
                  points="327.5562 117.61836 331.17 118.00976 330.9173 120.79516 327.1952 120.37526"
                />
                <polygon
                  id="Fill-119"
                  points="334.80736 118.27063 338.45916 118.43213 338.35846 121.26313 334.64016 121.08073"
                />
                <polygon
                  id="Fill-121"
                  points="342.11989 118.5201 345.80019 118.5638 345.76979 121.4328 342.06669 121.3701"
                />
                <polygon
                  id="Fill-123"
                  points="349.49531 118.59059 353.20221 118.62859 353.15661 121.53179 349.46681 121.47669"
                />
                <polygon
                  id="Fill-125"
                  points="356.92089 118.70383 360.64679 118.84633 360.49479 121.78183 356.83159 121.62413"
                />
                <polygon
                  id="Fill-127"
                  points="364.37611 119.08516 368.10391 119.44806 367.75051 122.40256 364.13481 122.03206"
                />
                <polygon
                  id="Fill-129"
                  points="371.84254 119.99431 375.54184 120.76951 374.82934 123.69361 371.31244 122.93931"
                />
                <polygon
                  id="Fill-131"
                  points="379.19022 121.7691 382.77552 122.9965 381.68682 125.8427 378.29342 124.6609"
                />
                <polygon
                  id="Fill-133"
                  points="386.27437 124.4614 389.67157 126.1733 388.17627 128.8675 384.98997 127.2411"
                />
                <polygon
                  id="Fill-135"
                  points="392.93748 128.15101 396.03258 130.41011 394.07558 132.83451 391.21798 130.72931"
                />
                <polygon
                  id="Fill-137"
                  points="398.91013 132.9696 401.50553 135.8424 399.04313 137.8089 396.70233 135.1945"
                />
                <polygon
                  id="Fill-139"
                  points="403.74544 139.02585 405.54854 142.49525 402.62064 143.75685 401.03604 140.67125"
                />
                <path
                  d="M406.84415,146.19531 C407.11965,147.47021 407.44265,148.73751 407.59275,150.03521 L404.39125,150.41901 C404.26775,149.26951 403.97895,148.15421 403.74905,147.02561 L406.84415,146.19531 Z"
                  id="Fill-141"
                />
                <polygon
                  id="Fill-143"
                  points="407.80707 153.92622 407.56197 157.78132 404.32627 157.39942 404.56757 153.89392"
                />
                <polygon
                  id="Fill-145"
                  points="406.95549 161.55491 406.09479 165.23711 402.94459 164.41441 403.75589 160.91081"
                />
                <polygon
                  id="Fill-147"
                  points="405.07962 168.84977 403.99852 172.39707 400.89772 171.44137 401.96172 167.92827"
                />
                <polygon
                  id="Fill-149"
                  points="402.9235 175.90979 401.9317 179.41149 398.8081 178.58879 399.8208 174.98829"
                />
                <polygon
                  id="Fill-151"
                  points="401.09589 182.91794 400.49739 186.43294 397.30539 186.02634 397.93809 182.26434"
                />
                <path
                  d="M400.21638,189.94452 C400.24678,191.10922 400.21258,192.27772 400.33228,193.43672 L397.14408,193.74072 C397.00918,192.45062 397.03578,191.15672 397.00918,189.86282 L400.21638,189.94452 Z"
                  id="Fill-153"
                />
                <polygon
                  id="Fill-155"
                  points="400.87511 196.88028 401.84601 200.22428 398.84591 201.30538 397.75531 197.57948"
                />
                <polygon
                  id="Fill-157"
                  points="403.22598 203.43756 404.97778 206.48136 402.31588 208.21796 400.38358 204.86826"
                />
                <polygon
                  id="Fill-159"
                  points="407.05372 209.33231 409.40022 211.97901 407.13542 214.18301 404.58942 211.32541"
                />
                <polygon
                  id="Fill-161"
                  points="411.98384 214.42374 414.75784 216.67524 412.86734 219.19084 409.90904 216.80064"
                />
                <polygon
                  id="Fill-163"
                  points="417.69315 218.73579 420.75975 220.61489 419.20175 223.33569 415.97365 221.36539"
                />
                <polygon
                  id="Fill-165"
                  points="423.94035 222.32622 427.20645 223.86902 425.94675 226.72282 422.53625 225.12112"
                />
                <polygon
                  id="Fill-167"
                  points="430.54589 225.24861 433.95259 226.47601 432.96839 229.42291 429.42869 228.15561"
                />
                <polygon
                  id="Fill-169"
                  points="437.41116 227.54742 440.91666 228.46702 440.20036 231.47662 436.56186 230.52852"
                />
                <polygon
                  id="Fill-171"
                  points="444.46757 229.23785 448.06427 229.91805 447.52087 232.95045 443.86527 232.26455"
                />
                <polygon
                  id="Fill-173"
                  points="451.67978 230.5441 455.30688 231.1445 454.83948 234.1332 451.18008 233.5689"
                />
                <polygon
                  id="Fill-175"
                  points="458.94576 231.7278 462.59376 232.313 462.13966 235.22 458.49356 234.6785"
                />
                <polygon
                  id="Fill-177"
                  points="466.24689 232.9172 469.90059 233.5651 469.39519 236.3828 465.77379 235.7824"
                />
                <polygon
                  id="Fill-179"
                  points="473.55011 234.27361 477.19051 235.06781 476.57681 237.78291 472.99911 237.04381"
                />
                <polygon
                  id="Fill-181"
                  points="480.81419 235.96765 484.41469 236.99555 483.63379 239.58335 480.12449 238.62195"
                />
                <polygon
                  id="Fill-183"
                  points="487.98004 238.17925 491.47794 239.53015 490.48044 241.95645 487.09654 240.69105"
                />
                <polygon
                  id="Fill-185"
                  points="494.91029 241.08131 498.24669 242.84261 496.99839 245.05801 493.78929 243.40881"
                />
                <path
                  d="M501.46377,244.82754 C502.49167,245.55714 503.53667,246.26014 504.52847,247.03914 L503.02557,248.98854 C502.07367,248.25894 501.07047,247.60154 500.08437,246.91754 L501.46377,244.82754 Z"
                  id="Fill-187"
                />
                <polygon
                  id="Fill-189"
                  points="507.4235 249.4681 510.1329 252.092 508.4267 253.7564 505.8085 251.275"
                />
                <polygon
                  id="Fill-191"
                  points="512.65781 254.88595 515.00051 257.82335 513.16701 259.21605 510.87941 256.40975"
                />
                <polygon
                  id="Fill-193"
                  points="517.17031 260.88463 519.17671 264.04623 517.27861 265.19953 515.29691 262.15193"
                />
                <polygon
                  id="Fill-195"
                  points="521.02978 267.29162 522.74738 270.60522 520.83218 271.56472 519.11838 268.34422"
                />
                <polygon
                  id="Fill-197"
                  points="524.33806 273.97696 525.82006 277.39886 523.92006 278.20066 522.42856 274.85096"
                />
                <polygon
                  id="Fill-199"
                  points="527.20098 280.85135 528.49298 284.33025 526.63288 285.00855 525.31808 281.58665"
                />
                <polygon
                  id="Fill-201"
                  points="529.71335 287.83917 530.86855 291.36177 529.06355 291.95077 527.87795 288.46997"
                />
                <polygon
                  id="Fill-203"
                  points="531.98803 294.89539 533.08053 298.42179 531.34393 298.96899 530.21343 295.45969"
                />
                <polygon
                  id="Fill-205"
                  points="534.16638 301.9499 535.26078 305.4706 533.60208 305.9988 532.46588 302.4838"
                />
                <polygon
                  id="Fill-207"
                  points="536.37817 308.97667 537.53527 312.46887 535.96587 313.01227 534.76317 309.51057"
                />
                <polygon
                  id="Fill-209"
                  points="538.74937 315.93827 540.03187 319.37917 538.55937 319.95487 537.22747 316.49497"
                />
                <polygon
                  id="Fill-211"
                  points="541.40082 322.78682 542.86952 326.14602 541.51102 326.77872 539.98532 323.38912"
                />
                <polygon
                  id="Fill-213"
                  points="544.45127 329.44423 546.15937 332.67613 544.92437 333.37343 543.14977 330.10923"
                />
                <path
                  d="M548.00446,335.8326 C548.63906,336.8776 549.32116,337.8808 549.99376,338.8954 L548.93736,339.644 C548.22866,338.6218 547.50856,337.6072 546.84546,336.5603 L548.00446,335.8326 Z"
                  id="Fill-215"
                />
                <polygon
                  id="Fill-217"
                  points="552.16451 341.83318 554.51101 344.63378 553.66741 345.40328 551.21451 342.59508"
                />
                <polygon
                  id="Fill-219"
                  points="557.02946 347.28276 559.71226 349.76986 559.06816 350.52606 556.28656 348.05036"
                />
                <polygon
                  id="Fill-221"
                  points="562.55504 352.07171 565.54944 354.17121 565.09914 354.88371 562.00784 352.81271"
                />
                <polygon
                  id="Fill-223"
                  points="568.6966 356.04233 571.9817 357.65353 571.71 358.29193 568.3375 356.72063"
                />
                <polygon
                  id="Fill-225"
                  points="575.39676 358.97403 578.91936 359.96773 578.80536 360.49973 575.20486 359.56303"
                />
                <polygon
                  id="Fill-227"
                  points="582.52917 360.60309 586.18667 360.84819 586.18667 361.24149 582.47787 361.06859"
                />
                <polygon
                  id="Fill-230"
                  points="589.84911 360.68289 590.51411 360.60689 590.55401 360.91279 589.88521 361.00019"
                />
                <polygon
                  id="Fill-1"
                  points="0 19.44175 2.7816 21.86995 3.0324 21.57165 0.1995 19.20995"
                />
                <polygon
                  id="Fill-2"
                  points="5.89228 23.90143 8.78218 26.19283 8.44018 26.62033 5.59588 24.26243"
                />
                <polygon
                  id="Fill-3"
                  points="11.69792 28.44832 14.64292 30.66752 14.21542 31.22992 11.31222 28.94232"
                />
                <polygon
                  id="Fill-4"
                  points="17.61319 32.84853 20.61139 34.99363 20.10409 35.69663 17.14579 33.48123"
                />
                <polygon
                  id="Fill-5"
                  points="23.6341 37.10035 26.6817 39.16945 26.1022 40.01685 23.0888 37.87365"
                />
                <polygon
                  id="Fill-6"
                  points="29.75533 41.20188 32.85233 43.19688 32.20633 44.19058 29.14163 42.12148"
                />
                <polygon
                  id="Fill-7"
                  points="35.97308 45.15217 39.11568 47.06927 38.41078 48.21497 35.29668 46.22187"
                />
                <polygon
                  id="Fill-8"
                  points="42.28355 48.94932 45.46795 50.79612 44.71745 52.08242 41.55015 50.17102"
                />
                <polygon
                  id="Fill-9"
                  points="48.67002 52.61214 51.89432 54.38864 51.13052 55.77564 47.91382 53.94784"
                />
                <polygon
                  id="Fill-10"
                  points="55.14009 56.12638 58.40619 57.82498 57.63099 59.31268 54.37059 57.56278"
                />
                <polygon
                  id="Fill-11"
                  points="61.68977 59.48292 64.99577 61.10172 64.21487 62.69202 60.91267 61.02192"
                />
                <polygon
                  id="Fill-12"
                  points="68.31944 62.67986 71.66344 64.21886 70.88254 65.91366 67.53854 64.32336"
                />
                <polygon
                  id="Fill-13"
                  points="75.02321 65.7172 78.39951 67.1745 77.62241 68.9738 74.24421 67.4633"
                />
                <polygon
                  id="Fill-14"
                  points="81.79576 68.59133 85.21006 69.96693 84.44056 71.87263 81.02246 70.44383"
                />
                <polygon
                  id="Fill-15"
                  points="88.6369 71.3013 92.0797 72.5933 91.3235 74.6073 87.875 73.2602"
                />
                <polygon
                  id="Fill-16"
                  points="95.53922 73.84502 99.01242 75.05532 98.27142 77.17382 94.79062 75.91032"
                />
                <polygon
                  id="Fill-17"
                  points="102.49911 76.22192 105.99511 77.35812 105.28641 79.56212 101.77141 78.39552"
                />
                <polygon
                  id="Fill-18"
                  points="109.50536 78.45404 113.02796 79.50664 112.36106 81.76384 108.81756 80.68464"
                />
                <polygon
                  id="Fill-19"
                  points="116.56158 80.51649 120.10698 81.48359 119.48758 83.79399 115.91748 82.80219"
                />
                <polygon
                  id="Fill-20"
                  points="123.66625 82.40813 127.23635 83.28783 126.66065 85.65143 123.06965 84.74323"
                />
                <polygon
                  id="Fill-21"
                  points="130.81348 84.12535 134.40258 84.91765 133.87818 87.33065 130.26438 86.51365"
                />
                <polygon
                  id="Fill-22"
                  points="138.00156 85.6653 141.60586 86.3702 141.13466 88.8326 137.50186 88.1049"
                />
                <polygon
                  id="Fill-23"
                  points="145.22308 87.02912 148.84448 87.64472 148.42838 90.15652 144.77848 89.51812"
                />
                <polygon
                  id="Fill-24"
                  points="152.47424 88.21377 156.11084 88.73817 155.75174 91.29937 152.08664 90.75027"
                />
                <polygon
                  id="Fill-25"
                  points="159.75504 89.21678 163.40304 89.64998 163.10284 92.25678 159.42444 91.80078"
                />
                <polygon
                  id="Fill-26"
                  points="167.05636 90.03777 170.71386 90.37977 170.47636 93.03217 166.78656 92.66737"
                />
                <polygon
                  id="Fill-27"
                  points="174.37611 90.67598 178.04311 90.92678 177.86831 93.62288 174.17091 93.35118"
                />
                <polygon
                  id="Fill-28"
                  points="181.70897 91.13255 185.37977 91.29215 185.27147 94.03005 181.56837 93.84955"
                />
                <polygon
                  id="Fill-29"
                  points="189.05285 91.4071 192.72555 91.4869 192.68185 94.2457 188.97495 94.1659"
                />
                <polygon
                  id="Fill-30"
                  points="196.39692 91.52965 200.07152 91.52775 200.09622 94.25425 196.38932 94.27325"
                />
                <polygon
                  id="Fill-31"
                  points="203.7446 91.47949 207.4192 91.38829 207.5066 94.08249 203.8016 94.19079"
                />
                <polygon
                  id="Fill-32"
                  points="211.08848 91.25035 214.75928 91.06795 214.91128 93.72985 211.21008 93.92935"
                />
                <polygon
                  id="Fill-33"
                  points="218.42495 90.84299 222.09195 90.57319 222.30475 93.19899 218.61115 93.48589"
                />
                <polygon
                  id="Fill-34"
                  points="225.7504 90.25855 229.4098 89.89945 229.6834 92.48725 225.9974 92.86535"
                />
                <polygon
                  id="Fill-35"
                  points="233.06103 89.49684 236.70903 89.05034 237.04343 91.60014 233.36503 92.06754"
                />
                <polygon
                  id="Fill-36"
                  points="240.35114 88.55995 243.98774 88.02605 244.37724 90.53595 240.71214 91.09075"
                />
                <polygon
                  id="Fill-37"
                  points="247.61902 87.45396 251.24422 86.84976 251.68122 89.27226 248.03512 89.93156"
                />
                <polygon
                  id="Fill-38"
                  points="254.86277 86.19977 258.47277 85.50817 258.94777 87.82237 255.31877 88.56907"
                />
                <polygon
                  id="Fill-39"
                  points="262.07669 84.77097 265.67149 83.99197 266.17879 86.19977 262.56879 87.03387"
                />
                <polygon
                  id="Fill-40"
                  points="269.25565 83.16984 272.82955 82.30344 273.36535 84.40294 269.77815 85.32444"
                />
                <polygon
                  id="Fill-41"
                  points="276.39357 81.39505 279.94467 80.44315 280.50707 82.43435 276.94267 83.44135"
                />
                <polygon
                  id="Fill-42"
                  points="283.48703 79.44774 287.01533 78.41034 287.59673 80.29514 284.05893 81.38764"
                />
                <polygon
                  id="Fill-43"
                  points="290.53223 77.32962 294.03583 76.20672 294.63053 77.98322 291.12123 79.16122"
                />
                <polygon
                  id="Fill-44"
                  points="297.52556 75.04183 301.00256 73.83533 301.60486 75.49973 298.12406 76.76323"
                />
                <polygon
                  id="Fill-45"
                  points="304.46303 72.58437 307.90773 71.29237 308.51573 72.84847 305.06723 74.19557"
                />
                <polygon
                  id="Fill-46"
                  points="311.33951 69.95781 314.75191 68.58031 315.35801 70.02811 311.94371 71.45881"
                />
                <polygon
                  id="Fill-47"
                  points="318.14721 67.16272 321.52541 65.70162 322.12771 67.04112 318.74951 68.55542"
                />
                <polygon
                  id="Fill-48"
                  points="324.88803 64.19948 328.23013 62.65668 328.81723 63.88598 325.48083 65.48388"
                />
                <polygon
                  id="Fill-49"
                  points="331.55285 61.06923 334.85505 59.44283 335.42885 60.56763 332.13425 62.24913"
                />
                <polygon
                  id="Fill-50"
                  points="338.10652 57.74233 341.28332 55.91453 341.90652 56.94243 338.69742 58.81013"
                />
                <polygon
                  id="Fill-51"
                  points="344.38165 53.96095 347.38745 51.86715 348.07715 52.80385 345.03715 54.94515"
                />
                <polygon
                  id="Fill-52"
                  points="350.2783 49.62477 353.0257 47.21367 353.7971 48.03067 351.006 50.50447"
                />
                <polygon
                  id="Fill-53"
                  points="355.59431 44.62055 357.93321 41.82755 358.79581 42.48115 356.40941 45.36155"
                />
                <polygon
                  id="Fill-54"
                  points="359.97685 38.82498 361.64505 35.61398 362.59885 36.03008 360.88695 39.37028"
                />
                <polygon
                  id="Fill-55"
                  points="362.85174 32.20861 363.83594 32.47271 364.50854 28.76201 363.51104 28.66321"
                />
              </g>
              <path
                d="M0,24.39782 C41.415807,60.3466654 85.4064684,83.5649158 131.971984,94.0525712 C201.820258,109.784054 245.43997,102.359609 290.256436,89.6016866 C336.464289,75.8939346 383.29342,53.40626 364.97685,24.39782 C345.979501,0.52339693 309.103288,10.5671106 291.211973,35.5868767 C267.418353,68.6906557 285.59162,97.69469 295.54857,109.68578 C305.50552,121.67687 328.73207,132.33169 348.93344,129.57859 C369.337346,128.998141 392.444709,130.51247 407.9235,150.028495 C420.97365,175.04882 390.746348,192.07605 410.6709,220.327907 C430.595452,248.579764 474.90059,235.822639 507.30642,256.71975 C538.012328,284.894488 532.945469,306.177117 542.53527,324.510499 C552.055231,348.330068 556.848258,354.536363 567.641588,362.989843 C574.837141,368.625496 585.956612,371.081989 601,370.35932"
                id="p5-guide-path"
              />
              <g
                id="p5-arrow"
                transform="translate(308.895415, 119.389676) rotate(266.000000) translate(-308.895415, -119.389676) translate(300.406515, 110.250165)"
              >
                <path
                  d="M8.46294918,16.5886304 C7.30374918,16.5886304 6.26914918,15.9880304 5.69234918,14.9828304 L0.81754918,6.4680304 C0.24634918,5.4684304 0.25054918,4.2784304 0.82734918,3.2830304 C1.40414918,2.2862304 2.43454918,1.6912304 3.58254918,1.6912304 L13.5211492,2.0944304 C14.6621492,2.1406304 15.6645492,2.7692304 16.2035492,3.7758304 C16.7425492,4.7810304 16.7117492,5.9654304 16.1195492,6.9398304 L11.1901492,15.0528304 C10.6063492,16.0146304 9.58714918,16.5886304 8.46294918,16.5886304"
                  id="Fill-411"
                  fill="#2B3632"
                  transform="translate(8.489387, 9.139930) rotate(-90.000000) translate(-8.489387, -9.139930) "
                />
                <path
                  d="M3.58212918,0.650610403 L3.58212918,0.650610403 C2.05892918,0.650610403 0.69252918,1.4388104 -0.0732708202,2.7604104 C-0.83907082,4.0820104 -0.84327082,5.6612104 -0.0844708202,6.9856104 L4.78892918,15.4990104 C5.55332918,16.8332104 6.92672918,17.6284104 8.46252918,17.6284104 C9.95352918,17.6284104 11.3059292,16.8682104 12.0787292,15.5942104 L17.0081292,7.4798104 C17.7935292,6.1862104 17.8355292,4.6168104 17.1201292,3.2826104 C16.4047292,1.9498104 15.0761292,1.1168104 13.5627292,1.0538104 L3.75992918,0.653410403 C3.70112918,0.652010403 3.64092918,0.650610403 3.58212918,0.650610403 M3.58212918,2.7324104 C3.61292918,2.7324104 3.64512918,2.7324104 3.67452918,2.7338104 L13.4773292,3.1342104 C15.1139292,3.2000104 16.0799292,4.9990104 15.2287292,6.3990104 L10.3007292,14.5134104 C9.88072918,15.2050104 9.17092918,15.5480104 8.46252918,15.5480104 C7.73592918,15.5480104 7.00792918,15.1854104 6.59632918,14.4658104 L1.72152918,5.9510104 C0.89692918,4.5104104 1.94552918,2.7324104 3.58212918,2.7324104"
                  id="Fill-413"
                  fill="#FEFCE4"
                  transform="translate(8.488900, 9.139510) rotate(-90.000000) translate(-8.488900, -9.139510) "
                />
              </g>
            </g>
          </svg>
        </div>
        {/* <img className="p6" src="/images/teal-path/teal-path-6.svg" /> */}
        <div className="p6">
          <svg
            width="529px"
            height="564px"
            viewBox="0 0 529 564"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="Symbols"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Graphic/Path/6/Teal-Copy"
                transform="translate(0.000000, -7.000000)"
              >
                <g
                  id="p6-dotted"
                  transform="translate(5.000000, 7.817600)"
                  fill="#7EC8BA"
                >
                  <path
                    d="M159.12481,448.31146 C157.81951,448.98596 156.54271,449.70986 155.30011,450.48886 L154.59521,449.37356 C155.86631,448.56606 157.17351,447.81746 158.50351,447.11826 L159.12481,448.31146 Z"
                    id="Fill-46"
                  />
                  <path
                    d="M151.69372,452.99477 C150.53662,453.88967 149.42702,454.84347 148.38202,455.86187 L147.49092,454.95367 C148.56632,453.89347 149.70822,452.89787 150.89762,451.97067 L151.69372,452.99477 Z"
                    id="Fill-48"
                  />
                  <path
                    d="M145.46685,459.1141 C144.57385,460.2617 143.76635,461.4758 143.06145,462.7469 L141.99175,462.1579 C142.72135,460.8241 143.55735,459.553 144.48075,458.3522 L145.46685,459.1141 Z"
                    id="Fill-50"
                  />
                  <path
                    d="M141.27336,466.7141 C140.78696,468.0821 140.41646,469.4919 140.15996,470.9245 L139.00286,470.7193 C139.26126,469.2259 139.64316,467.7496 140.14096,466.3151 L141.27336,466.7141 Z"
                    id="Fill-52"
                  />
                  <path
                    d="M139.76115,475.25669 C139.75545,476.71019 139.87895,478.16179 140.12405,479.59249 L139.01445,479.78819 C138.75035,478.29479 138.61355,476.77479 138.61355,475.25479 L139.76115,475.25669 Z"
                    id="Fill-54"
                  />
                  <path
                    d="M141.2327,483.80859 C141.7191,485.18039 142.3157,486.51419 143.0054,487.80049 L141.9965,488.33629 C141.2878,487.00059 140.6741,485.61169 140.1725,484.18099 L141.2327,483.80859 Z"
                    id="Fill-56"
                  />
                  <path
                    d="M145.32568,491.51062 C146.17878,492.69622 147.10598,493.83052 148.09588,494.90972 L147.22568,495.70392 C146.21298,494.58672 145.26108,493.41442 144.38328,492.18512 L145.32568,491.51062 Z"
                    id="Fill-58"
                  />
                  <path
                    d="M151.22803,497.98791 C152.32433,498.96071 153.47003,499.87841 154.65373,500.74291 L153.93553,501.72331 C152.72523,500.83031 151.55483,499.88411 150.43193,498.88091 L151.22803,497.98791 Z"
                    id="Fill-60"
                  />
                  <path
                    d="M158.31959,503.17966 C159.57549,503.93586 160.86749,504.64076 162.18229,505.28866 L161.62749,506.40966 C160.28229,505.74086 158.96559,505.01506 157.68119,504.23416 L158.31959,503.17966 Z"
                    id="Fill-62"
                  />
                  <path
                    d="M166.20915,507.06858 C167.57715,507.60628 168.96415,508.08508 170.37015,508.50308 L169.99965,509.73618 C168.55945,509.30108 167.14015,508.80328 165.74365,508.24848 L166.20915,507.06858 Z"
                    id="Fill-64"
                  />
                  <path
                    d="M174.6366,509.56974 C176.0806,509.82054 177.5189,510.08464 178.9838,510.24614 L178.8299,511.56094 C177.3403,511.38994 175.8583,511.11254 174.3744,510.84844 L174.6366,509.56974 Z"
                    id="Fill-66"
                  />
                  <polygon
                    id="Fill-68"
                    points="183.37964 510.59783 187.78954 510.65103 187.81614 512.00953 183.31504 511.93733"
                  />
                  <polygon
                    id="Fill-70"
                    points="192.19488 510.4103 196.57438 509.8783 196.78148 511.2691 192.31268 511.7821"
                  />
                  <polygon
                    id="Fill-72"
                    points="200.90828 509.06149 205.18328 507.98039 205.58988 509.42819 201.21418 510.48459"
                  />
                  <polygon
                    id="Fill-74"
                    points="209.38399 506.64013 213.49939 505.05363 214.11119 506.53563 209.89319 508.10883"
                  />
                  <polygon
                    id="Fill-76"
                    points="217.51086 503.22963 221.41156 501.17763 222.23996 502.66343 218.23096 504.71733"
                  />
                  <polygon
                    id="Fill-78"
                    points="225.18515 498.90276 228.81985 496.41376 229.87245 497.87676 226.12375 500.38096"
                  />
                  <polygon
                    id="Fill-80"
                    points="232.30274 493.72051 235.62014 490.83061 236.90264 492.23091 233.46934 495.15691"
                  />
                  <polygon
                    id="Fill-82"
                    points="238.75799 487.74767 241.70299 484.48157 243.22109 485.78497 240.15639 489.10427"
                  />
                  <polygon
                    id="Fill-84"
                    points="244.43747 481.0458 246.94927 477.4453 248.69727 478.5967 246.07147 482.277"
                  />
                  <polygon
                    id="Fill-86"
                    points="249.22091 473.69242 251.23871 469.80122 253.20711 470.75122 251.08101 474.75072"
                  />
                  <path
                    d="M252.98196,465.78443 C253.51776,464.42593 253.97376,463.04083 254.44306,461.65763 L256.61286,462.35493 C256.11316,463.78183 255.62676,465.21253 255.05486,466.61473 L252.98196,465.78443 Z"
                    id="Fill-88"
                  />
                  <polygon
                    id="Fill-90"
                    points="255.61479 457.44039 256.50019 453.15209 258.83339 453.56629 257.87199 457.99709"
                  />
                  <polygon
                    id="Fill-92"
                    points="257.09926 448.81629 257.41656 444.44819 259.87896 444.56409 259.50276 449.08229"
                  />
                  <polygon
                    id="Fill-94"
                    points="257.45912 440.07135 257.23492 435.69755 259.78472 435.50185 259.97092 440.03145"
                  />
                  <polygon
                    id="Fill-96"
                    points="256.74662 431.34693 255.99992 427.03203 258.60102 426.51903 259.32492 430.99163"
                  />
                  <polygon
                    id="Fill-98"
                    points="255.00622 422.76919 253.76362 418.57019 256.37612 417.73229 257.61492 422.09469"
                  />
                  <polygon
                    id="Fill-100"
                    points="252.28238 414.45289 250.56858 410.42869 253.14878 409.25639 254.88348 413.44779"
                  />
                  <polygon
                    id="Fill-102"
                    points="248.62165 406.51336 246.44805 402.72096 248.95605 401.20476 251.17145 405.16816"
                  />
                  <polygon
                    id="Fill-104"
                    points="244.05709 399.06745 241.45029 395.56765 243.82529 393.70185 246.50429 397.37645"
                  />
                  <polygon
                    id="Fill-106"
                    points="238.63354 392.24113 235.61254 389.10233 237.79754 386.88313 240.92114 390.19863"
                  />
                  <polygon
                    id="Fill-108"
                    points="232.39546 386.17006 228.99446 383.46066 230.91916 380.89756 234.45886 383.77606"
                  />
                  <path
                    d="M225.42075,380.99522 C224.19335,380.22572 222.92605,379.50942 221.67775,378.76082 L223.30225,375.88802 C224.59615,376.68222 225.90905,377.44032 227.18965,378.26492 L225.42075,380.99522 Z"
                    id="Fill-110"
                  />
                  <polygon
                    id="Fill-112"
                    points="217.80783 376.73504 213.83873 374.88254 215.20293 371.80644 219.29933 373.74254"
                  />
                  <polygon
                    id="Fill-114"
                    points="209.7847 373.18736 205.6655 371.62176 206.8397 368.42216 211.0425 370.04476"
                  />
                  <polygon
                    id="Fill-116"
                    points="201.49633 370.15363 197.28973 368.75143 198.36893 365.47393 202.61163 366.91033"
                  />
                  <polygon
                    id="Fill-118"
                    points="193.05957 367.38533 188.81307 366.02113 189.89417 362.69993 194.12737 364.08123"
                  />
                  <polygon
                    id="Fill-120"
                    points="184.56144 364.62995 180.31874 363.17645 181.50244 359.84385 185.68244 361.29735"
                  />
                  <polygon
                    id="Fill-122"
                    points="176.09314 361.63137 171.89794 359.96127 173.28304 356.66287 177.36424 358.31017"
                  />
                  <polygon
                    id="Fill-124"
                    points="167.7472 358.12834 163.6793 356.05164 165.4311 352.88244 169.29 354.87554"
                  />
                  <polygon
                    id="Fill-126"
                    points="159.74649 353.73269 155.96169 351.17149 158.11629 348.20749 161.69969 350.65849"
                  />
                  <polygon
                    id="Fill-128"
                    points="152.34124 348.37222 148.91174 345.32652 151.47674 342.64942 154.69914 345.53932"
                  />
                  <path
                    d="M145.70606,342.03211 C144.68006,340.89021 143.69586,339.70461 142.76486,338.47531 L145.75926,336.21811 C146.61616,337.36381 147.52816,338.47151 148.48386,339.54311 L145.70606,342.03211 Z"
                    id="Fill-130"
                  />
                  <path
                    d="M140.14343,334.65479 C139.32833,333.33809 138.58163,331.97389 137.90903,330.56979 L141.33663,328.94149 C141.93703,330.22019 142.61723,331.46849 143.35633,332.68259 L140.14343,334.65479 Z"
                    id="Fill-132"
                  />
                  <path
                    d="M136.14488,326.23095 C135.64328,324.74895 135.23478,323.22705 134.93458,321.68235 L138.70228,320.95845 C138.96068,322.33025 139.31788,323.68685 139.76058,325.02065 L136.14488,326.23095 Z"
                    id="Fill-134"
                  />
                  <path
                    d="M134.35812,316.99448 C134.27832,315.41748 134.31252,313.83478 134.46072,312.26348 L138.32152,312.63588 C138.18472,314.02098 138.14672,315.41558 138.21132,316.80638 L134.35812,316.99448 Z"
                    id="Fill-136"
                  />
                  <path
                    d="M135.23573,307.60392 C135.59863,306.07442 136.06413,304.57532 136.60373,303.11612 L140.27643,304.48602 C139.77863,305.81032 139.35683,307.15362 139.02623,308.51402 L135.23573,307.60392 Z"
                    id="Fill-138"
                  />
                  <path
                    d="M138.43818,298.84986 C139.11078,297.46476 139.84608,296.11956 140.61368,294.79906 L144.01848,296.77886 C143.29268,298.02906 142.60868,299.29636 141.97788,300.58076 L138.43818,298.84986 Z"
                    id="Fill-140"
                  />
                  <polygon
                    id="Fill-142"
                    points="143.00084 290.92876 145.49934 287.18196 148.74074 289.38786 146.30114 293.06056"
                  />
                  <polygon
                    id="Fill-144"
                    points="148.02729 283.50508 150.50299 279.84188 153.76529 281.99268 151.25349 285.71668"
                  />
                  <polygon
                    id="Fill-146"
                    points="152.85158 276.14638 154.98908 272.37488 158.43568 274.17608 156.18798 278.16228"
                  />
                  <path
                    d="M156.81859,268.49812 C157.36769,267.18712 157.84649,265.85332 158.24359,264.50242 L161.95999,265.59112 C161.52299,267.09212 160.99479,268.55892 160.40199,269.98962 L156.81859,268.49812 Z"
                    id="Fill-148"
                  />
                  <path
                    d="M159.17877,260.39329 C159.40487,259.00819 159.54357,257.60789 159.59487,256.20379 L163.44807,256.33679 C163.39487,257.90239 163.24287,259.46609 162.99397,261.01269 L159.17877,260.39329 Z"
                    id="Fill-150"
                  />
                  <path
                    d="M159.48106,251.99187 C159.35756,250.58967 159.14666,249.19317 158.85976,247.80997 L162.61606,247.02147 C162.93716,248.54717 163.17276,250.09187 163.31526,251.64797 L159.48106,251.99187 Z"
                    id="Fill-152"
                  />
                  <path
                    d="M157.76289,243.70901 C157.32399,242.35811 156.81479,241.02811 156.24289,239.72091 L159.74459,238.18761 C160.36589,239.60121 160.92259,241.04711 161.40519,242.51961 L157.76289,243.70901 Z"
                    id="Fill-154"
                  />
                  <path
                    d="M154.35068,235.87512 C153.66478,234.61732 152.92378,233.38422 152.13908,232.18152 L155.32538,230.09722 C156.16328,231.37972 156.95748,232.69452 157.69848,234.04162 L154.35068,235.87512 Z"
                    id="Fill-156"
                  />
                  <polygon
                    id="Fill-158"
                    points="149.64894 228.64638 146.92244 225.27388 149.79334 222.79818 152.67564 226.35118"
                  />
                  <polygon
                    id="Fill-160"
                    points="143.99169 222.06307 140.88329 219.01167 143.45399 216.24717 146.71059 219.43157"
                  />
                  <polygon
                    id="Fill-162"
                    points="137.61814 216.11816 134.21334 213.38026 136.49714 210.39536 140.04254 213.23586"
                  />
                  <polygon
                    id="Fill-164"
                    points="130.68618 210.79854 127.04388 208.37794 129.04458 205.21634 132.82748 207.72244"
                  />
                  <polygon
                    id="Fill-166"
                    points="123.29955 206.11713 119.44445 203.99103 121.20195 200.70593 125.15395 202.87763"
                  />
                  <polygon
                    id="Fill-168"
                    points="115.52703 201.93504 111.57503 199.92104 113.22233 196.62074 117.22563 198.62904"
                  />
                  <polygon
                    id="Fill-170"
                    points="107.60042 197.93459 103.60662 195.95669 105.19882 192.71339 109.20972 194.65709"
                  />
                  <polygon
                    id="Fill-172"
                    points="99.61263 193.96397 95.62263 191.93857 97.22813 188.78647 101.20293 190.76247"
                  />
                  <polygon
                    id="Fill-174"
                    points="91.65258 189.85408 87.71388 187.68998 89.39728 184.67088 93.29038 186.76468"
                  />
                  <polygon
                    id="Fill-176"
                    points="83.81888 185.42689 79.99038 183.03479 81.82008 180.19049 85.57068 182.48759"
                  />
                  <polygon
                    id="Fill-178"
                    points="76.24491 180.49696 72.60831 177.78756 74.63561 175.17506 78.16771 177.76096"
                  />
                  <polygon
                    id="Fill-180"
                    points="69.1068 174.88968 65.7704 171.78698 68.0333 169.48228 71.2481 172.42158"
                  />
                  <polygon
                    id="Fill-182"
                    points="62.63502 168.47338 59.73372 164.94508 62.22842 163.02038 65.01762 166.34918"
                  />
                  <polygon
                    id="Fill-184"
                    points="57.09272 161.21291 54.73482 157.30271 57.41762 155.79601 59.69192 159.49911"
                  />
                  <polygon
                    id="Fill-186"
                    points="52.65622 153.24564 50.84932 149.07324 53.63472 147.95414 55.39982 151.94034"
                  />
                  <polygon
                    id="Fill-188"
                    points="49.29778 144.80508 47.98488 140.46738 50.79878 139.68078 52.10598 143.85888"
                  />
                  <polygon
                    id="Fill-190"
                    points="46.88763 136.07876 45.98703 131.65366 48.78573 131.13116 49.69773 135.43276"
                  />
                  <polygon
                    id="Fill-192"
                    points="45.26408 127.20405 44.70168 122.73715 47.44528 122.42175 48.04378 126.79175"
                  />
                  <polygon
                    id="Fill-194"
                    points="44.28615 118.26075 43.99165 113.78245 46.62315 113.62285 46.97655 118.03085"
                  />
                  <polygon
                    id="Fill-196"
                    points="43.80203 109.30073 43.69943 104.82433 46.21313 104.77113 46.37463 109.20003"
                  />
                  <polygon
                    id="Fill-198"
                    points="43.66466 100.35363 43.67226 95.88863 46.05866 95.88103 46.11566 100.32893"
                  />
                  <polygon
                    id="Fill-200"
                    points="43.6962 91.43066 43.7228 86.97706 45.9838 86.96946 46.0218 91.42876"
                  />
                  <polygon
                    id="Fill-202"
                    points="43.72774 82.52821 43.69354 78.08411 45.83104 78.04231 45.92794 82.50731"
                  />
                  <polygon
                    id="Fill-204"
                    points="43.60158 73.64609 43.43058 69.21339 45.44268 69.10129 45.67638 73.57199"
                  />
                  <polygon
                    id="Fill-206"
                    points="43.16173 64.78981 42.77223 60.37991 44.64753 60.17091 45.10543 64.63401"
                  />
                  <polygon
                    id="Fill-208"
                    points="42.24327 55.98749 41.55357 51.61939 43.28827 51.29829 44.05017 55.72339"
                  />
                  <polygon
                    id="Fill-210"
                    points="40.6866 47.2872 39.6321 42.9989 41.1939 42.56 42.3434 46.9053"
                  />
                  <polygon
                    id="Fill-212"
                    points="38.35055 38.78166 36.81155 34.64726 38.13965 34.09056 39.79645 38.27626"
                  />
                  <polygon
                    id="Fill-214"
                    points="35.02194 30.61584 32.98134 26.69804 34.07194 26.07104 36.23224 30.01734"
                  />
                  <polygon
                    id="Fill-216"
                    points="30.69298 22.92122 28.15458 19.30742 29.00578 18.65002 31.66578 22.27332"
                  />
                  <path
                    d="M25.36234,15.88343 C24.38954,14.77763 23.37494,13.70793 22.31664,12.68193 L22.93604,12.03403 C24.03044,13.05433 25.08494,14.12023 26.09764,15.22413 L25.36234,15.88343 Z"
                    id="Fill-218"
                  />
                  <path
                    d="M19.01653,9.74548 C17.87273,8.81638 16.68903,7.93478 15.46543,7.11398 L15.85873,6.51738 C17.11653,7.32488 18.34013,8.19508 19.52003,9.11658 L19.01653,9.74548 Z"
                    id="Fill-220"
                  />
                  <path
                    d="M11.67645,4.83778 C10.37495,4.14238 9.03735,3.51538 7.66935,2.96248 L7.86505,2.46468 C9.26155,2.99668 10.62955,3.60658 11.96335,4.28298 L11.67645,4.83778 Z"
                    id="Fill-222"
                  />
                  <path
                    d="M3.4789,1.5333 C2.3313,1.2141 1.1704,0.9443 0,0.7315 L0.0627,0.3667 C1.2483,0.5567 2.4282,0.8056 3.5948,1.1058 L3.4789,1.5333 Z"
                    id="Fill-224"
                  />
                  <polygon
                    id="Fill-1"
                    points="516.81957 553.96533 519.24017 557.70453 519.55747 557.51073 517.24707 553.69553"
                  />
                  <polygon
                    id="Fill-2"
                    points="514.36363 550.25102 511.86323 546.56692 512.50353 546.13942 514.89753 549.90332"
                  />
                  <polygon
                    id="Fill-3"
                    points="509.31685 542.91455 506.71955 539.30455 507.56505 538.70415 510.06355 542.40345"
                  />
                  <polygon
                    id="Fill-4"
                    points="504.06392 535.73749 501.34122 532.22249 502.37672 531.42829 505.00632 535.04399"
                  />
                  <polygon
                    id="Fill-5"
                    points="498.55145 528.76829 495.67865 525.38629 496.87945 524.37169 499.67245 527.86959"
                  />
                  <polygon
                    id="Fill-6"
                    points="492.72149 522.08314 489.68149 518.86264 490.99249 517.61434 493.99259 520.94694"
                  />
                  <polygon
                    id="Fill-7"
                    points="486.552 515.73562 483.3182 512.72222 484.6425 511.27062 487.8744 514.38852"
                  />
                  <polygon
                    id="Fill-8"
                    points="479.97439 509.83517 476.52589 507.07827 477.83309 505.40627 481.29489 508.27527"
                  />
                  <polygon
                    id="Fill-9"
                    points="472.97365 504.45988 469.32375 501.97658 470.58915 500.07848 474.26185 502.67388"
                  />
                  <polygon
                    id="Fill-10"
                    points="465.58702 499.62647 461.77372 497.39967 462.98972 495.28497 466.82772 497.61817"
                  />
                  <polygon
                    id="Fill-11"
                    points="457.8924 495.28269 453.9575 493.26299 455.1374 490.94879 459.0894 493.06729"
                  />
                  <polygon
                    id="Fill-12"
                    points="449.97339 491.32138 445.95489 489.44798 447.12339 486.95328 451.14379 488.91598"
                  />
                  <polygon
                    id="Fill-13"
                    points="441.91321 487.60859 437.85291 485.80359 439.00431 483.21389 443.07221 485.06069"
                  />
                  <polygon
                    id="Fill-14"
                    points="433.77703 484.02557 429.69203 482.26427 430.84153 479.60617 434.92463 481.39977"
                  />
                  <polygon
                    id="Fill-15"
                    points="425.5962 480.51323 421.4998 478.76523 422.6702 476.04633 426.7552 477.82473"
                  />
                  <polygon
                    id="Fill-16"
                    points="417.39865 477.01571 413.30225 475.26011 414.50685 472.48611 418.58615 474.27021"
                  />
                  <polygon
                    id="Fill-17"
                    points="409.2068 473.49387 405.118 471.71547 406.3644 468.88827 410.4323 470.69327"
                  />
                  <polygon
                    id="Fill-18"
                    points="401.03167 469.92396 396.95427 468.11326 398.24817 465.23856 402.30277 467.07206"
                  />
                  <polygon
                    id="Fill-19"
                    points="392.89169 466.317 388.81429 464.5728 390.06069 461.6259 394.16849 463.4081"
                  />
                  <polygon
                    id="Fill-20"
                    points="384.71276 462.88066 380.59166 461.23906 381.78296 458.21806 385.93256 459.89576"
                  />
                  <polygon
                    id="Fill-21"
                    points="376.45042 459.64838 372.29132 458.10938 373.42182 455.01618 377.61132 456.59128"
                  />
                  <polygon
                    id="Fill-22"
                    points="368.11189 456.62225 363.91669 455.18585 364.98639 452.02045 369.21389 453.49295"
                  />
                  <polygon
                    id="Fill-23"
                    points="359.70857 453.78137 355.48487 452.42857 356.46717 449.27267 360.73457 450.62167"
                  />
                  <polygon
                    id="Fill-24"
                    points="351.24578 451.12821 346.98978 449.87801 347.88278 446.73541 352.18248 447.97801"
                  />
                  <polygon
                    id="Fill-25"
                    points="342.71801 448.68082 338.43161 447.53322 339.24101 444.40772 343.56731 445.54582"
                  />
                  <polygon
                    id="Fill-26"
                    points="334.13267 446.44129 329.81777 445.39819 330.54357 442.28979 334.89837 443.32149"
                  />
                  <polygon
                    id="Fill-27"
                    points="325.49546 444.40943 321.15776 443.47273 321.79996 440.38333 326.17756 441.31053"
                  />
                  <polygon
                    id="Fill-28"
                    points="316.80999 442.58733 312.45139 441.75513 313.01189 438.68853 317.40849 439.50933"
                  />
                  <polygon
                    id="Fill-29"
                    points="308.08386 440.97499 303.70436 440.24729 304.18506 437.20539 308.60256 437.92169"
                  />
                  <polygon
                    id="Fill-30"
                    points="299.31859 439.57222 294.92579 438.93382 295.32289 435.95082 299.75939 436.54362"
                  />
                  <polygon
                    id="Fill-31"
                    points="290.52729 438.34577 286.12119 437.80997 286.43469 434.93527 290.88259 435.41597"
                  />
                  <polygon
                    id="Fill-32"
                    points="281.70635 437.32528 277.28885 436.89398 277.52255 434.13138 281.97995 434.50758"
                  />
                  <polygon
                    id="Fill-33"
                    points="272.86318 436.51816 268.43618 436.19516 268.59578 433.54656 273.06078 433.81256"
                  />
                  <polygon
                    id="Fill-34"
                    points="264.00348 435.92441 259.56698 435.70781 259.66008 433.17321 264.12698 433.33281"
                  />
                  <polygon
                    id="Fill-35"
                    points="255.12877 435.54403 250.68847 435.43383 250.71887 433.01703 255.18767 433.06833"
                  />
                  <polygon
                    id="Fill-36"
                    points="246.24836 435.37892 241.80616 435.37702 241.77576 433.07802 246.24836 433.02102"
                  />
                  <polygon
                    id="Fill-37"
                    points="237.36453 435.42718 232.92233 435.53358 232.84253 433.35808 237.30943 433.19088"
                  />
                  <polygon
                    id="Fill-38"
                    points="228.48241 435.69242 224.04401 435.90522 223.92051 433.85512 228.37791 433.57962"
                  />
                  <polygon
                    id="Fill-39"
                    points="219.60941 436.17312 215.17671 436.49612 215.01141 434.57142 219.46311 434.18572"
                  />
                  <polygon
                    id="Fill-40"
                    points="210.74952 436.87251 206.32632 437.30571 206.12492 435.50641 210.56522 435.01241"
                  />
                  <polygon
                    id="Fill-41"
                    points="201.90635 437.79097 197.49455 438.33057 197.26845 436.66047 201.69355 436.05627"
                  />
                  <polygon
                    id="Fill-42"
                    points="193.08921 438.9266 188.69261 439.5783 188.44371 438.0336 192.85171 437.3192"
                  />
                  <polygon
                    id="Fill-43"
                    points="184.30912 440.28852 179.96382 441.14352 179.64842 439.71092 184.03742 438.81222"
                  />
                  <polygon
                    id="Fill-44"
                    points="175.65899 442.1699 171.40299 443.3783 170.98119 442.0236 175.29229 440.7753"
                  />
                  <polygon
                    id="Fill-45"
                    points="167.21292 444.7862 163.10892 446.4202 162.56172 445.1662 166.73032 443.479"
                  />
                </g>
                <path
                  d="M528.408697,571 C509.312128,540.265734 492.222049,520.009623 477.13846,510.231666 C454.936476,497.342646 448.07221,494.77088 412.118171,478.529395 C376.164133,462.28791 355.583775,456.29761 336.472889,451.625447 C304.797209,443.881488 278.61979,442.55758 254.624303,442.120443 C217.316703,441.440794 187.457047,447.607965 172.942795,451.817714 C146.99175,459.34462 134.989033,483.238843 151.085661,501.655062 C167.18229,520.07128 201.824735,526.403131 228.683532,509.070745 C255.542329,491.73836 265.843883,468.437199 263.201276,438.179266 C258.739331,407.369595 234.206213,388.306271 218.237332,380.798901 C202.26845,373.29153 158.809469,366.571662 144.44842,336.94001 C128.336105,304.324382 178.308421,284.195826 164.042478,248.334786 C149.724584,212.827429 109.89376,204.9616 87.31374,190.62629 C65.0338151,176.3664 46.2692315,153.193992 49.824045,100.017303 C51.2622338,44.6815006 39.2176815,38.8357247 33.15458,26.46762 C28.8531067,18.4904067 17.80158,12.2737333 6.82121026e-13,7.8176"
                  id="p6-guide-path"
                />
                <g
                  id="p6-arrow"
                  transform="translate(247.667957, 400.277125) rotate(-130.000000) translate(-247.667957, -400.277125) translate(236.729750, 389.400791)"
                >
                  <path
                    d="M6.30105562,18.7849338 C5.31125562,18.7849338 4.36065562,18.3075338 3.76005562,17.5081338 C3.15245562,16.7031338 2.96485562,15.6839338 3.24345562,14.7109338 L5.94685562,5.2805338 C6.34305562,3.8973338 7.58065562,2.9677338 9.02265562,2.9677338 C9.93685562,2.9677338 10.7754556,3.3457338 11.3914556,4.0303338 L17.9392556,11.3355338 C18.7008556,12.1853338 18.9500556,13.3417338 18.6056556,14.4295338 C18.2612556,15.5173338 17.3918556,16.3195338 16.2788556,16.5757338 L7.02625562,18.7023338 C6.78685562,18.7569338 6.54325562,18.7849338 6.30105562,18.7849338"
                    id="Fill-407"
                    fill="#2B3632"
                    transform="translate(10.937445, 10.876334) rotate(105.000000) translate(-10.937445, -10.876334) "
                  />
                  <path
                    d="M9.02307562,1.9268338 L9.02307562,1.9268338 C7.11067562,1.9268338 5.47127562,3.1602338 4.94627562,4.9942338 L2.24287562,14.4260338 C1.87467562,15.7154338 2.12247562,17.0664338 2.92747562,18.1360338 C3.72687562,19.1930338 4.98687562,19.8258338 6.30147562,19.8258338 C6.62067562,19.8258338 6.94407562,19.7880338 7.25907562,19.7166338 L16.5116756,17.5900338 C17.9858756,17.2512338 19.1408756,16.1872338 19.5986756,14.7452338 C20.0550756,13.3018338 19.7260756,11.7674338 18.7152756,10.6404338 L12.1646756,3.3352338 C11.3638756,2.4406338 10.2186756,1.9268338 9.02307562,1.9268338 M9.02307562,4.0086338 C9.59707562,4.0086338 10.1766756,4.2354338 10.6162756,4.7254338 L17.1640756,12.0292338 C18.2588756,13.2486338 17.6414756,15.1946338 16.0454756,15.5614338 L6.79287562,17.6880338 C6.62627562,17.7258338 6.46107562,17.7440338 6.30147562,17.7440338 C4.92387562,17.7440338 3.84027562,16.4084338 4.24347562,14.9986338 L6.94827562,5.5682338 C7.23247562,4.5728338 8.11867562,4.0086338 9.02307562,4.0086338"
                    id="Fill-409"
                    fill="#FEFCE4"
                    transform="translate(10.938207, 10.876334) rotate(105.000000) translate(-10.938207, -10.876334) "
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
        {/* <img className="p7" src="/images/teal-path/teal-path-7.svg" /> */}
        <div className="p7">
          <svg
            width="601px"
            height="363px"
            viewBox="0 0 601 363"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="Symbols"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Graphic/Path/5/Teal-Copy-2"
                transform="translate(0.000000, -9.000000)"
              >
                <g
                  id="p7-dotted"
                  transform="translate(5.000000, 9.811710)"
                  fill="#7EC8BA"
                >
                  <path
                    d="M363.5821,25.05834 C363.508,24.46174 363.508,23.85374 363.3769,23.26664 L363.0596,21.49204 L363.9944,21.26784 L364.3345,23.12414 C364.4732,23.73974 364.4827,24.37054 364.5606,24.99374 L363.5821,25.05834 Z"
                    id="Fill-56"
                  />
                  <polygon
                    id="Fill-58"
                    points="361.93062 18.07242 360.22442 14.89182 360.99772 14.38642 362.79512 17.69812"
                  />
                  <polygon
                    id="Fill-60"
                    points="358.00256 12.03954 355.37866 9.53914 355.98856 8.80574 358.69796 11.40684"
                  />
                  <polygon
                    id="Fill-62"
                    points="352.44924 7.40354 349.28764 5.61374 349.72654 4.73214 352.97554 6.58844"
                  />
                  <polygon
                    id="Fill-64"
                    points="345.94953 4.15644 342.48963 3.01834 342.76323 2.04174 346.30673 3.22354"
                  />
                  <polygon
                    id="Fill-66"
                    points="338.93777 2.18785 335.32967 1.65965 335.43797 0.62035 339.13157 1.17705"
                  />
                  <polygon
                    id="Fill-68"
                    points="331.69022 1.4364 328.04792 1.5238 327.97572 0.4503 331.71302 0.3762"
                  />
                  <polygon
                    id="Fill-71"
                    points="324.43165 1.93914 320.84065 2.65354 320.59175 1.57814 324.25875 0.86374"
                  />
                  <polygon
                    id="Fill-73"
                    points="317.31786 3.6119 313.87316 4.8013 313.47036 3.7411 316.99106 2.5422"
                  />
                  <polygon
                    id="Fill-75"
                    points="310.51377 6.21319 307.25527 7.84719 306.69477 6.79839 310.03687 5.16629"
                  />
                  <polygon
                    id="Fill-77"
                    points="304.10317 9.68202 301.06697 11.70742 300.33737 10.66812 303.45717 8.63512"
                  />
                  <polygon
                    id="Fill-79"
                    points="298.15256 13.91256 295.37286 16.28756 294.47036 15.28056 297.33556 12.88466"
                  />
                  <polygon
                    id="Fill-81"
                    points="292.73471 18.82216 290.25331 21.49926 289.17791 20.54736 291.74481 17.83986"
                  />
                  <polygon
                    id="Fill-83"
                    points="287.93094 24.3124 285.77824 27.2555 284.53374 26.3891 286.77194 23.4004"
                  />
                  <polygon
                    id="Fill-85"
                    points="283.79692 30.32419 282.00142 33.50099 280.59162 32.74859 282.46882 29.51099"
                  />
                  <polygon
                    id="Fill-87"
                    points="280.40314 36.77564 279.01234 40.13674 277.44294 39.53254 278.91354 36.09354"
                  />
                  <polygon
                    id="Fill-89"
                    points="277.83339 43.57137 276.87769 47.07117 275.17149 46.65507 276.19369 43.05647"
                  />
                  <polygon
                    id="Fill-91"
                    points="276.15607 50.62303 275.67347 54.21593 273.84947 54.02593 274.38527 50.31333"
                  />
                  <polygon
                    id="Fill-93"
                    points="275.43977 57.83714 275.46067 61.46804 273.55117 61.53454 273.57017 57.77254"
                  />
                  <polygon
                    id="Fill-95"
                    points="275.72743 65.07994 276.23473 68.66144 274.27393 68.99394 273.78753 65.27754"
                  />
                  <polygon
                    id="Fill-97"
                    points="276.9725 72.20114 277.932 75.68954 275.956 76.28804 275.0003 72.66854"
                  />
                  <polygon
                    id="Fill-99"
                    points="279.1081 79.11467 280.4913 82.46627 278.5305 83.33077 277.1359 79.84807"
                  />
                  <polygon
                    id="Fill-101"
                    points="282.07134 85.73313 283.84404 88.90233 281.93454 90.03283 280.13334 86.73063"
                  />
                  <polygon
                    id="Fill-103"
                    points="285.79895 91.96646 287.92125 94.90386 286.09345 96.29276 283.92555 93.22616"
                  />
                  <polygon
                    id="Fill-105"
                    points="290.20942 97.71377 292.66232 100.39087 290.95232 102.03437 288.43482 99.22997"
                  />
                  <polygon
                    id="Fill-107"
                    points="295.26551 102.91654 298.00911 105.28204 296.45871 107.17634 293.62961 104.68734"
                  />
                  <polygon
                    id="Fill-109"
                    points="300.88761 107.47179 303.88961 109.47819 302.54061 111.61379 299.43031 109.48959"
                  />
                  <polygon
                    id="Fill-111"
                    points="307.00504 111.28756 310.22934 112.89116 309.13494 115.25096 305.77764 113.53906"
                  />
                  <polygon
                    id="Fill-113"
                    points="313.5475 114.27664 316.9523 115.43374 316.1638 117.99494 312.5994 116.74094"
                  />
                  <polygon
                    id="Fill-115"
                    points="320.4312 116.35752 323.9728 117.07382 323.4845 119.78702 319.8023 119.00232"
                  />
                  <polygon
                    id="Fill-117"
                    points="327.5562 117.61836 331.17 118.00976 330.9173 120.79516 327.1952 120.37526"
                  />
                  <polygon
                    id="Fill-119"
                    points="334.80736 118.27063 338.45916 118.43213 338.35846 121.26313 334.64016 121.08073"
                  />
                  <polygon
                    id="Fill-121"
                    points="342.11989 118.5201 345.80019 118.5638 345.76979 121.4328 342.06669 121.3701"
                  />
                  <polygon
                    id="Fill-123"
                    points="349.49531 118.59059 353.20221 118.62859 353.15661 121.53179 349.46681 121.47669"
                  />
                  <polygon
                    id="Fill-125"
                    points="356.92089 118.70383 360.64679 118.84633 360.49479 121.78183 356.83159 121.62413"
                  />
                  <polygon
                    id="Fill-127"
                    points="364.37611 119.08516 368.10391 119.44806 367.75051 122.40256 364.13481 122.03206"
                  />
                  <polygon
                    id="Fill-129"
                    points="371.84254 119.99431 375.54184 120.76951 374.82934 123.69361 371.31244 122.93931"
                  />
                  <polygon
                    id="Fill-131"
                    points="379.19022 121.7691 382.77552 122.9965 381.68682 125.8427 378.29342 124.6609"
                  />
                  <polygon
                    id="Fill-133"
                    points="386.27437 124.4614 389.67157 126.1733 388.17627 128.8675 384.98997 127.2411"
                  />
                  <polygon
                    id="Fill-135"
                    points="392.93748 128.15101 396.03258 130.41011 394.07558 132.83451 391.21798 130.72931"
                  />
                  <polygon
                    id="Fill-137"
                    points="398.91013 132.9696 401.50553 135.8424 399.04313 137.8089 396.70233 135.1945"
                  />
                  <polygon
                    id="Fill-139"
                    points="403.74544 139.02585 405.54854 142.49525 402.62064 143.75685 401.03604 140.67125"
                  />
                  <path
                    d="M406.84415,146.19531 C407.11965,147.47021 407.44265,148.73751 407.59275,150.03521 L404.39125,150.41901 C404.26775,149.26951 403.97895,148.15421 403.74905,147.02561 L406.84415,146.19531 Z"
                    id="Fill-141"
                  />
                  <polygon
                    id="Fill-143"
                    points="407.80707 153.92622 407.56197 157.78132 404.32627 157.39942 404.56757 153.89392"
                  />
                  <polygon
                    id="Fill-145"
                    points="406.95549 161.55491 406.09479 165.23711 402.94459 164.41441 403.75589 160.91081"
                  />
                  <polygon
                    id="Fill-147"
                    points="405.07962 168.84977 403.99852 172.39707 400.89772 171.44137 401.96172 167.92827"
                  />
                  <polygon
                    id="Fill-149"
                    points="402.9235 175.90979 401.9317 179.41149 398.8081 178.58879 399.8208 174.98829"
                  />
                  <polygon
                    id="Fill-151"
                    points="401.09589 182.91794 400.49739 186.43294 397.30539 186.02634 397.93809 182.26434"
                  />
                  <path
                    d="M400.21638,189.94452 C400.24678,191.10922 400.21258,192.27772 400.33228,193.43672 L397.14408,193.74072 C397.00918,192.45062 397.03578,191.15672 397.00918,189.86282 L400.21638,189.94452 Z"
                    id="Fill-153"
                  />
                  <polygon
                    id="Fill-155"
                    points="400.87511 196.88028 401.84601 200.22428 398.84591 201.30538 397.75531 197.57948"
                  />
                  <polygon
                    id="Fill-157"
                    points="403.22598 203.43756 404.97778 206.48136 402.31588 208.21796 400.38358 204.86826"
                  />
                  <polygon
                    id="Fill-159"
                    points="407.05372 209.33231 409.40022 211.97901 407.13542 214.18301 404.58942 211.32541"
                  />
                  <polygon
                    id="Fill-161"
                    points="411.98384 214.42374 414.75784 216.67524 412.86734 219.19084 409.90904 216.80064"
                  />
                  <polygon
                    id="Fill-163"
                    points="417.69315 218.73579 420.75975 220.61489 419.20175 223.33569 415.97365 221.36539"
                  />
                  <polygon
                    id="Fill-165"
                    points="423.94035 222.32622 427.20645 223.86902 425.94675 226.72282 422.53625 225.12112"
                  />
                  <polygon
                    id="Fill-167"
                    points="430.54589 225.24861 433.95259 226.47601 432.96839 229.42291 429.42869 228.15561"
                  />
                  <polygon
                    id="Fill-169"
                    points="437.41116 227.54742 440.91666 228.46702 440.20036 231.47662 436.56186 230.52852"
                  />
                  <polygon
                    id="Fill-171"
                    points="444.46757 229.23785 448.06427 229.91805 447.52087 232.95045 443.86527 232.26455"
                  />
                  <polygon
                    id="Fill-173"
                    points="451.67978 230.5441 455.30688 231.1445 454.83948 234.1332 451.18008 233.5689"
                  />
                  <polygon
                    id="Fill-175"
                    points="458.94576 231.7278 462.59376 232.313 462.13966 235.22 458.49356 234.6785"
                  />
                  <polygon
                    id="Fill-177"
                    points="466.24689 232.9172 469.90059 233.5651 469.39519 236.3828 465.77379 235.7824"
                  />
                  <polygon
                    id="Fill-179"
                    points="473.55011 234.27361 477.19051 235.06781 476.57681 237.78291 472.99911 237.04381"
                  />
                  <polygon
                    id="Fill-181"
                    points="480.81419 235.96765 484.41469 236.99555 483.63379 239.58335 480.12449 238.62195"
                  />
                  <polygon
                    id="Fill-183"
                    points="487.98004 238.17925 491.47794 239.53015 490.48044 241.95645 487.09654 240.69105"
                  />
                  <polygon
                    id="Fill-185"
                    points="494.91029 241.08131 498.24669 242.84261 496.99839 245.05801 493.78929 243.40881"
                  />
                  <path
                    d="M501.46377,244.82754 C502.49167,245.55714 503.53667,246.26014 504.52847,247.03914 L503.02557,248.98854 C502.07367,248.25894 501.07047,247.60154 500.08437,246.91754 L501.46377,244.82754 Z"
                    id="Fill-187"
                  />
                  <polygon
                    id="Fill-189"
                    points="507.4235 249.4681 510.1329 252.092 508.4267 253.7564 505.8085 251.275"
                  />
                  <polygon
                    id="Fill-191"
                    points="512.65781 254.88595 515.00051 257.82335 513.16701 259.21605 510.87941 256.40975"
                  />
                  <polygon
                    id="Fill-193"
                    points="517.17031 260.88463 519.17671 264.04623 517.27861 265.19953 515.29691 262.15193"
                  />
                  <polygon
                    id="Fill-195"
                    points="521.02978 267.29162 522.74738 270.60522 520.83218 271.56472 519.11838 268.34422"
                  />
                  <polygon
                    id="Fill-197"
                    points="524.33806 273.97696 525.82006 277.39886 523.92006 278.20066 522.42856 274.85096"
                  />
                  <polygon
                    id="Fill-199"
                    points="527.20098 280.85135 528.49298 284.33025 526.63288 285.00855 525.31808 281.58665"
                  />
                  <polygon
                    id="Fill-201"
                    points="529.71335 287.83917 530.86855 291.36177 529.06355 291.95077 527.87795 288.46997"
                  />
                  <polygon
                    id="Fill-203"
                    points="531.98803 294.89539 533.08053 298.42179 531.34393 298.96899 530.21343 295.45969"
                  />
                  <polygon
                    id="Fill-205"
                    points="534.16638 301.9499 535.26078 305.4706 533.60208 305.9988 532.46588 302.4838"
                  />
                  <polygon
                    id="Fill-207"
                    points="536.37817 308.97667 537.53527 312.46887 535.96587 313.01227 534.76317 309.51057"
                  />
                  <polygon
                    id="Fill-209"
                    points="538.74937 315.93827 540.03187 319.37917 538.55937 319.95487 537.22747 316.49497"
                  />
                  <polygon
                    id="Fill-211"
                    points="541.40082 322.78682 542.86952 326.14602 541.51102 326.77872 539.98532 323.38912"
                  />
                  <polygon
                    id="Fill-213"
                    points="544.45127 329.44423 546.15937 332.67613 544.92437 333.37343 543.14977 330.10923"
                  />
                  <path
                    d="M548.00446,335.8326 C548.63906,336.8776 549.32116,337.8808 549.99376,338.8954 L548.93736,339.644 C548.22866,338.6218 547.50856,337.6072 546.84546,336.5603 L548.00446,335.8326 Z"
                    id="Fill-215"
                  />
                  <polygon
                    id="Fill-217"
                    points="552.16451 341.83318 554.51101 344.63378 553.66741 345.40328 551.21451 342.59508"
                  />
                  <polygon
                    id="Fill-219"
                    points="557.02946 347.28276 559.71226 349.76986 559.06816 350.52606 556.28656 348.05036"
                  />
                  <polygon
                    id="Fill-221"
                    points="562.55504 352.07171 565.54944 354.17121 565.09914 354.88371 562.00784 352.81271"
                  />
                  <polygon
                    id="Fill-223"
                    points="568.6966 356.04233 571.9817 357.65353 571.71 358.29193 568.3375 356.72063"
                  />
                  <polygon
                    id="Fill-225"
                    points="575.39676 358.97403 578.91936 359.96773 578.80536 360.49973 575.20486 359.56303"
                  />
                  <polygon
                    id="Fill-227"
                    points="582.52917 360.60309 586.18667 360.84819 586.18667 361.24149 582.47787 361.06859"
                  />
                  <polygon
                    id="Fill-230"
                    points="589.84911 360.68289 590.51411 360.60689 590.55401 360.91279 589.88521 361.00019"
                  />
                  <polygon
                    id="Fill-1"
                    points="0 19.44175 2.7816 21.86995 3.0324 21.57165 0.1995 19.20995"
                  />
                  <polygon
                    id="Fill-2"
                    points="5.89228 23.90143 8.78218 26.19283 8.44018 26.62033 5.59588 24.26243"
                  />
                  <polygon
                    id="Fill-3"
                    points="11.69792 28.44832 14.64292 30.66752 14.21542 31.22992 11.31222 28.94232"
                  />
                  <polygon
                    id="Fill-4"
                    points="17.61319 32.84853 20.61139 34.99363 20.10409 35.69663 17.14579 33.48123"
                  />
                  <polygon
                    id="Fill-5"
                    points="23.6341 37.10035 26.6817 39.16945 26.1022 40.01685 23.0888 37.87365"
                  />
                  <polygon
                    id="Fill-6"
                    points="29.75533 41.20188 32.85233 43.19688 32.20633 44.19058 29.14163 42.12148"
                  />
                  <polygon
                    id="Fill-7"
                    points="35.97308 45.15217 39.11568 47.06927 38.41078 48.21497 35.29668 46.22187"
                  />
                  <polygon
                    id="Fill-8"
                    points="42.28355 48.94932 45.46795 50.79612 44.71745 52.08242 41.55015 50.17102"
                  />
                  <polygon
                    id="Fill-9"
                    points="48.67002 52.61214 51.89432 54.38864 51.13052 55.77564 47.91382 53.94784"
                  />
                  <polygon
                    id="Fill-10"
                    points="55.14009 56.12638 58.40619 57.82498 57.63099 59.31268 54.37059 57.56278"
                  />
                  <polygon
                    id="Fill-11"
                    points="61.68977 59.48292 64.99577 61.10172 64.21487 62.69202 60.91267 61.02192"
                  />
                  <polygon
                    id="Fill-12"
                    points="68.31944 62.67986 71.66344 64.21886 70.88254 65.91366 67.53854 64.32336"
                  />
                  <polygon
                    id="Fill-13"
                    points="75.02321 65.7172 78.39951 67.1745 77.62241 68.9738 74.24421 67.4633"
                  />
                  <polygon
                    id="Fill-14"
                    points="81.79576 68.59133 85.21006 69.96693 84.44056 71.87263 81.02246 70.44383"
                  />
                  <polygon
                    id="Fill-15"
                    points="88.6369 71.3013 92.0797 72.5933 91.3235 74.6073 87.875 73.2602"
                  />
                  <polygon
                    id="Fill-16"
                    points="95.53922 73.84502 99.01242 75.05532 98.27142 77.17382 94.79062 75.91032"
                  />
                  <polygon
                    id="Fill-17"
                    points="102.49911 76.22192 105.99511 77.35812 105.28641 79.56212 101.77141 78.39552"
                  />
                  <polygon
                    id="Fill-18"
                    points="109.50536 78.45404 113.02796 79.50664 112.36106 81.76384 108.81756 80.68464"
                  />
                  <polygon
                    id="Fill-19"
                    points="116.56158 80.51649 120.10698 81.48359 119.48758 83.79399 115.91748 82.80219"
                  />
                  <polygon
                    id="Fill-20"
                    points="123.66625 82.40813 127.23635 83.28783 126.66065 85.65143 123.06965 84.74323"
                  />
                  <polygon
                    id="Fill-21"
                    points="130.81348 84.12535 134.40258 84.91765 133.87818 87.33065 130.26438 86.51365"
                  />
                  <polygon
                    id="Fill-22"
                    points="138.00156 85.6653 141.60586 86.3702 141.13466 88.8326 137.50186 88.1049"
                  />
                  <polygon
                    id="Fill-23"
                    points="145.22308 87.02912 148.84448 87.64472 148.42838 90.15652 144.77848 89.51812"
                  />
                  <polygon
                    id="Fill-24"
                    points="152.47424 88.21377 156.11084 88.73817 155.75174 91.29937 152.08664 90.75027"
                  />
                  <polygon
                    id="Fill-25"
                    points="159.75504 89.21678 163.40304 89.64998 163.10284 92.25678 159.42444 91.80078"
                  />
                  <polygon
                    id="Fill-26"
                    points="167.05636 90.03777 170.71386 90.37977 170.47636 93.03217 166.78656 92.66737"
                  />
                  <polygon
                    id="Fill-27"
                    points="174.37611 90.67598 178.04311 90.92678 177.86831 93.62288 174.17091 93.35118"
                  />
                  <polygon
                    id="Fill-28"
                    points="181.70897 91.13255 185.37977 91.29215 185.27147 94.03005 181.56837 93.84955"
                  />
                  <polygon
                    id="Fill-29"
                    points="189.05285 91.4071 192.72555 91.4869 192.68185 94.2457 188.97495 94.1659"
                  />
                  <polygon
                    id="Fill-30"
                    points="196.39692 91.52965 200.07152 91.52775 200.09622 94.25425 196.38932 94.27325"
                  />
                  <polygon
                    id="Fill-31"
                    points="203.7446 91.47949 207.4192 91.38829 207.5066 94.08249 203.8016 94.19079"
                  />
                  <polygon
                    id="Fill-32"
                    points="211.08848 91.25035 214.75928 91.06795 214.91128 93.72985 211.21008 93.92935"
                  />
                  <polygon
                    id="Fill-33"
                    points="218.42495 90.84299 222.09195 90.57319 222.30475 93.19899 218.61115 93.48589"
                  />
                  <polygon
                    id="Fill-34"
                    points="225.7504 90.25855 229.4098 89.89945 229.6834 92.48725 225.9974 92.86535"
                  />
                  <polygon
                    id="Fill-35"
                    points="233.06103 89.49684 236.70903 89.05034 237.04343 91.60014 233.36503 92.06754"
                  />
                  <polygon
                    id="Fill-36"
                    points="240.35114 88.55995 243.98774 88.02605 244.37724 90.53595 240.71214 91.09075"
                  />
                  <polygon
                    id="Fill-37"
                    points="247.61902 87.45396 251.24422 86.84976 251.68122 89.27226 248.03512 89.93156"
                  />
                  <polygon
                    id="Fill-38"
                    points="254.86277 86.19977 258.47277 85.50817 258.94777 87.82237 255.31877 88.56907"
                  />
                  <polygon
                    id="Fill-39"
                    points="262.07669 84.77097 265.67149 83.99197 266.17879 86.19977 262.56879 87.03387"
                  />
                  <polygon
                    id="Fill-40"
                    points="269.25565 83.16984 272.82955 82.30344 273.36535 84.40294 269.77815 85.32444"
                  />
                  <polygon
                    id="Fill-41"
                    points="276.39357 81.39505 279.94467 80.44315 280.50707 82.43435 276.94267 83.44135"
                  />
                  <polygon
                    id="Fill-42"
                    points="283.48703 79.44774 287.01533 78.41034 287.59673 80.29514 284.05893 81.38764"
                  />
                  <polygon
                    id="Fill-43"
                    points="290.53223 77.32962 294.03583 76.20672 294.63053 77.98322 291.12123 79.16122"
                  />
                  <polygon
                    id="Fill-44"
                    points="297.52556 75.04183 301.00256 73.83533 301.60486 75.49973 298.12406 76.76323"
                  />
                  <polygon
                    id="Fill-45"
                    points="304.46303 72.58437 307.90773 71.29237 308.51573 72.84847 305.06723 74.19557"
                  />
                  <polygon
                    id="Fill-46"
                    points="311.33951 69.95781 314.75191 68.58031 315.35801 70.02811 311.94371 71.45881"
                  />
                  <polygon
                    id="Fill-47"
                    points="318.14721 67.16272 321.52541 65.70162 322.12771 67.04112 318.74951 68.55542"
                  />
                  <polygon
                    id="Fill-48"
                    points="324.88803 64.19948 328.23013 62.65668 328.81723 63.88598 325.48083 65.48388"
                  />
                  <polygon
                    id="Fill-49"
                    points="331.55285 61.06923 334.85505 59.44283 335.42885 60.56763 332.13425 62.24913"
                  />
                  <polygon
                    id="Fill-50"
                    points="338.10652 57.74233 341.28332 55.91453 341.90652 56.94243 338.69742 58.81013"
                  />
                  <polygon
                    id="Fill-51"
                    points="344.38165 53.96095 347.38745 51.86715 348.07715 52.80385 345.03715 54.94515"
                  />
                  <polygon
                    id="Fill-52"
                    points="350.2783 49.62477 353.0257 47.21367 353.7971 48.03067 351.006 50.50447"
                  />
                  <polygon
                    id="Fill-53"
                    points="355.59431 44.62055 357.93321 41.82755 358.79581 42.48115 356.40941 45.36155"
                  />
                  <polygon
                    id="Fill-54"
                    points="359.97685 38.82498 361.64505 35.61398 362.59885 36.03008 360.88695 39.37028"
                  />
                  <polygon
                    id="Fill-55"
                    points="362.85174 32.20861 363.83594 32.47271 364.50854 28.76201 363.51104 28.66321"
                  />
                </g>
                <path
                  d="M0,24.39782 C41.415807,60.3466654 85.4064684,83.5649158 131.971984,94.0525712 C201.820258,109.784054 245.43997,102.359609 290.256436,89.6016866 C336.464289,75.8939346 383.29342,53.40626 364.97685,24.39782 C345.979501,0.52339693 309.103288,10.5671106 291.211973,35.5868767 C267.418353,68.6906557 285.59162,97.69469 295.54857,109.68578 C305.50552,121.67687 328.73207,132.33169 348.93344,129.57859 C369.337346,128.998141 392.444709,130.51247 407.9235,150.028495 C420.97365,175.04882 390.746348,192.07605 410.6709,220.327907 C430.595452,248.579764 474.90059,235.822639 507.30642,256.71975 C538.012328,284.894488 532.945469,306.177117 542.53527,324.510499 C552.055231,348.330068 556.848258,354.536363 567.641588,362.989843 C574.837141,368.625496 585.956612,371.081989 601,370.35932"
                  id="p7-guide-path"
                />
                <g
                  id="p7-arrow"
                  transform="translate(308.895415, 119.389676) rotate(266.000000) translate(-308.895415, -119.389676) translate(300.406515, 110.250165)"
                >
                  <path
                    d="M8.46294918,16.5886304 C7.30374918,16.5886304 6.26914918,15.9880304 5.69234918,14.9828304 L0.81754918,6.4680304 C0.24634918,5.4684304 0.25054918,4.2784304 0.82734918,3.2830304 C1.40414918,2.2862304 2.43454918,1.6912304 3.58254918,1.6912304 L13.5211492,2.0944304 C14.6621492,2.1406304 15.6645492,2.7692304 16.2035492,3.7758304 C16.7425492,4.7810304 16.7117492,5.9654304 16.1195492,6.9398304 L11.1901492,15.0528304 C10.6063492,16.0146304 9.58714918,16.5886304 8.46294918,16.5886304"
                    id="Fill-411"
                    fill="#2B3632"
                    transform="translate(8.489387, 9.139930) rotate(-90.000000) translate(-8.489387, -9.139930) "
                  />
                  <path
                    d="M3.58212918,0.650610403 L3.58212918,0.650610403 C2.05892918,0.650610403 0.69252918,1.4388104 -0.0732708202,2.7604104 C-0.83907082,4.0820104 -0.84327082,5.6612104 -0.0844708202,6.9856104 L4.78892918,15.4990104 C5.55332918,16.8332104 6.92672918,17.6284104 8.46252918,17.6284104 C9.95352918,17.6284104 11.3059292,16.8682104 12.0787292,15.5942104 L17.0081292,7.4798104 C17.7935292,6.1862104 17.8355292,4.6168104 17.1201292,3.2826104 C16.4047292,1.9498104 15.0761292,1.1168104 13.5627292,1.0538104 L3.75992918,0.653410403 C3.70112918,0.652010403 3.64092918,0.650610403 3.58212918,0.650610403 M3.58212918,2.7324104 C3.61292918,2.7324104 3.64512918,2.7324104 3.67452918,2.7338104 L13.4773292,3.1342104 C15.1139292,3.2000104 16.0799292,4.9990104 15.2287292,6.3990104 L10.3007292,14.5134104 C9.88072918,15.2050104 9.17092918,15.5480104 8.46252918,15.5480104 C7.73592918,15.5480104 7.00792918,15.1854104 6.59632918,14.4658104 L1.72152918,5.9510104 C0.89692918,4.5104104 1.94552918,2.7324104 3.58212918,2.7324104"
                    id="Fill-413"
                    fill="#FEFCE4"
                    transform="translate(8.488900, 9.139510) rotate(-90.000000) translate(-8.488900, -9.139510) "
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
        <img className="stars-top" src="/images/stars-top.svg" alt="stars" />
        <img
          className="stars-bottom"
          src="/images/stars-bottom.svg"
          alt="stars"
        />

        {/* <img className="mainPage-line-mobile" src="/images/teal-path/teal-path-3.svg" /> */}
        {/* <div className="mainPage-line-mobile"> */}
        <svg
          className="mainPage-line-mobile"
          width="468px"
          height="259px"
          viewBox="0 0 468 259"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="Graphic/Path/3/Teal-Copy"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="p3-dotted"
              transform="translate(5.000000, 9.000000)"
              fill="#7EC8BA"
            >
              <path
                d="M376.74238,33.60042 C377.05598,32.40342 377.27298,31.18262 377.38778,29.95482 L378.97818,30.11582 C378.83678,31.42902 378.58478,32.73102 378.23478,34.00082 L376.74238,33.60042 Z"
                id="Fill-55"
              />
              <path
                d="M377.42474,26.25784 C377.34354,25.64744 377.33514,25.02444 377.19654,24.42384 L376.85494,22.61224 L378.51394,22.21884 L378.85694,24.17884 C378.99274,24.82844 378.99834,25.49344 379.07394,26.15004 L377.42474,26.25784 Z"
                id="Fill-57"
              />
              <path
                d="M375.67054,19.13002 C375.17494,18.00722 374.58274,16.92922 373.90234,15.90582 L375.41714,14.91602 C376.13674,16.03182 376.76394,17.20782 377.28474,18.43142 L375.67054,19.13002 Z"
                id="Fill-59"
              />
              <polygon
                id="Fill-61"
                points="371.62636 13.00502 368.93556 10.46262 370.15916 8.99682 373.00396 11.75762"
              />
              <polygon
                id="Fill-63"
                points="365.93074 8.28954 362.68274 6.46954 363.58154 4.67194 366.99334 6.64174"
              />
              <polygon
                id="Fill-65"
                points="359.2547 4.99058 355.6973 3.83698 356.2713 1.80698 359.9911 3.06558"
              />
              <polygon
                id="Fill-67"
                points="352.04974 3.00062 348.34534 2.47562 348.57914 0.27622 352.45714 0.87822"
              />
              <polygon
                id="Fill-69"
                points="344.61084 2.261 340.87844 2.3674 340.72724 0.0602 344.65984 0"
              />
              <polygon
                id="Fill-71"
                points="337.1788 2.80784 333.5038 3.55684 332.9564 1.20624 336.805 0.47404"
              />
              <polygon
                id="Fill-73"
                points="329.89026 4.55518 326.34966 5.79418 325.45646 3.44498 329.16926 2.19898"
              />
              <polygon
                id="Fill-75"
                points="322.89712 7.26292 319.54412 8.94992 318.31352 6.64272 321.83312 4.92912"
              />
              <polygon
                id="Fill-77"
                points="316.30998 10.8374 313.19218 12.922 311.63118 10.7002 314.91138 8.568"
              />
              <polygon
                id="Fill-79"
                points="310.20136 15.19042 307.34676 17.63342 305.46796 15.53622 308.48076 13.02602"
              />
              <polygon
                id="Fill-81"
                points="304.64518 20.23546 302.08878 22.98086 299.92158 21.06286 302.61098 18.21526"
              />
              <polygon
                id="Fill-83"
                points="299.69464 25.86682 297.47284 28.88662 295.05924 27.20522 297.40144 24.06222"
              />
              <polygon
                id="Fill-85"
                points="295.43164 32.02808 293.57804 35.28868 290.94184 33.88168 292.90324 30.47968"
              />
              <polygon
                id="Fill-87"
                points="291.92492 38.64938 290.48432 42.10038 287.65352 41.00978 289.18792 37.39498"
              />
              <polygon
                id="Fill-89"
                points="289.26436 45.62754 288.27176 49.22694 285.27996 48.49754 286.34816 44.71194"
              />
              <polygon
                id="Fill-91"
                points="287.52122 52.87492 287.01862 56.56252 283.90782 56.23632 284.46362 52.34152"
              />
              <polygon
                id="Fill-93"
                points="286.76914 60.28232 286.78034 64.01332 283.60934 64.12252 283.62054 60.17312"
              />
              <polygon
                id="Fill-95"
                points="287.04536 67.72668 287.55776 71.41988 284.38536 71.95608 283.86596 68.05148"
              />
              <polygon
                id="Fill-97"
                points="288.31138 75.07262 289.29418 78.67202 286.16938 79.62122 285.15578 75.81882"
              />
              <polygon
                id="Fill-99"
                points="290.49748 82.20044 291.91428 85.65424 288.88468 86.99264 287.41468 83.34704"
              />
              <polygon
                id="Fill-101"
                points="293.53548 89.02208 295.35548 92.29248 292.46308 94.00048 290.57028 90.54808"
              />
              <polygon
                id="Fill-103"
                points="297.35804 95.4464 299.53364 98.483 296.83304 100.534 294.54964 97.3322"
              />
              <polygon
                id="Fill-105"
                points="301.87388 101.39514 304.37848 104.16574 301.94808 106.50234 299.30348 103.59174"
              />
              <polygon
                id="Fill-107"
                points="307.04184 106.78458 309.85724 109.24298 307.72924 111.83718 304.75704 109.25418"
              />
              <polygon
                id="Fill-109"
                points="312.81278 111.52526 315.89698 113.61686 314.11618 116.43786 310.85278 114.23706"
              />
              <polygon
                id="Fill-111"
                points="319.10312 115.50854 322.42672 117.18994 321.03092 120.20134 317.50852 118.42894"
              />
              <polygon
                id="Fill-113"
                points="325.84622 118.64552 329.35882 119.86632 328.38582 123.02052 324.65762 121.73392"
              />
              <polygon
                id="Fill-115"
                points="332.9501 120.84534 336.6139 121.61254 336.0315 124.84374 332.1885 124.04854"
              />
              <polygon
                id="Fill-117"
                points="340.32474 122.1934 344.06974 122.612 343.77294 125.8642 339.89634 125.44"
              />
              <polygon
                id="Fill-119"
                points="347.84008 122.89816 351.63128 123.07876 351.51648 126.32536 347.64688 126.14896"
              />
              <polygon
                id="Fill-121"
                points="355.43214 123.1853 359.25274 123.2441 359.21914 126.4739 355.36914 126.4235"
              />
              <polygon
                id="Fill-123"
                points="363.09112 123.28582 366.93552 123.33762 366.88372 126.54922 363.06032 126.50582"
              />
              <polygon
                id="Fill-125"
                points="370.79112 123.42932 374.66212 123.59172 374.49552 126.77952 370.69452 126.63112"
              />
              <polygon
                id="Fill-127"
                points="378.5348 123.86892 382.4058 124.27492 382.039 127.36192 378.2786 127.00772"
              />
              <polygon
                id="Fill-129"
                points="386.28548 124.87034 390.12148 125.70194 389.40748 128.64054 385.74368 127.88734"
              />
              <polygon
                id="Fill-131"
                points="393.90204 126.76594 397.60784 128.06654 396.56064 130.81474 393.01864 129.61634"
              />
              <polygon
                id="Fill-133"
                points="401.2274 129.61046 404.733 131.40946 403.3484 133.90846 400.0122 132.24386"
              />
              <polygon
                id="Fill-135"
                points="408.09888 133.47824 411.28248 135.83584 409.54088 137.99604 406.53788 135.82324"
              />
              <polygon
                id="Fill-137"
                points="414.2348 138.4971 416.8906 141.4749 414.7892 143.1577 412.3112 140.4389"
              />
              <polygon
                id="Fill-139"
                points="419.17442 144.76504 421.00422 148.33924 418.60882 149.37524 416.91062 146.14264"
              />
              <path
                d="M422.30944,152.14164 L422.72804,154.10444 C422.88624,154.75544 422.95624,155.42044 423.05144,156.07984 L420.54264,156.38364 C420.44744,155.78304 420.38024,155.17684 420.22764,154.58884 L419.83004,152.81084 L422.30944,152.14164 Z"
                id="Fill-141"
              />
              <polygon
                id="Fill-143"
                points="423.2459 160.07068 422.9687 164.02568 420.5411 163.74148 420.7623 160.04688"
              />
              <polygon
                id="Fill-145"
                points="422.32442 167.90326 421.41022 171.69586 419.14642 171.10646 419.96822 167.43146"
              />
              <polygon
                id="Fill-147"
                points="420.3339 175.41454 419.1831 179.08534 417.0789 178.43714 418.1569 174.77194"
              />
              <polygon
                id="Fill-149"
                points="418.03692 182.73318 416.96872 186.38158 414.97092 185.85378 415.99012 182.12418"
              />
              <polygon
                id="Fill-151"
                points="416.06138 190.05098 415.39638 193.74978 413.48118 193.50338 414.10418 189.64358"
              />
              <path
                d="M415.06612,197.46944 L415.07592,199.33004 C415.06192,199.95164 415.11232,200.57044 415.15292,201.18924 L413.36512,201.35724 C413.30912,200.70344 413.24612,200.04824 413.24752,199.39024 L413.20412,197.41904 L415.06612,197.46944 Z"
                id="Fill-153"
              />
              <polygon
                id="Fill-155"
                points="415.69906 204.86928 416.70426 208.45888 415.14186 209.01888 414.01206 205.24588"
              />
              <polygon
                id="Fill-157"
                points="418.1464 211.90414 419.9846 215.16754 418.7078 215.99914 416.7226 212.61814"
              />
              <polygon
                id="Fill-159"
                points="422.17 218.22402 424.6382 221.07302 423.6596 222.02222 421.036 219.13962"
              />
              <polygon
                id="Fill-161"
                points="427.34622 223.70292 430.25682 226.12492 429.55542 227.05732 426.51322 224.65632"
              />
              <polygon
                id="Fill-163"
                points="433.33724 228.34602 436.55444 230.37462 436.07144 231.21602 432.75064 229.24062"
              />
              <polygon
                id="Fill-165"
                points="439.89148 232.22192 443.32008 233.89212 443.00788 234.60052 439.50088 233.00172"
              />
              <polygon
                id="Fill-167"
                points="446.82988 235.39306 450.40828 236.73146 450.22488 237.27886 446.58628 236.02446"
              />
              <polygon
                id="Fill-169"
                points="454.04464 237.90802 457.73364 238.92302 457.64404 239.29402 453.91304 238.36862"
              />
              <polygon
                id="Fill-1"
                points="0 20.3868 2.877 22.9264 3.1654 22.5848 0.2072 20.146"
              />
              <polygon
                id="Fill-2"
                points="6.15118 24.98566 9.16398 27.34886 8.72858 27.89626 5.78578 25.42946"
              />
              <polygon
                id="Fill-3"
                points="12.19974 29.68616 15.26154 31.98496 14.72114 32.69616 11.70834 30.31476"
              />
              <polygon
                id="Fill-4"
                points="18.35064 34.24498 21.46844 36.46678 20.83004 37.34738 17.76124 35.04018"
              />
              <polygon
                id="Fill-5"
                points="24.61102 38.65008 27.78202 40.79348 27.05682 41.85048 23.93062 39.61748"
              />
              <polygon
                id="Fill-6"
                points="30.97668 42.89866 34.19668 44.96366 33.39308 46.19986 30.21088 44.04386"
              />
              <polygon
                id="Fill-7"
                points="37.43656 46.99674 40.69576 48.99734 39.84876 50.37214 36.60496 48.30854"
              />
              <polygon
                id="Fill-8"
                points="43.97988 50.95748 47.28528 52.87828 46.40888 54.38048 43.11748 52.39528"
              />
              <polygon
                id="Fill-9"
                points="50.6149 54.7582 53.9679 56.5978 53.0677 58.2288 49.7259 56.3248"
              />
              <polygon
                id="Fill-10"
                points="57.34008 58.39708 60.73508 60.15408 59.81808 61.91668 56.43148 60.09388"
              />
              <polygon
                id="Fill-11"
                points="64.1501 61.87104 67.5843 63.54684 66.6561 65.44244 63.2261 63.70084"
              />
              <polygon
                id="Fill-12"
                points="71.03936 65.18036 74.51276 66.77216 73.57756 68.80216 70.10696 67.14316"
              />
              <polygon
                id="Fill-13"
                points="78.00646 68.3221 81.51626 69.8299 80.58106 71.9957 77.06986 70.4193"
              />
              <polygon
                id="Fill-14"
                points="85.04062 71.30326 88.57842 72.74246 87.67122 74.99366 84.11522 73.51946"
              />
              <polygon
                id="Fill-15"
                points="92.13372 74.13952 95.70652 75.49332 94.83432 77.81312 91.24332 76.42432"
              />
              <polygon
                id="Fill-16"
                points="99.2936 76.80414 102.8972 78.07114 102.0642 80.45814 98.4424 79.15754"
              />
              <polygon
                id="Fill-17"
                points="106.51508 79.29516 110.14668 80.47396 109.35708 82.92956 105.70308 81.71576"
              />
              <polygon
                id="Fill-18"
                points="113.7927 81.61048 117.4509 82.70108 116.7075 85.22388 113.0255 84.09828"
              />
              <polygon
                id="Fill-19"
                points="121.12352 83.74814 124.80692 84.75054 124.11112 87.33774 120.40252 86.30314"
              />
              <polygon
                id="Fill-20"
                points="128.50222 85.7073 132.20942 86.6187 131.56542 89.2717 127.83162 88.3281"
              />
              <polygon
                id="Fill-21"
                points="135.9274 87.4853 139.6542 88.3057 139.0648 91.0231 135.31 90.1705"
              />
              <polygon
                id="Fill-22"
                points="143.3922 89.08088 147.1386 89.81028 146.6052 92.59068 142.8308 91.83048"
              />
              <polygon
                id="Fill-23"
                points="150.8927 90.4918 154.6559 91.133 154.1855 93.9638 150.3901 93.3044"
              />
              <polygon
                id="Fill-24"
                points="158.42176 91.7455 162.19476 92.3097 161.80136 95.1111 157.98916 94.5623"
              />
              <polygon
                id="Fill-25"
                points="165.97686 92.82756 169.76386 93.29796 169.44606 96.06716 165.61986 95.61356"
              />
              <polygon
                id="Fill-26"
                points="173.55646 93.72104 177.35606 94.09624 177.10966 96.83184 173.27506 96.47344"
              />
              <polygon
                id="Fill-27"
                points="181.15804 94.42454 184.96464 94.70594 184.78964 97.40514 180.94804 97.14334"
              />
              <polygon
                id="Fill-28"
                points="188.77474 94.93918 192.58834 95.12538 192.48054 97.78958 188.63334 97.62158"
              />
              <polygon
                id="Fill-29"
                points="196.40222 95.26524 200.22002 95.36324 200.17802 97.97704 196.32802 97.90984"
              />
              <polygon
                id="Fill-30"
                points="204.03656 95.43212 207.85576 95.45312 207.87676 97.93812 204.02816 97.98152"
              />
              <polygon
                id="Fill-31"
                points="211.6751 95.42792 215.4943 95.35652 215.5713 97.71132 211.7255 97.84852"
              />
              <polygon
                id="Fill-32"
                points="219.31224 95.23864 223.12864 95.07344 223.25604 97.29804 219.41584 97.52764"
              />
              <polygon
                id="Fill-33"
                points="226.94378 94.8633 230.75738 94.6057 230.92818 96.6987 227.09358 97.0221"
              />
              <polygon
                id="Fill-34"
                points="234.56594 94.30344 238.37254 93.95344 238.58114 95.91344 234.75774 96.32924"
              />
              <polygon
                id="Fill-35"
                points="242.17424 93.56046 245.97244 93.12086 246.21044 94.94226 242.39824 95.45186"
              />
              <polygon
                id="Fill-36"
                points="249.7649 92.63548 253.5519 92.10488 253.8151 93.78908 250.0169 94.38828"
              />
              <polygon
                id="Fill-37"
                points="257.33372 91.52808 261.10672 90.90648 261.38672 92.45208 257.60392 93.14368"
              />
              <polygon
                id="Fill-38"
                points="264.8737 90.23882 268.6327 89.52622 268.9211 90.93462 265.1579 91.71582"
              />
              <polygon
                id="Fill-39"
                points="272.38232 88.7677 276.12452 87.9641 276.41712 89.2353 272.67352 90.1075"
              />
              <polygon
                id="Fill-40"
                points="279.85258 87.1052 283.56958 86.1924 283.87618 87.388 280.15078 88.3302"
              />
              <polygon
                id="Fill-41"
                points="287.2751 85.23494 290.9697 84.23254 291.2889 85.36934 287.5887 86.40114"
              />
              <polygon
                id="Fill-42"
                points="294.64974 83.18548 298.31914 82.09488 298.65094 83.17288 294.97594 84.29428"
              />
              <polygon
                id="Fill-43"
                points="301.9737 80.95836 305.6151 79.77816 305.9567 80.79876 302.3111 82.00836"
              />
              <polygon
                id="Fill-44"
                points="309.24026 78.55414 312.85226 77.28574 313.20086 78.24754 309.58606 79.54534"
              />
              <polygon
                id="Fill-45"
                points="316.44816 75.97366 320.02796 74.61706 320.38076 75.52146 316.79956 76.90746"
              />
              <polygon
                id="Fill-46"
                points="323.5862 73.20502 327.1212 71.74062 327.5034 72.65202 323.9488 74.10382"
              />
              <polygon
                id="Fill-47"
                points="330.63954 70.23142 334.13814 68.67882 334.55954 69.61822 331.03994 71.15682"
              />
              <polygon
                id="Fill-48"
                points="337.6177 67.08408 341.0771 65.44608 341.5377 66.40928 338.0573 68.03468"
              />
              <polygon
                id="Fill-49"
                points="344.51508 63.76524 347.93108 62.04184 348.43368 63.02744 344.99668 64.73964"
              />
              <polygon
                id="Fill-50"
                points="351.2964 60.2469 354.5906 58.3289 355.1828 59.3103 351.8424 61.2325"
              />
              <polygon
                id="Fill-51"
                points="357.80136 56.28126 360.91356 54.09166 361.61776 55.04506 358.44676 57.25146"
              />
              <polygon
                id="Fill-52"
                points="363.89766 51.73742 366.72706 49.20762 367.60206 50.13582 364.67886 52.67962"
              />
              <polygon
                id="Fill-53"
                points="369.36508 46.49162 371.76048 43.57542 372.86368 44.41122 370.34928 47.38762"
              />
              <polygon
                id="Fill-54"
                points="373.84536 40.44866 375.53376 37.11806 376.90156 37.71306 375.07876 41.18646"
              />
            </g>
            <path
              d="M0,24.32972 C43.9789733,64.6818267 96.48664,90.2469467 157.523,101.02508 C200.229918,108.566501 251.530863,106.178673 288.90782,95.99264 C331.6591,84.3419864 353.913528,73.3505186 369.718126,61.0679346 C393.753046,42.3891346 384.430377,12.8683742 351.368919,10.3850587 C318.663899,10.1354323 296.57114,35.32182 290.71186,63.7582 C287.732046,78.2198973 293.111446,99.6851262 309.113866,115.921066 C325.116286,132.157006 345.926164,134.355544 362.31094,134.10442 C395.651498,133.59342 405.477741,136.739158 417.499943,148.168333 C441.55444,171.03628 410.63088,193.760502 422.00795,219.076781 C426.592322,232.693317 441.923005,243.181966 468,250.542727"
              id="mobile-p3-guide-path"
            />
            <g
              id="mobile-p3-arrow"
              transform="translate(318.139510, 123.488900) rotate(217.000000) translate(-318.139510, -123.488900) translate(309.650610, 114.349390)"
            >
              <path
                d="M8.46294918,16.5886304 C7.30374918,16.5886304 6.26914918,15.9880304 5.69234918,14.9828304 L0.81754918,6.4680304 C0.24634918,5.4684304 0.25054918,4.2784304 0.82734918,3.2830304 C1.40414918,2.2862304 2.43454918,1.6912304 3.58254918,1.6912304 L13.5211492,2.0944304 C14.6621492,2.1406304 15.6645492,2.7692304 16.2035492,3.7758304 C16.7425492,4.7810304 16.7117492,5.9654304 16.1195492,6.9398304 L11.1901492,15.0528304 C10.6063492,16.0146304 9.58714918,16.5886304 8.46294918,16.5886304"
                id="Fill-411"
                fill="#2B3632"
                transform="translate(8.489387, 9.139930) rotate(-90.000000) translate(-8.489387, -9.139930) "
              />
              <path
                d="M3.58212918,0.650610403 L3.58212918,0.650610403 C2.05892918,0.650610403 0.69252918,1.4388104 -0.0732708202,2.7604104 C-0.83907082,4.0820104 -0.84327082,5.6612104 -0.0844708202,6.9856104 L4.78892918,15.4990104 C5.55332918,16.8332104 6.92672918,17.6284104 8.46252918,17.6284104 C9.95352918,17.6284104 11.3059292,16.8682104 12.0787292,15.5942104 L17.0081292,7.4798104 C17.7935292,6.1862104 17.8355292,4.6168104 17.1201292,3.2826104 C16.4047292,1.9498104 15.0761292,1.1168104 13.5627292,1.0538104 L3.75992918,0.653410403 C3.70112918,0.652010403 3.64092918,0.650610403 3.58212918,0.650610403 M3.58212918,2.7324104 C3.61292918,2.7324104 3.64512918,2.7324104 3.67452918,2.7338104 L13.4773292,3.1342104 C15.1139292,3.2000104 16.0799292,4.9990104 15.2287292,6.3990104 L10.3007292,14.5134104 C9.88072918,15.2050104 9.17092918,15.5480104 8.46252918,15.5480104 C7.73592918,15.5480104 7.00792918,15.1854104 6.59632918,14.4658104 L1.72152918,5.9510104 C0.89692918,4.5104104 1.94552918,2.7324104 3.58212918,2.7324104"
                id="Fill-413"
                fill="#FEFCE4"
                transform="translate(8.488900, 9.139510) rotate(-90.000000) translate(-8.488900, -9.139510) "
              />
            </g>
          </g>
        </svg>
        {/* </div> */}

        <div className="mainPage-container">
          <FeaturedHighlightPanel
            toggle={openContentPanel}
            data={props.data[yearInt].node.acf}
          />
          <div className="mainPage-container-inner">
            <YearNav
              data={props.data}
              controlledSwiper={controlledSwiper}
              setYearSwiper={setYearSwiper}
              childCallback={childCallback}
            />

            <div className="mainPage-featured">
              <FeaturedImageSwiper
                data={props.data}
                setControlledSwiper={setControlledSwiper}
                yearSwiper={yearSwiper}
                openFeaturedPanel={openFeaturedPanel}
              />

              <div
                className="mainPage-featured-image fade-in-bottom"
                id="desktopImage"
              >
                <div className="mainPage-featured-image-image">
                  <div>
                    {props?.data[yearInt]?.node?.acf?.featuredImage
                      ?.sourceUrl ? (
                      <img
                        src={extractImageSize(
                          props.data[yearInt].node.acf.featuredImage
                            .mediaDetails.sizes,
                          'name',
                          'cms_thumb',
                          props?.data[yearInt]?.node?.acf?.featuredImage
                            ?.sourceUrl
                        )}
                        data-srcset={extractImageSize(
                          props.data[yearInt].node.acf.featuredImage
                            .mediaDetails.sizes,
                          'name',
                          'large',
                          props?.data[yearInt]?.node?.acf?.featuredImage
                            ?.sourceUrl
                        )}
                        data-sizes="auto"
                        className="lazyload"
                        alt=""
                      />
                    ) : (
                      <img src="/images/placeholder-large.gif" alt="" />
                    )}
                  </div>
                </div>

                {/* {props?.data[yearInt]?.node?.acf?.featuredVideo ? (
                    <iframe
                      width="1000"
                      height="660"
                      data-src={getVideoEmbed(
                        props.data[yearInt].node.acf.featuredVideo
                      )}
                      frameBorder="0"
                      title="video"
                      className="lazyload"
                    />
                  ) : null} */}
                <div className="mainPage-featured-image-video">
                  {props?.data[yearInt]?.node?.acf?.featuredVideo ? (
                    <video
                      id="featured-video"
                      className="lazyload"
                      autoPlay
                      muted
                      loop
                    >
                      <source
                        src={props.data[yearInt].node.acf.featuredVideo}
                        type="video/mp4"
                      />
                    </video>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {contentPanelOpen ? (
        <HighlightContentPanel
          startIndex={highlightContentInt}
          show={contentPanelOpen}
          toggle={contentPanelToggle}
          highlightData={props.data[yearInt].node.acf.highlights}
        />
      ) : null}

      {contentPanelOpen ? <DarkOverlay toggle={contentPanelToggle} /> : null}
    </div>
  );
};

export default SPA;
