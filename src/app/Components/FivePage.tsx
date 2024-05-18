"use client"
import React, { useEffect, useState } from 'react';
import './FivePage.css'
import Slider from './Slider';

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
       
          <h1 className='HighText'>High Profile Clients Trust Us </h1>
        
      </div>
      {isMobileView ? (
        <div className='MobileBox'>
          <div className='OneOfBox'>
            <Slider>
              <div className="slide">
                <div className='OneText'>
                  <img className='ImageLogo' src="Image/higt.svg" alt="quotation marks" />
                  Had a great time working with the StarClinch team.{" "}
                  <strong
                    style={{
                      color: "rgba(255, 255, 255, 0.43)",
                      fontFamily: "Haffer SQ TRIAL",

                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "normal",
                    }}
                  >
                     One of the most professional companies and takes great care of the artists and their requirements.
                  </strong>{" "}
                  Thanks a lot.{" "}
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
                    Looking forward to work again and enjoy the hospitality Cheers
                  </strong>
                </div>
                {/* <div className='ImageSliderBox'></div> */}
                <h2 className='AbhiText'>-Abhishek Vyas (Singer)</h2>
              </div>
              <div className="slide">
                <div className='OneText'>
                  <img className='ImageLogo' src="Image/higt.svg" alt="icon pawan" />
                  We've hired multiple comedians and anchors through StarClinch.{" "}
                  <strong
                    style={{
                      color: "rgba(255, 255, 255, 0.43)",
                      fontFamily: "Haffer SQ TRIAL",

                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "normal",
                    }}
                  >
                   The team is very helpful
                  </strong>{" "}
                  {/* shout out to StarClinch{" "} */}
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
                    and goes above and beyond for their clients.
                  </strong>
                </div>
                {/* <div className='ImageSliderBox'></div> */}
                <h2 className='AbhiText'>-Shaam Sundar (Magician)</h2>
              </div>
             
            </Slider>
          </div>
        </div>
      ) : (
        <div className='OneOfBox'>
          <Slider>
            <div className="slide">
              <div className='OneText'>
                <img className='ImageLogo' src="Image/higt.svg" alt="icon quotation marks" />
                Had a great time working with the StarClinch team.{" "}
                <strong
                  style={{
                    color: "rgba(255, 255, 255, 0.43)",
                    fontFamily: "Haffer SQ TRIAL",

                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal",
                  }}
                >
                   One of the most professional companies and takes great care of the artists and their requirements. 
                </strong>{" "}
                Thanks a lot.{" "}
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
                  Looking forward to work again and enjoy the hospitality Cheers
                </strong>
              </div>

            </div>
            <div className="slide">
              <div className='OneText'>
                <img className='ImageLogo' src="Image/higt.svg" alt="quotation marks" />
                We've hired multiple comedians and anchors through StarClinch. {" "}
                <strong
                  style={{
                    color: "rgba(255, 255, 255, 0.43)",
                    fontFamily: "Haffer SQ TRIAL",

                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal",
                  }}
                >
                  The team is very helpful
                </strong>{" "}
             
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
                  and goes above and beyond for their clients.
                </strong>
              </div>

            </div>

            <div className="slide">
              <div className='OneText'>
                <img className='ImageLogo' src="Image/higt.svg" alt="quotation marks" />
                We've hired multiple comedians and anchors  {" "}
                <strong
                  style={{
                    color: "rgba(255, 255, 255, 0.43)",
                    fontFamily: "Haffer SQ TRIAL",

                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal",
                  }}
                >
                  through StarClinch. The team is very helpful
                </strong>{" "}
             
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
                  and goes above and beyond for their clients.
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