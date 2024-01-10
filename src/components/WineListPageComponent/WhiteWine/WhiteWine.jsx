import React from 'react'
import WhiteWine1 from '../../../data/whiteWine1.json'
import WhiteWine2 from '../../../data/whiteWine2.json'
import './WhiteWine.css'
import Fade from 'react-reveal/Fade';

export default function WhiteWine() {
    return (
        <>
            <div className='whiteWine padding'>
                <div className="list-sub-title">REFRESH YOUR TASTE BUDS</div>
                <div className="list-title">White Wines</div>
                <div className="menu-flex">
                    <ul className="list-ul">
                        {WhiteWine1.map(item => (
                            <div className="list-item" key={item.id}>
                                <div className="list-item-firstSection">
                                    <div className="item-name">{item.name}</div>
                                    <div className="item-line"></div>
                                    <div className="item-price">${item.price}</div>
                                </div>
                                <div className="list-item-secSection">
                                    <div className="item-ingredient">{item.ingredient}</div>
                                </div>
                            </div>
                        ))}
                    </ul>
                    <ul className="list-ul">
                        {WhiteWine2.map(item => (
                            <div className="list-item" key={item.id}>
                                <div className="list-item-firstSection">
                                    <div className="item-name">{item.name}</div>
                                    <div className="item-line"></div>
                                    <div className="item-price">${item.price}</div>
                                </div>
                                <div className="list-item-secSection">
                                    <div className="item-ingredient">{item.ingredient}</div>
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
            <Fade distance="50%">
                <div className="afterWhiteWine"></div>
            </Fade>
        </>

    )
}
