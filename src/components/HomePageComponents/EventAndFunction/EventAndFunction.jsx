import React from 'react'
import './EventAndFunction.css'
import EventAndFunctionPic from '../../../assets/event-function.jpg'
import Fade from 'react-reveal/Fade';

export default function EventAndFunction() {
    return (
        <>
            <div className="eventAndFunction wrapper">
                <div className='wrapperText'>
                    <Fade bottom duration={1000} distance="50%">
                        <div className="sub-title">AN IDEAL PRIVATE EVENT VENUE</div>
                        <div className="sec-title">EVENTS & FUNCTIONS</div>
                        <div className="text">Tide & Tackle is the perfect place for your next event or function. Celebrate at one of Australia’s most awarded restaurants. Whether it’s a cocktail party, intimate wedding, corporate event, sit down lunch or dinner we can accommodate all your function needs.</div>
                    </Fade>
                    <Fade bottom duration={1000} distance="50%">
                        <ul>
                            <li><a href="/event">I. Private Dining Room</a></li>
                            <li><a href="/event">II. Functions Package</a></li>
                            <li><a href="/event">III. Beverage Package</a></li>
                        </ul>
                    </Fade>
                </div>
                <div className='wrapperImg'>
                    <img src={EventAndFunctionPic} alt="" />
                </div>
            </div>

        </>

    )
}
