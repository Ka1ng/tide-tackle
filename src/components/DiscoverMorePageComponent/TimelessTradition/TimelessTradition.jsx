import React from 'react'
import TimelessTraditionPic from '../../../assets/discoveryMorePage-timelessTradition.jpg'
import './TimelessTradition.css'
import Fade from 'react-reveal/Fade';

export default function TimelessTradition() {
    return (
        <div className='timeless-tradition ourStory'>
            <div className="ourStory wrapper">
                <div className='wrapperImg'>
                    <img src={TimelessTraditionPic} alt="" />
                </div>
                <div className='wrapperText'>
                    <Fade bottom duration={1000} distance="50%">
                        <div className="sub-title">TIME PROVES QUALITY</div>
                        <div className="sec-title">TIMELESS TRADITION</div>
                        <div className="text br">Since the first restaurant opened at Darling Harbour in 1989, The PatioTime has brought together our passion for quality seafood, family values, and seasoned restaurant experience. Every time you eat with us, you’re tasting years of hard work, innovation, and commitment to good food.</div>
                        <a href="/tide-tackle/menu"><button className="bg-lateseagreen">Dine With Us</button></a>
                    </Fade>
                </div>
            </div>
        </div>
    )
}
