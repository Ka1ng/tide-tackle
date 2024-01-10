import React from 'react'
import NavSideBarReservation from '../components/Nav-SideBar-Reservation'
import TastingMenuFirst from '../components/TastingMenuPageComponent/TastingMenuFirst/TastingMenuFirst'
import TastingMenuSec from '../components/TastingMenuPageComponent/TastingMenuSec/TastingMenuSec'
import TastingMenuThird from '../components/TastingMenuPageComponent/TastingMenuThird/TastingMenuThird'

export default function TastingMenu() {
    return (
        <>
            <NavSideBarReservation />
            <TastingMenuFirst/>
            <TastingMenuSec/>
            <TastingMenuThird/>
        </>
    )
}
