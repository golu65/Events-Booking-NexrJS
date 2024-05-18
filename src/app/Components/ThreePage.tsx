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
          <div >
            <img className='FirstArtitstBox ' src="Image/ArtistOne.webp" alt="magecian"/>
          </div>
          <div>
            <img  className='SecondArtitsBox' src="Image/ArtitsSec.webp" alt="magecian" />
          </div>
          <div >
            <img className='FirstArtitstBoxSec' src="Image/sec2.webp" alt="badasah" />
          </div>
          <div className='SecondArtitsBoxSec'>
            <img src="Image/sec1.webp" alt="nina" />
          </div>
        </div>

        <div className='SecArtitsBox'>
          <div >
            <img className='FirstSecBox' src="Image/SecOne.webp" alt="yo yo hanny" />
          </div>
          <div >
            <img className='SecondSecBox' src="Image/SecSec.webp" alt="euphoria" />
          </div>
          <div >
            <img className='FirstSecBoxSec' src="Image/sec5.webp" alt="sonam" />
          </div>
          <div >
            <img className='SecondSecBoxSec' src="Image/sec6.webp" alt="vivek bindra" />
          </div>
        </div>

        <div className='ThirdArtitsBox'>
          <div >
            <img  className='FirstThirdBox' src="Image/sec7.webp" alt="vishmil" />
          </div>
          <div >
            <img className='SecondThirdBox' src="Image/sec8.webp" alt="sahid kapoor" />
          </div>
          <div>
            <img  className='FirstThirdBoxSec' src="Image/sec3.webp" alt="kubbra sait" />
          </div>
          <div >
            <img className='SecondThirdBoxSec' src="Image/sec4.webp" alt="manish dev" />
          </div>
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
        <Link href='/categoery'>
          <div className='SeeOneBox'>
            <div className='TextLightBox'>
              <h2 className='SeeTextOne'>See Price and</h2>
              <h2 className='SeeTextSecTwo'>Book Now</h2>
            </div>
            <img className='ImageArrow' src="Image/Arror.svg" alt="arroe" />
          </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ThreePage