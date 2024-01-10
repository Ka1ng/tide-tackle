import React from 'react'
import Desserts1 from '../../../data/desserts1.json'
import Desserts2 from '../../../data/desserts2.json'

export default function Desserts() {
    return (
        <div className='desserts padding'>
            <div className="list-sub-title">REFRESH YOUR TASTE BUDS</div>
            <div className="list-title">Desserts</div>
            <div className="menu-flex">
                <ul className="list-ul">
                    {Desserts1.map(item => (
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
                    {Desserts2.map(item => (
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
    )
}
