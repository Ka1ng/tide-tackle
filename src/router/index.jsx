import Home from "../pages/Home";
import MenuPage from "../pages/MenuPage";
import Layout from "../pages/layout/Layout";
import BookATablePage from "../pages/BookATablePage";
import DiscoverMore from "../pages/DiscoverMore";
import TastingMenu from "../pages/TastingMenu";
import WineList from "../pages/WineList";
import Event from "../pages/Event"

// import {
//     createBrowserRouter,
// } from "react-router-dom";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/tide-tackle",
        element:  <Layout />,
        children: [
            {
               path: '',
               element: <Home/>
            },
            {
                path: "/tide-tackle/menu",
                element: <MenuPage/>
            },
            {
                path: "/tide-tackle/reservation",
                element: <BookATablePage/>
            },
            {
                path: "/tide-tackle/discover-more",
                element: <DiscoverMore/>
            },
            {
                path: "/tide-tackle/tasting-menu",
                element: <TastingMenu/>
            },
            {
                path: "/tide-tackle/wine-list",
                element: <WineList/>
            },
            {
                path: "/tide-tackle/event",
                element: <Event/>
            }
        ]
    },
]);

export default router;