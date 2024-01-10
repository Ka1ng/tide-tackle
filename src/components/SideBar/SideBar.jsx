import React from 'react'

export default function SideBar({ setShow, show, showRef, setReservShow, reservRef}) {
    return (


        <div className='sideBar'>
            <div className={!show? "sideBar-card":"sideBar-card show"} ref={showRef}>
                <svg onClick={() => setShow(!show)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cross">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                    <ul className='page-list'>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">MENUS</a></li>
                        <li><a href="#">TASTING MENU</a></li>
                        <li><a href="#">WINE LIST</a></li>
                        <li><a href="#">EVENTS</a></li>
                        <li><a href="#">NEWS</a></li>
                    </ul>
                    <button onClick={()=>setReservShow(true)} ref={reservRef}>make a reservation</button>
                    <ul className='icon-list'>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-pinterest-p"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-yelp"></i>
                    </ul>
            </div>
            <div className={!show? "sideBar-background":"sideBar-background show"}></div>
        </div>








    )
}
