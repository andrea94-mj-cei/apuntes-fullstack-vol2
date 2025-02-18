import { createBrowserRouter } from "react-router";

import Layout from "@/Layout";
import Error from "@/pages/Error";

import Home from "@/pages/Home";
import Catalogo from "@/pages/Catalogo";
import Info from "@/pages/Info";

const router = createBrowserRouter([{
    path:"/",
    element: <Layout/>,
    children:[
        {
            index: true,
            element: <Home/>
        },
        {
            path: "/catalogo",
            element: <Catalogo/>
        },
        {
            path: "/info",
            element: <Info/>
        },
        {
            path: "*",
            element: <Error/>
        }
    ]

}])

export default router