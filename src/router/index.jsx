import Home from "../pages/Home";
import MenuPage from "../pages/MenuPage";
import Layout from "../pages/layout/Layout";
import BookATablePage from "../pages/BookATablePage";
import DiscoverMore from "../pages/DiscoverMore";
import TastingMenu from "../pages/TastingMenu";
import WineList from "../pages/WineList";
import Event from "../pages/Event"

import {
    createHashRouter,
} from "react-router-dom";

const router = createHashRouter([
    {
        path: "/",
        element:  <Layout />,
        children: [
            {
               path: '/',
               element: <Home/>
            },
            {
                path: "/menu",
                element: <MenuPage/>
            },
            {
                path: "/reservation",
                element: <BookATablePage/>
            },
            {
                path: "/discover-more",
                element: <DiscoverMore/>
            },
            {
                path: "/tasting-menu",
                element: <TastingMenu/>
            },
            {
                path: "/wine-list",
                element: <WineList/>
            },
            {
                path: "/event",
                element: <Event/>
            }
        ]
    },
]);

export default router;