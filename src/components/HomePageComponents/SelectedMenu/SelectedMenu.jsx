import React from 'react'
import './SelectedMenu.css'
import selectedMenuItems from '../../../data/selectedMenu.json'

export default function SelectedMenu() {
    return (
        <div className='selectedMenu'>
            <div className="selectedMenu-wrapper">
                <div className="selectedMenu-container">
                    <div className="list-sub-title">Recommendations</div>
                    <div className="list-title">Selected Menus</div>
                    <ul className="list-ul">
                        {selectedMenuItems.map(item => (
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
        </div>
    )
}
