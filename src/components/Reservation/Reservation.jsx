import React from 'react'
import './Reservation.css'

export default function Reservation({setReservShow, reservRemoveRef}) {
    return (
        <div className='reservation'>
            <div className="reservation-wrapper" ref={reservRemoveRef}>
                <svg onClick={()=>setReservShow(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cross">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                <div className="sec-title">Make a <br />Reservation</div>
                <div className="text">Phone bookings: +95 951183975. Closed Sunday <br />
                    nights and Mondays. We are truly honored and thrilled to have you share this momentous occasion with us.</div>
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
                    <input type="date" placeholder='Choose your date' />
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
        </div>
    )
}
