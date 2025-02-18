import {createBrowserRouter } from "react-router";

//importamos páginas especiales
import Layout from "../../Layout";
import Error from "../../pages/Error"

//importamos páginas
import Home from '../../pages/Home'
import BlogPost from '../../pages/BlogPost'
import Users from '../../pages/Users'



const router = createBrowserRouter([{
    path:"/",
    element: <Layout/>,
    children: [
        {
            index: true, //la ruta por defecto
            element: <Home/>
        },
        {
            path: "/blog",
            element: <BlogPost/>
        },
        {
            path: "/blog/:blogId",
            element: <BlogPost/>
        },
        {
            path: "/users",
            element: <Users/>
        },
        {
            path: "*",
            element: <Error/>
        }

    ]
}]);

export default router;

