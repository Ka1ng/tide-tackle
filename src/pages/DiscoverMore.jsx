import React from 'react'
import OurStory from '../components/DiscoverMorePageComponent/OurStory/OurStory';
import FriendOfSea from '../components/DiscoverMorePageComponent/FriendOfSea/FriendOfSea';
import Experience from '../components/DiscoverMorePageComponent/Experience/Experience';
import TimelessTradition from '../components/DiscoverMorePageComponent/TimelessTradition/TimelessTradition';
import NavSideBarReservation from '../components/Nav-SideBar-Reservation';

export default function DiscoverMore() {

    return (
        <>
            <NavSideBarReservation/>
            <OurStory/>
            <FriendOfSea/>
            <Experience/>
            <TimelessTradition/>
        </>

    )
}
