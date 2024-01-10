import React from 'react'
import './Sparkling.css'
import SparklingPic1 from '../../../assets/wineListPage-sparkling1.jpg'
import SparklingPic2 from '../../../assets/wineListPage-sparkling2.jpg'
import SparklingData from '../../../data/sparkling.json'
import Fade from 'react-reveal/Fade';

export default function Sparkling() {
    return (
        <div className='sparkling padding'>
            <div className="list-sub-title">REFRESH YOUR TASTE BUDS</div>
            <div className="list-title">SPARKLING</div>
            <div className="menu-flex">
                <Fade bottom distance="50%">
                    <div className="bigImgContainer">
                        <img src={SparklingPic1} alt="" />
                    </div>
                </Fade>
                <ul className="list-ul">
                    <span className='gls'>GLS</span>
                    <span className='btl'>BTL</span>
                    {SparklingData.map(item => (
                        <div className="list-item" key={item.id}>
                            <div className="list-item-firstSection">
                                <div className="item-name">{item.name}</div>
                                <div className="item-line"></div>
                                <div className="item-price">${item.glassPrice}</div>
                                <div className="item-price">${item.bottlePrice}</div>
                            </div>
                            <div className="list-item-secSection">
                                <div className="item-ingredient">{item.ingredient}</div>
                            </div>
                        </div>
                    ))}
                    <Fade right distance="50%">
                        <div className="smallImgContainer">
                            <img src={SparklingPic2} alt="" />
                        </div>
                    </Fade>
                </ul>
            </div>
        </div>
    )
}
