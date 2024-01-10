import React from 'react'
import TastingMenuPic2 from '../../../assets/tastingMenu-2.jpg'
import './TastingMenuSec.css'
import Fade from 'react-reveal/Fade';

export default function TastingMenuSec() {
    return (
        <div className="tastingMenuSec">
            <div className="tastingMenu-wrapper">
                <div className='wrapperImgContainer'>
                    <img src={TastingMenuPic2} alt="" />
                </div>
                <div className='wrapperTextContainer'>
                    <Fade bottom duration={1000} distance="50%">
                        <div className="sub-title">£55.00 PER PERSON</div>
                        <div className="sec-title">MIXED FISH FEAST</div>
                        <div className='star'>*</div>
                        <div className="text br">Whipped butternut squash <br />
                            with Whitelake goat’s curd and hazelnuts</div>
                        <br />
                        <div className="text br">Cuttlefish croquettes <br />
                            with a herb mayonnaise</div>
                        <br />
                        <div className="text br">Cobb-smoked salmon ‘Hix cure’ <br />
                            with soda bread</div>
                        <br />
                        <div className="text br">Roasted mixed fish <br />
                            with seashore vegetables</div>
                        <br />
                        <div className="text br">Buttered autumn vegetables <br />
                            Cornish mid new potatoes</div>
                        <br />
                        <div className="text br">Temperley mess</div>
                        <div className='star'>*</div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}
