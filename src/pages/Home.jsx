import Header from '../components/HomePageComponents/Header/Header'
import FreshAndLocal from '../components/HomePageComponents/FreshAndLocal/FreshAndLocal'
import OurStory from '../components/HomePageComponents/OurStory/OurStory'
import OurMenu from '../components/HomePageComponents/OurMenu/OurMenu'
import SelectedMenu from '../components/HomePageComponents/SelectedMenu/SelectedMenu'
import EventAndFunction from '../components/HomePageComponents/EventAndFunction/EventAndFunction'
import Experience from '../components/HomePageComponents/Experience/Experience'
import NavBar from '../components/NavBar/NavBar'
import Reservation from '../components/Reservation/Reservation'
import SideBar from '../components/SideBar/SideBar'

import { useState, useRef, useEffect } from 'react'

function Home() {

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
      <NavBar setShow={setShow} show={show} setReservShow={setReservShow} />
      <SideBar setShow={setShow} show={show} showRef={showRef} setReservShow={setReservShow} reservRef={reservRef} />
      <Header />
      <FreshAndLocal />
      {reservShow && <Reservation setReservShow={setReservShow} reservRemoveRef={reservRemoveRef} />}
      <OurStory />
      <OurMenu />
      <SelectedMenu />
      <EventAndFunction />
      <Experience />
    </>
  )
}

export default Home
