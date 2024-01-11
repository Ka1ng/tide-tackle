import React from 'react'
import './TastingMenuFirst.css'
import TastingMenuPic1 from '../../../assets/tastingMenu-1.jpg'
import Fade from 'react-reveal/Fade';

export default function TastingMenuFirst() {
    return (
        <div className='tastingMenuFirst transformTop'>
            <div className="ourStory wrapper">
                <div className='wrapperText'>
                    <Fade bottom duration={1000} distance="50%">
                        <div className="sub-title">WE SERVE FRESHEST CATCHES</div>
                        <div className="sec-title">TASTING MENU</div>
                        <div className="text br">Choose one of our seasonal menus. Enjoy three sharing starters, followed by the feast of your choice. There is an option to add a cheese course onto each menu.</div>
                        <div className="text">We are happy to tweak your menu to suit any dietary requirements.</div>
                        <a href="/tide-tackle/reservation"><button className='bg-white'>Make A Reservation</button></a>
                    </Fade>
                </div>
                <div className='wrapperImg'>
                    <img src={TastingMenuPic1} alt="" />
                </div>
            </div>
        </div>
    )
}
