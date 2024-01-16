"use client"
import React, { useEffect, useState } from 'react';
import './FivePage.css'
import Slider from './SliderOne'

const FivePage = () => {

  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobileView(window.innerWidth <= 767);
    };

    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);


  return (
    <div className='MainBoxFive'>
      <div className='HightBox'>
        <div className='HightBox'>
          <h1 className='HighText'>High Profile Clients Trust Us </h1>
        </div>
      </div>
      {isMobileView ? (
        <div className='MobileBox'>
          <div className='OneOfBox'>
            <Slider>
              <div className="slide">
                <div className='OneText'>
                  <img className='ImageLogo' src="Image/higt.svg" alt="Image/higt.svg" />
                  Perfectly organized event{" "}
                  <strong
                    style={{
                      color: "rgba(255, 255, 255, 0.43)",
                      fontFamily: "Haffer SQ TRIAL",

                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "normal",
                    }}
                  >
                    at Pune and a huge
                  </strong>{" "}
                  shout out to StarClinch{" "}
                  <strong
                    style={{
                      color: "rgba(255, 255, 255, 0.43)",
                      fontFamily: "Haffer SQ TRIAL",

                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "normal",
                    }}
                  >
                    {" "}
                    for this wonderful opportunity
                  </strong>
                </div>
                <div className='ImageSliderBox'></div>
                <h2 className='AbhiText'>-Abhishek Vyas (Singer)</h2>
              </div>
              <div className="slide">
                <div className='OneText'>
                  <img className='ImageLogo' src="Image/higt.svg" alt="Image/higt.svg" />
                  Perfectly organized event{" "}
                  <strong
                    style={{
                      color: "rgba(255, 255, 255, 0.43)",
                      fontFamily: "Haffer SQ TRIAL",

                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "normal",
                    }}
                  >
                    at delhi and a huge
                  </strong>{" "}
                  shout out to StarClinch{" "}
                  <strong
                    style={{
                      color: "rgba(255, 255, 255, 0.43)",
                      fontFamily: "Haffer SQ TRIAL",

                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "normal",
                    }}
                  >
                    {" "}
                    arrangements perfectly. Very punctual
                  </strong>
                </div>
                <div className='ImageSliderBox'></div>
                <h2 className='AbhiText'>-Shaam Sundar (Magician)</h2>
              </div>
              <div className='ImageSliderBox'></div>
              <h2 className='AbhiText'>-Abhishek Vyas (Singer)</h2>
            </Slider>
          </div>
        </div>
      ) : (
        <div className='OneOfBox'>
          <Slider>
            <div className="slide">
              <div className='OneText'>
                <img className='ImageLogo' src="Image/higt.svg" alt="Image/higt.svg" />
                Perfectly organized event{" "}
                <strong
                  style={{
                    color: "rgba(255, 255, 255, 0.43)",
                    fontFamily: "Haffer SQ TRIAL",

                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal",
                  }}
                >
                  at Pune and a huge
                </strong>{" "}
                shout out to StarClinch{" "}
                <strong
                  style={{
                    color: "rgba(255, 255, 255, 0.43)",
                    fontFamily: "Haffer SQ TRIAL",

                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal",
                  }}
                >
                  {" "}
                  for this wonderful opportunity
                </strong>
              </div>

            </div>
            <div className="slide">
              <div className='OneText'>
                <img className='ImageLogo' src="Image/higt.svg" alt="Image/higt.svg" />
                Perfectly organized event{" "}
                <strong
                  style={{
                    color: "rgba(255, 255, 255, 0.43)",
                    fontFamily: "Haffer SQ TRIAL",

                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal",
                  }}
                >
                  at delhi and a huge
                </strong>{" "}
                shout out to StarClinch{" "}
                <strong
                  style={{
                    color: "rgba(255, 255, 255, 0.43)",
                    fontFamily: "Haffer SQ TRIAL",

                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal",
                  }}
                >
                  {" "}
                  arrangements perfectly. Very punctual
                </strong>
              </div>

            </div>
          </Slider>
        </div>
      )}
    </div>
  )
}

export default FivePage