import React from 'react'
import './Starter.css'
import starterMenu1 from '../../../data/starterMenu1.json'
import starterMenu2 from '../../../data/starterMenu2.json'

export default function Starter() {
  return (
    <div className='starter padding'>
      <div className="list-sub-title">REFRESH YOUR TASTE BUDS</div>
      <div className="list-title">STARTERS</div>
      <div className="menu-flex">
        <ul className="list-ul">
          {starterMenu1.map(item => (
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
          {starterMenu2.map(item => (
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
