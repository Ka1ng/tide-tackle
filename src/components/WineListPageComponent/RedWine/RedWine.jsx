import React from 'react'
import RedWinePic1 from '../../../assets/wineListPage-redWine1.jpg'
import RedWinePic2 from '../../../assets/wineListPage-redWine2.jpg'
import RedWineData from '../../../data/redWine.json'
import Fade from 'react-reveal/Fade';

export default function RedWine() {
    return (
        <div className='redWine padding'>
            <div className="list-sub-title">REFRESH YOUR TASTE BUDS</div>
            <div className="list-title">SPARKLING</div>
            <div className="menu-flex">
                <ul className="list-ul">
                    {RedWineData.map(item => (
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
                    <Fade left distance="50%">
                        <div className="smallImgContainer">
                            <img src={RedWinePic2} alt="" />
                        </div>
                    </Fade>
                </ul>
                <Fade bottom distance="50%">
                    <div className="bigImgContainer">
                        <img src={RedWinePic1} alt="" />
                    </div>
                </Fade>
            </div>
        </div>
    )
}
