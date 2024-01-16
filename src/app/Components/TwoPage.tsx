import React,{useEffect} from 'react'
import './TwoPage.css'

const TwoPage = () => {
  // useEffect(() => {
  //   const text = document.getElementById("textLine");
  //   text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
  //   const ele = document.querySelectorAll("span");
  //   for (let i = 1; i < ele.length; i++) {
  //     ele[i].style.transform = "rotate(" + i * 10 + "deg)";
  //   }
  // }, []);
  return (
    <div className='MainBoxTwo'>
      <div className='SecondBoxOne'>
        <div className='LookBox'>
          <h2 className='LookingText' >Look What Stars have to say</h2>
        </div>
        <div className='LookBoxSec'>
          <h2 className='RecoText'>
            Recognized excellence by the top celebrities. Get the inside scoop
            - top celebrities share their thoughts on working with StarClinch.
          </h2>
        </div>
      </div>

      <div className='ThirdBoxTwo'>
        <div className='FirstOneBox'></div>
        <div className='SecondFirstBox'>
          <div className='PerfectBox'>
            <div className='PerfectText'>
              Perfectly organized event{" "}
              <strong
                style={{
                  color: "rgba(255, 255, 255, 0.43)",
                  fontFamily: "Haffer SQ TRIAL",
                }}
              >
                at Pune and a huge
              </strong>{" "}
              shout out to StarClinch{" "}
              <strong
                style={{
                  color: "rgba(255, 255, 255, 0.30)",
                }}
              >
                for this wonderful opportunity
              </strong>

            </div>
            <h1 className='ArijitText'>-Arijit Singh</h1>
          </div>
        </div>

        <div className='FourBoxOne'>
          <div className='ArtistCircleBox'>
          </div>
          <div className='CirculBox'>
            <div className='CirclleSecBox'>
              <div className='CirclleThirdBox'>
                <div className='containerStyleCircle'  id="textLine">
                  {/* <h2 className='YearOne'> YEARS OF EXCELLENCE IN EN-TECH IN STARTUP</h2> */}
                </div>
                <div>
                  <h1 className='CircleText'>
                    STARCLINCH VERIFIED ARTISTS
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TwoPage