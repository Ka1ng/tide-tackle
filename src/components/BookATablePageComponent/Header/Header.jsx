import React, { useState } from 'react'
import BookATablePic from '../../../assets/bookATablePage-header.jpg'
import './Header.css'

export default function Header() {

    return (
        <div className='bookATablePage'>
            <div className="wrapper">
                <div className='wrapperText'>
                    <div className="sub-title">Make a Reservation</div>
                    <div className='sec-title'>Book A Table</div>
                    <div className="text">Phone bookings: +95 951183975. Closed Sunday night and Mondays.</div>
                    <div className="text">Due to the vast amount of no-shows, all bookings must now be secured with a credit card which will be charged $20 if you do not show up for your booking.</div>
                    <div className="form-control">
                        <select name="dfdas" id="">
                            <option value="">1 person</option>
                            <option value="">2 person</option>
                            <option value="">3 person</option>
                            <option value="">4 person</option>
                            <option value="">5 person</option>
                            <option value="">6 person</option>
                            <option value="">7 person</option>
                            <option value="">8 person</option>
                            <option value="">9 person</option>
                            <option value="">10 person</option>
                            <option value="">11 person</option>
                            <option value="">12 person</option>
                            <option value="">13 person</option>
                            <option value="">14 person</option>
                            <option value="">15 person</option>
                            <option value="">16 person</option>
                            <option value="">17 person</option>
                            <option value="">18 person</option>
                            <option value="">19 person</option>
                            <option value="">20 person</option>
                        </select>
                        <input type="date"/>
                        <select name="" id="" className='timing'>
                            <option value="">9:00 am</option>
                            <option value="">9:30 am</option>
                            <option value="">10:00 am</option>
                            <option value="">10:30 am</option>
                            <option value="">11:00 am</option>
                            <option value="">11:30 am</option>
                            <option value="">12:00 pm</option>
                            <option value="">12:30 pm</option>
                            <option value="">1:00 pm</option>
                            <option value="">1:30 pm</option>
                            <option value="">2:00 pm</option>
                            <option value="">2:30 pm</option>
                            <option value="">3:00 pm</option>
                            <option value="">3:30 pm</option>
                            <option value="">4:00 pm</option>
                            <option value="">4:30 pm</option>
                            <option value="">5:00 pm</option>
                            <option value="">5:30 pm</option>
                            <option value="">6:00 pm</option>
                            <option value="">6:30 pm</option>
                            <option value="">7:00 pm</option>
                            <option value="">7:30 pm</option>
                            <option value="">8:00 pm</option>
                            <option value="">8:30 pm</option>
                            <option value="">9:00 pm</option>
                            <option value="">9:30 pm</option>
                            <option value="">10:00 pm</option>
                            <option value="">10:30 pm</option>
                            <option value="">11:00 pm</option>
                            <option value="">11:30 pm</option>
                        </select>
                        <button className='bg-white'>Book now</button>
                    </div>
                </div>
                <div className='wrapperImg'>
                    <img src={BookATablePic} alt="" />
                </div>
            </div>
        </div>
    )
}
