import React from 'react';
import 'lazysizes/plugins/attrchange/ls.attrchange';
import 'lazysizes/plugins/respimg/ls.respimg';
import 'lazysizes';

const FeaturedHighlightPanel = props => {
  const isFirstRender = React.useRef(true);
  const isMounted = React.useRef(false);
  const featuredHighlightPanelRef = React.useRef();
  const featuredHighlightPanelImgRef = React.useRef();
  const featuredImageMobileRef = React.useRef();
  const featuredContentRef = React.useRef();
  const mainPageRef = React.useRef();

  // On Component Mount
  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      isMounted.current = true;
      featuredHighlightPanelRef.current = document.getElementById(
        'featuredHighlightPanel'
      );
      featuredImageMobileRef.current = document.getElementById(
        'featuredImageMobile'
      );
      featuredHighlightPanelImgRef.current =
        document.getElementById('featured-panel-img');
      featuredContentRef.current = document.getElementById('featured-content');
      mainPageRef.current = document.getElementById('years');
    }
    return () => {
      isMounted.current = false;
    };
  }, []);

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
    <div
      className="featuredHighlightPanel-container"
      id="featuredHighlightPanel"
    >
      <div className="featuredPanel-container slide-in-left" id="leftPanel">
        <div className="featuredPanel-highlight-image-container">
          <div
            className="featuredPanel-highlight-image"
            id="featured-panel-img"
          >
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                featuredHighlightPanelRef.current.classList.remove(
                  'featured-highlight-expanded'
                );
                featuredImageMobileRef.current.classList.remove(
                  'featured-highlight-expanded'
                );
                featuredHighlightPanelImgRef.current.classList.remove(
                  'featured-highlight-expanded'
                );
                mainPageRef.current.classList.remove('mobile-expanded-view');
                featuredContentRef.current.classList.remove(
                  'featured-highlight-expanded'
                );
              }}
              title=""
            >
              {props?.data?.featuredImage?.sourceUrl ? (
                <img
                  src={props.data.featuredImage.sourceUrl}
                  // srcSet="/images/placeholder-medium.gif"
                  // data-srcset={props.data.featuredImage.sourceUrl}
                  // data-sizes="auto"
                  // className="featuredPanel-highlight-image-image lazyload"
                  className="featuredPanel-highlight-image-image"
                  alt=""
                />
              ) : (
                <img
                  src="/images/placeholder-medium.gif"
                  className="featuredPanel-highlight-image-image"
                  alt=""
                />
              )}
            </a>
          </div>
        </div>
        <div className="featuredPanel-content-background" id="featured-content">
          <div className="featuredPanelContent">
            <div>
              <h1>{props.data.featuredTitle}</h1>
              {props?.data?.featuredCopy ? (
                <div
                  className="featuredPanelContent-text"
                  dangerouslySetInnerHTML={{ __html: props.data.featuredCopy }}
                />
              ) : null}
            </div>
            <div className="otherHighlights-container">
              <div className="otherHighlights">
                {props?.data?.highlights ? <h4>OTHER HIGHLIGHTS</h4> : null}
                {props?.data?.highlights ? (
                  <div className="highlightImages">
                    {props.data.highlights.map((node, i) => (
                      <div key={node.title}>
                        <a
                          href="#"
                          onClick={e => {
                            e.preventDefault();
                            props.toggle(i);
                          }}
                          title={node.title}
                        >
                          {node?.image?.mediaDetails?.sizes ? (
                            <img
                              src={extractImageSize(
                                node.image.mediaDetails.sizes,
                                'name',
                                'thumbnail',
                                node.image.sourceUrl
                              )}
                              srcSet="/images/placeholder-thumbnail.gif"
                              data-srcset={extractImageSize(
                                node.image.mediaDetails.sizes,
                                'name',
                                'thumbnail',
                                node.image.sourceUrl
                              )}
                              data-sizes="auto"
                              className="highlightThumbnail lazyload"
                              alt={node.title}
                            />
                          ) : props?.data?.featuredImage?.sourceUrl ? (
                            <img
                              src={props?.data?.featuredImage?.sourceUrl}
                              srcSet="/images/placeholder-thumbnail.gif"
                              data-srcset={
                                props?.data?.featuredImage?.sourceUrl
                              }
                              data-sizes="auto"
                              className="highlightThumbnail lazyload"
                              alt=""
                            />
                          ) : (
                            <img
                              src="/images/placeholder-thumbnail.gif"
                              alt=""
                            />
                          )}
                        </a>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedHighlightPanel;
