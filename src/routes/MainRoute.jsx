import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/home/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";


const router = createBrowserRouter([{
    path:"/",
    element:<MainLayouts/>,
    children:[
        {
            path: "/",
            element:<Home/>
        },
        {
            path:"/register",
            element:<Register/>
        },
        {
            path:"/login",
            element:<Login/>
        }
    ]
}])

export default router