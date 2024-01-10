import React from 'react'
import SideBar from './SideBar/SideBar'
import NavBarBg from './NavBarBg/NavBarBg'
import Reservation from './Reservation/Reservation'

import { useState, useRef, useEffect } from 'react'

export default function NavSideBarReservation() {

    // side bar show or not
    let [show, setShow] = useState(false)

    let showRef = useRef();
    let reservRef = useRef();
    let reservRemoveRef = useRef();

    useEffect(() => {

        let handler = (e) => {
            if (!showRef.current.contains(e.target)) {
                setShow(false)
            }
        }

        let reservHandler = (e) => {
            if (reservRef.current.contains(e.target)) {
                setShow(false)
            }
        }

        let reservRemoveHandler = (e) => {
            if (!reservRemoveRef.current.contains(e.target)) {
                setReservShow(false)
            }
        }

        document.addEventListener('mousedown', handler)
        document.addEventListener('mousedown', reservHandler)
        document.addEventListener('mousedown', reservRemoveHandler)

    }, [])

    //reservation show
    let [reservShow, setReservShow] = useState(false);

    return (
        <>
            <NavBarBg setShow={setShow} show={show} setReservShow={setReservShow} />
            <SideBar setShow={setShow} show={show} showRef={showRef} setReservShow={setReservShow} reservRef={reservRef} />
            {reservShow && <Reservation setReservShow={setReservShow} reservRemoveRef={reservRemoveRef} />}
        </>
    )
}
