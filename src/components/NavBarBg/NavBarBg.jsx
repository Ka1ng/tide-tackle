import React from 'react'

export default function NavBarBg({ setShow, show, setReservShow }) {
    return (
        <div className="navBar active">
            <nav>
                <div className='nav-svg'>
                    <svg onClick={() => setShow(!show)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="bar">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                    </svg>
                </div>
                <div className="brand-logo">
                    <a href="/tide-tackle"><div className="logo">Tide & Tackle</div>
                        <p>SEAFOOD EST.1998</p></a>
                </div>

                <div className="nav-btn-div">
                    <button className='bg-trans' onClick={() => setReservShow(true)}>find a table</button>
                </div>
            </nav>
        </div>
    )
}
