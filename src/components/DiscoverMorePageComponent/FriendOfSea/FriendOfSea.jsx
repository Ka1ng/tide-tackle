import React from 'react'
import './FriendOfSea.css'
import FriendOfSeaPic from '../../../assets/discoveryMorePage-friendOfSea.jpg'
import Fade from 'react-reveal/Fade';

export default function FriendOfSea() {
    return (
        <div className='ourStory'>
            <div className="ourStory wrapper">
                <div className='wrapperImg'>
                    <img src={FriendOfSeaPic} alt="" />
                </div>
                <div className='wrapperText'>
                    <Fade bottom duration={1000} distance="50%">
                        <div className="sub-title">SUSTAINABLE SEAFOOD RESTAURANT</div>
                        <div className="sec-title">FRIEND OF THE SEA</div>
                        <div className="text br">Sustainability is a key concept that is also spreading into the hospitality industry.</div>
                        <div className="text">By sourcing their fish and seafood from certified suppliers, restaurants and other food outlets can ensure not only the traceability of the products that they are selling but also that sustainable restaurant practices are contributing to the sustainability and environmental impact of their operations.</div>
                        <a href="/tide-tackle/menu"><button className="bg-lateseagreen">View Full Menu</button></a>
                    </Fade>
                </div>
            </div>
        </div>
    )
}
