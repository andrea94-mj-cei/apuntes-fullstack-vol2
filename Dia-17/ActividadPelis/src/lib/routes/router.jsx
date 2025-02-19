import { createBrowserRouter } from "react-router";

import Layout from "@/Layout";
import Error from "@/pages/Error";

import Home from "@/pages/Home";
import Catalogo from "@/pages/Catalogo";
import InfoPeli from "@/pages/InfoPeli";
import Perfil from "@/pages/Perfil"

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
            path: "/perfil",
            element: <Perfil/>
        },
        {
            path: "/infoPeli/:id",
            element: <InfoPeli/>
        },
        {
            path: "*",
            element: <Error/>
        }
    ]

}])

export default router