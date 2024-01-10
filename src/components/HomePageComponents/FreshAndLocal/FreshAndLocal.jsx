import React from 'react'
import './FreshAndLocal.css'
import Fade from 'react-reveal/Fade';

export default function FreshAndLocal() {
  return (

    <div className='freshAndLocal'>
      <Fade bottom duration={1000} distance="100px">
        <div className="sub-title">Tide & Tackle seafood philosophy</div>
        <div className="sec-title">Fresh & Local</div>
        <div className="text">We serve only the freshest catches from water.
          Seafood is our passion, <br />freshness is our mission, and quality is our commitment</div>
      </Fade>
      <a href="/tide-tackle/discover-more">
        <Fade bottom duration={1000} distance="100px">
          <button className='bg-lateseagreen'>discover more</button>
        </Fade>
      </a>

    </div>

  )
}
