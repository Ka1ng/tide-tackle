import React from 'react'
import Header from '../components/MenuPageComponents/Header/Header'
import Starter from '../components/MenuPageComponents/Starter/Starter'
import AfterStarter from '../components/MenuPageComponents/AfterStarter/AfterStarter'
import MainCourses from '../components/MenuPageComponents/MainCourses/MainCourses'
import AfterMainCourses from '../components/MenuPageComponents/AfterMainCourses/AfterMainCourses'
import Desserts from '../components/MenuPageComponents/Desserts/Desserts'
import NavSideBarReservation from '../components/Nav-SideBar-Reservation'

export default function MenuPage() {

  return (
    <>
       <NavSideBarReservation/>
       <Header/>
       <Starter/>
       <AfterStarter/>
       <MainCourses/>
       <AfterMainCourses/>
       <Desserts/>
    </>
  )
}
