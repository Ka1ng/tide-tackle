import { useState } from 'react'
import './NavBar.css'

export default function NavBar({ setShow, show, setReservShow }) {
 
    let [navBar, setNavBar] = useState(false);

    let navBarChangeBg = ()=>{
        if(window.scrollY > 80){
            setNavBar(true);
        }
        else{
            setNavBar(false);
        }
    }

    document.addEventListener('scroll', navBarChangeBg)
     
    return (
        <>
            <div className={navBar? "navBar active": "navBar"}>
                <nav>
                    <div className='nav-svg'>
                        <svg onClick={() => setShow(!show)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="bar">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                        </svg>
                    </div>
                    <div className="brand-logo">
                        <a href="/"><div className="logo">Tide & Tackle</div>
                            <p>SEAFOOD EST.1998</p></a>
                    </div>

                    <div className="nav-btn-div">
                        <button className='bg-trans' onClick={() => setReservShow(true)}>find a table</button>
                    </div>
                </nav>
            </div>
        </>

    )
}
