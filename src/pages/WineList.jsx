import React from 'react'
import NavSideBarReservation from '../components/Nav-SideBar-Reservation'
import Header from '../components/WineListPageComponent/Header/Header'
import Sparkling from '../components/WineListPageComponent/Sparkling/Sparkling'
import AfterSparkling from '../components/WineListPageComponent/AfterSparkling/AfterSparkling'
import WhiteWine from '../components/WineListPageComponent/WhiteWine/WhiteWine'
import RedWine from '../components/WineListPageComponent/RedWine/RedWine'

export default function WineList() {
  return (
    <>
      <NavSideBarReservation/>
      <Header/>
      <Sparkling/>
      <AfterSparkling/>
      <WhiteWine/>
      <RedWine/> 
    </>
  )
}
