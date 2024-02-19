import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/home/home/Home";


const router = createBrowserRouter([{
    path:"/",
    element:<MainLayouts/>,
    children:[
        {
            path: "/",
            element:<Home/>
        }
    ]
}])

export default router