import React from 'react'
import NavSideBarReservation from '../components/Nav-SideBar-Reservation'
import EventAndFunction from '../components/EventPageComponent/EventAndFunction/EventAndFunction'
import Wedding from '../components/EventPageComponent/Wedding/Wedding'
import Private from '../components/EventPageComponent/Private/Private'

export default function Event() {
    return (
        <>
            <NavSideBarReservation />
            <EventAndFunction/>
            <Wedding/>
            <Private/>
        </>
    )
}
