"use client"
import React from 'react'
import './ThreePage.css'
import Link from 'next/link'
// import Link from 'next/link'
// import { useRouter } from 'next/router';


const ThreePage = () => {
  // const router = useRouter();
  return (
    <div className='MainBoxThree'>
      <div className='SecondBoxThree'>
        <div className='ArtitstBoxThree'>
          <div className='FirstArtitstBox '></div>
          <div className='SecondArtitsBox'></div>
          <div className='FirstArtitstBoxSec'></div>
          <div className='SecondArtitsBoxSec'></div>
        </div>

        <div className='SecArtitsBox'>
          <div className='FirstSecBox'></div>
          <div className='SecondSecBox'></div>
          <div className='FirstSecBoxSec'></div>
          <div className='SecondSecBoxSec'></div>
        </div>

        <div className='ThirdArtitsBox'>
          <div className='FirstThirdBox'></div>
          <div className='SecondThirdBox'></div>
          <div className='FirstThirdBoxSec'></div>
          <div className='SecondThirdBoxSec'></div>
        </div>

        <div className='FourBoxOneThree'>
          <div className='TextBox'>
            <div className='TextFild'>
              <h2 className='ThousendText'>25K+</h2>
              <h3 className='CelebritText'>Celebrities to choose from</h3>
            </div>
          </div>

          <div className='SeeBox'>

            <Link href='/categoery'>
            <div className='SeeOneBox'>
              <div className='TextLightBox'>
                <h3 className='SeeText'>See Price and</h3>
                <h3 className='SeeTextSec'>Book Now</h3>
              </div>
              <img className='ImageArrow' src="Image/Arror.svg" alt="arroe" />
            </div>
            </Link>
         


          </div>
        </div>

        <div className='SeeBoxSecond'>
          <div className='SeeOneBox'>
            <div className='TextLightBox'>
              <h2 className='SeeTextOne'>See Price and</h2>
              <h2 className='SeeTextSecTwo'>Book Now</h2>
            </div>
            <img className='ImageArrow' src="Image/Arror.svg" alt="arroe" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThreePage