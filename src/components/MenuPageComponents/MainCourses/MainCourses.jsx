import React from 'react'
import MainCourses1 from '../../../data/mainCourses1.json'
import MainCourses2 from '../../../data/mainCourses2.json'

export default function MainCourses() {
  return (
    <div className='mainCourses padding'>
      <div className="list-sub-title">REFRESH YOUR TASTE BUDS</div>
      <div className="list-title">MAIN COURSES</div>
      <div className="menu-flex">
        <ul className="list-ul">
          {MainCourses1.map(item => (
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
          {MainCourses2.map(item => (
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
