import React from 'react'
import './OurStory.css'
import OurStoryPic from '../../../assets/our-story.jpg'
import Fade from 'react-reveal/Fade';

export default function OurStory() {
    return (
        <div className='discovery-more ourStory'>
            <div className="ourStory wrapper">
                <div className='wrapperText'>
                    <Fade bottom duration={1000} distance="50%">
                        <div className="sub-title">About Tide & Tackle Seafood</div>
                        <div className="sec-title">Our Story</div>
                        <div className="text br">Food is the foundation of true happiness. Eating is a great way <br /> to socialize with loved ones.</div>
                        <div className="text">We see our customers as invited guests to a party, and we are the hosts. It’s our job every day to make every important aspect of the customer experience a little bit better.
                            A business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises.</div>
                        <div className="logo">Tide & Tackle</div>
                    </Fade>
                </div>
                <div className='wrapperImg'>
                    <img src={OurStoryPic} alt="" />
                </div>
            </div>
        </div>
    )
}
