import React from 'react'
import TastingMenuPic3 from '../../../assets/tastingMenu-3.jpg'
import './TastingMenuThird.css'
import Fade from 'react-reveal/Fade';

export default function TastingMenuThird() {
    return (

        <div className='tastingMenuThird'>
            <div className="tastingMenu-wrapper">
                <div className='wrapperTextContainer'>
                    <Fade bottom duration={1000} distance="50%">
                        <div className="sub-title">£80.00 PER PERSON</div>
                        <div className="sec-title">SURF & TURF FEAST</div>
                        <div className='star'>*</div>
                        <div className="text br">Traditional Oliver Salat <br />
                            with Crystal Shrimps</div>
                        <br />
                        <div className="text br">Traditional Malaga Soup <br />
                            with Scampi and Cantabrian’s Cockles</div>
                        <br />
                        <div className="text br">Mellow Rice with Jowls and Iberian Pork <br />
                            Castanet and Green Garlic <br />
                            with Thyme Bearnaise</div>
                        <br />
                        <div className="text br">Cod Loin with “Pintarroja” Stew <br />
                            and Pumpkin</div>
                        <br />
                        <div className="text br">Beef Shank Cooked at 67 Degrees, <br />
                            Glazed Small Onions and Grilled Asparagus</div>
                        <br />
                        <div className="text br">Lemon Tart with Lime Sorbet Basil <br />
                            and Crumble</div>
                        <div className='star'>*</div>
                    </Fade>
                </div>
                <div className='wrapperImgContainer'>
                    <img src={TastingMenuPic3} alt="" />
                </div>
            </div>
        </div>
    )
}
