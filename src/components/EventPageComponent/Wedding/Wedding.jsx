import React from 'react'
import EventPic2 from '../../../assets/eventPic3.jpg'
import Fade from 'react-reveal/Fade';

export default function Wedding() {
    return (
        <div className='ourStory'>
            <div className="ourStory wrapper">
                <div className='wrapperImg'>
                    <img src={EventPic2} alt="" />
                </div>
                <div className='wrapperText'>
                    <Fade bottom duration={1000} distance="50%">
                        <div className="sub-title">AN IDEAL PRIVATE EVENT VENUE</div>
                        <div className="sec-title">WEDDINGS</div>
                        <div className="text">Tide & Tackle is the perfect place for your next event or function. Celebrate at one of Australia’s most awarded restaurants. Whether it’s a cocktail party, intimate wedding, corporate event, sit down lunch or dinner we can accommodate all your function needs.</div>
                        <a href="#"><button className="bg-lateseagreen longer">Request A Quote</button></a>
                    </Fade>
                </div>
            </div>
        </div>
    )
}
