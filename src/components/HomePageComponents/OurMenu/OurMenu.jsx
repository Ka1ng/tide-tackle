import React from 'react'
import './OurMenu.css'
import OurMenuPic from '../../../assets/our-menu.jpg'
import Fade from 'react-reveal/Fade';

export default function OurMenu() {
    return (
        <div className='ourStory'>
            <div className="ourStory wrapper">

                <div className='wrapperText'>
                    <Fade bottom duration={1000} distance="50%">
                        <div className="sub-title">WE SERVE FRESHEST CATCHES</div>
                        <div className="sec-title">Our Menu</div>
                        <div className="text">The best of local produce, fish and seafood caught off the South West coast. Our menus change twice daily depending on what the fishermen have brought in to us. </div>
                    </Fade>
                    <Fade bottom duration={1000} distance="50%">
                        <ul>
                            <li><a href="/menu">I. A la Carte Menu</a></li>
                            <li><a href="/tasting-menu">II. Tasting Menu</a></li>
                            <li><a href="/wine-list">III. Wine List</a></li>
                        </ul>
                    </Fade>
                </div>

                <div className='wrapperImg'>
                    <img src={OurMenuPic} alt="" />
                </div>
            </div>
        </div>


    )
}
