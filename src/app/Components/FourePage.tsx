import React from 'react'
import './FourePage.css'
import Image from 'next/image';

const imageUrls = [
  "/Image/b1.webp",
  "/Image/b2.webp",
  "/Image/b3.webp",
  "/Image/b4.webp",
  "/Image/b5.webp",
  "/Image/b6.webp",
  "/Image/b7.webp",
  "/Image/b8.webp",
  "/Image/b9.webp",
  "/Image/b10.webp",
  "/Image/b11.webp",
  "/Image/b12.webp",
  "/Image/b13.webp",
  "/Image/b14.webp",
  "/Image/b15.webp",
  "/Image/b16.webp",
  "/Image/b17.webp",
  "/Image/b18.webp",
  "/Image/b19.webp",
  "/Image/b20.webp",
  "/Image/b21.webp",
  "/Image/b1.webp",
  "/Image/b2.webp",
  "/Image/b3.webp",
  "/Image/b4.webp",
  "/Image/b5.webp",
  "/Image/b6.webp",
  "/Image/b7.webp",
  "/Image/b8.webp",
  "/Image/b9.webp",
  "/Image/b10.webp",
  "/Image/b11.webp",
  "/Image/b12.webp",
  "/Image/b13.webp",
  "/Image/b14.webp",
  "/Image/b15.webp",
  "/Image/b16.webp",
  "/Image/b17.webp",
  "/Image/b18.webp",
  "/Image/b19.webp",
  "/Image/b20.webp",
  "/Image/b21.webp",
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