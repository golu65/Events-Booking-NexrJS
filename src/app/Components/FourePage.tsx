import React from 'react'
import './FourePage.css'
import Image from 'next/image';

const imageUrls = [
  "/Image/b1.png",
  "/Image/b2.png",
  "/Image/b3.png",
  "/Image/b4.png",
  "/Image/b5.png",
  "/Image/b6.png",
  "/Image/b7.png",
  "/Image/b1.png",
  "/Image/b2.png",
  "/Image/b3.png",
  "/Image/b4.png",
  "/Image/b5.png",
  "/Image/b6.png",
  "/Image/b7.png",
  "/Image/b1.png",
  "/Image/b2.png",
  "/Image/b3.png",
  "/Image/b4.png",
  "/Image/b5.png",
  "/Image/b6.png",
  "/Image/b7.png",
];

const FourePage = () => {
  return (
    <div className='MainBoxFoure'>
      <div className='SecondBoxFoure'>
        <h1 className='OurText'>Our Clients</h1>
        <div className='HappyBox'>
          <h2 className='HappyText'>Happy clients, Happy us</h2>
          <img className='ImageArrowOneFoure' src="Image/arrowone.svg" alt="" />
        </div>

        <div className='LightBox'>
          <div className='LightBoxOne'></div>
        </div>
        <div className='MainLightBox'>
          <div className='LightOneBox'></div>
          <div className='LightSecBox'></div>
          <div className="marquee">
            {imageUrls.map((imageUrl, index) => (
              <div
                key={index}
                className="marquee-image"
                style={{

                  backgroundImage: `url(${process.env.PUBLIC_URL}${imageUrl})`,
                }}
              >
                <Image
                  className='ImageStyleFoure'
                  src={imageUrl}
                  alt={`Image ${index}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>

          <div className="marqueeOne">
            {imageUrls.map((imageUrl, index) => (
              <div
                key={index}
                className="marquee-image-One"
                style={{

                  backgroundImage: `url(${process.env.PUBLIC_URL}${imageUrl})`,
                }}
              >
                 <Image
                  className='ImageStyleFoure'
                  src={imageUrl}
                  alt={`Image ${index}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FourePage